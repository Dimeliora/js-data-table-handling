import ee from '../../utils/event-emitter';
import usersState from '../../state/users-state';
import filtersState from '../../state/filters-state';
import {
    createTableRowHTML,
    createDetailsTableHTML,
    createDetailsTableRowHTML,
    createTableRowPlaceholderHTML,
    createDetailsTableRowPlaceholderHTML,
} from './table-template-creators';
import {
    tableElements,
    getClickedTableRowElement,
    getTableRowInnerElements,
    getDetailsTableElement,
} from './table-dom-elements';
import {
    toggleUserDetailsTable,
    showUserMoreDropdown,
    hideUserMoreDropdown,
    hideUserMoreDropdownByOutsideClick,
    deleteTableRowAndDetails,
} from './table-view-updates';

const tableHandler = () => {
    const { tableBodyElement } = tableElements;

    updateTable();

    window.addEventListener('click', hideUserMoreDropdownByOutsideClick);

    tableBodyElement.addEventListener('click', tableClickHandler);

    ee.on('header/filter-changed', updateTable);

    ee.on('panel/filter-changed', updateTable);

    ee.on('panel/search-value-changed', updateTable);
};

const updateTable = () => {
    const users = usersState.getAllUsers();
    const filters = filtersState.getFilters();

    const handledUsersList = handleUsersList(users, filters);

    renderTableRows(handledUsersList);
};

const handleUsersList = (users, filters) => {
    const { paymentFilter, statusFilter, searchValue } = filters;

    let handledUsers = users;

    if (paymentFilter !== 'all') {
        handledUsers = handledUsers.filter(
            (user) => user.paymentStatus === paymentFilter
        );
    }

    if (statusFilter !== 'all') {
        handledUsers = handledUsers.filter(
            (user) => user.activityStatus === statusFilter
        );
    }

    if (searchValue.length > 0) {
        handledUsers = handledUsers.filter(
            (user) =>
                user.name.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue)
        );
    }

    return handledUsers;
};

const renderTableRows = (users) => {
    const { tableBodyElement } = tableElements;

    let tableRowsMarkup;
    if (users.length > 0) {
        tableRowsMarkup = users.map(createDetailsTableMarkup).join(' ');
    } else {
        tableRowsMarkup = createTableRowPlaceholderHTML();
    }

    tableBodyElement.innerHTML = tableRowsMarkup;
};

const createDetailsTableMarkup = (user) => {
    let tableRow = createTableRowHTML(user);
    tableRow += createDetailsTableHTML(user);

    let detailsTableRows;
    if (user.details.length > 0) {
        detailsTableRows = user.details
            .map(createDetailsTableRowHTML)
            .join(' ');
    } else {
        detailsTableRows = createDetailsTableRowPlaceholderHTML();
    }

    tableRow = tableRow.replace('{{details}}', detailsTableRows);

    return tableRow;
};

const tableClickHandler = (event) => {
    const tableRow = getClickedTableRowElement(event);
    if (!tableRow) {
        return;
    }

    const {
        tableRowDetailsButtonElement,
        tableRowMoreElement,
        tableRowMoreDropdownElement,
        tableRowMoreCloseElement,
        tableRowActivateElement,
        tableRowDeleteElement,
    } = getTableRowInnerElements(tableRow);

    if (isElementClicked(event, tableRowDetailsButtonElement)) {
        const tableRowDetailsElm = getDetailsTableElement(tableRow);
        toggleUserDetailsTable(
            tableRowDetailsButtonElement,
            tableRowDetailsElm
        );
        return;
    }

    if (isElementClicked(event, tableRowMoreElement)) {
        showUserMoreDropdown(tableRowMoreDropdownElement);
        return;
    }

    if (isElementClicked(event, tableRowMoreCloseElement)) {
        hideUserMoreDropdown(tableRowMoreDropdownElement);
        return;
    }

    if (isElementClicked(event, tableRowActivateElement)) {
        userStatusChangeHandler(tableRow);
        return;
    }

    if (isElementClicked(event, tableRowDeleteElement)) {
        deleteUserHandler(tableRow);
        return;
    }
};

const isElementClicked = (event, element) =>
    event.composedPath().includes(element);

const userStatusChangeHandler = (tableRowElement) => {
    const userId = tableRowElement.dataset.user;

    usersState.updateUserStatus(userId);

    updateTable();
};

const deleteUserHandler = (tableRowElement) => {
    const userId = tableRowElement.dataset.user;

    usersState.deleteUser(userId);

    deleteTableRowAndDetails(tableRowElement);

    const users = usersState.getAllUsers();
    if (users.length === 0) {
        tableElements.tableBodyElm.innerHTML = createTableRowPlaceholderHTML();
    }
};

tableHandler();
