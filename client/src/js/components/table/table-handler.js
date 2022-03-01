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
    userDetailsVisibilityToggler,
    userMoreShowDropdownHandler,
    userMoreHideDropdownHandler,
    userMoreDropdownOutsideClickHandler,
    updateTableRowView,
    deleteTableRowAndDetails,
} from './table-view-updates';

const tableHandler = () => {
    const { tableBodyElm } = tableElements;

    updateTable();

    window.addEventListener('click', userMoreDropdownOutsideClickHandler);

    tableBodyElm.addEventListener('click', tableClickHandler);

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
        handledUsers = users.filter(
            (user) => user.paymentStatus === paymentFilter
        );
    }

    if (statusFilter !== 'all') {
        handledUsers = users.filter(
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
    const { tableBodyElm } = tableElements;

    let tableRowsMarkup;
    if (users.length > 0) {
        tableRowsMarkup = users.map(createDetailsTableMarkup).join(' ');
    } else {
        tableRowsMarkup = createTableRowPlaceholderHTML();
    }

    tableBodyElm.innerHTML = tableRowsMarkup;
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
        tableRowDetailsButtonElm,
        tableRowMoreElm,
        tableRowMoreDropdownElm,
        tableRowMoreCloseElm,
        tableRowActivateElm,
        tableRowDeleteElm,
    } = getTableRowInnerElements(tableRow);

    if (isElementClicked(event, tableRowDetailsButtonElm)) {
        const tableRowDetailsElm = getDetailsTableElement(tableRow);
        userDetailsVisibilityToggler(
            tableRowDetailsButtonElm,
            tableRowDetailsElm
        );
        return;
    }

    if (isElementClicked(event, tableRowMoreElm)) {
        userMoreShowDropdownHandler(tableRowMoreDropdownElm);
        return;
    }

    if (isElementClicked(event, tableRowMoreCloseElm)) {
        userMoreHideDropdownHandler(tableRowMoreDropdownElm);
        return;
    }

    if (isElementClicked(event, tableRowActivateElm)) {
        userStatusChangeHandler(tableRow);
        return;
    }

    if (isElementClicked(event, tableRowDeleteElm)) {
        deleteUserHandler(tableRow);
        return;
    }
};

const isElementClicked = (event, element) =>
    event.composedPath().includes(element);

const userStatusChangeHandler = (tableRowElement) => {
    const userId = tableRowElement.dataset.user;

    usersState.updateUserStatus(userId);

    const user = usersState.getUser(userId);
    updateTableRowView(tableRowElement, user);
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
