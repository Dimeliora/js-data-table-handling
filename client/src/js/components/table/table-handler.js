import ee from '../../utils/event-emitter';
import usersState from '../../state/users-state';
import handleState from '../../state/handle-state';
import {
    createTableRowHTML,
    createDetailsTableHTML,
    createDetailsTableRowHTML,
    createTableRowPlaceholderHTML,
    createDetailsTableRowPlaceholderHTML,
} from './table-template-creators';
import {
    tableElements,
    getTableRowCheckInputs,
    getDetailsTableElement,
    getTableRowInnerElements,
    getClickedTableRowElement,
} from './table-dom-elements';
import {
    showUserMoreDropdown,
    hideUserMoreDropdown,
    toggleUserDetailsTable,
    deleteTableRowAndDetails,
    hideUserMoreDropdownByOutsideClick,
} from './table-view-updates';
import { compose } from '../../utils/compose';
import {
    searchUsersByProperties,
    sortUsersListByProperty,
    filterUsersByPaymentStatus,
    filterUsersByActivityStatus,
} from './users-list-handlers';

const tableHandler = () => {
    const { tableBodyElement, tableCheckAllElement } = tableElements;

    updateTable();

    window.addEventListener('click', hideUserMoreDropdownByOutsideClick);

    tableBodyElement.addEventListener('click', tableClickHandler);

    tableCheckAllElement.addEventListener('change', checkAllUsersHandler);

    ee.on('header/filter-changed', updateTable);

    ee.on('panel/filter-changed', updateTable);

    ee.on('panel/search-value-changed', updateTable);

    ee.on('panel/sort-by-changed', updateTable);
};

const updateTable = () => {
    const users = usersState.getAllUsers();
    const handlersValues = handleState.getHandlersValues();

    const handledUsersList = handleUsersList(users, handlersValues);

    renderTableRows(handledUsersList);
};

const handleUsersList = (users, handlersValues) => {
    const SEARCH_PROPERTIES = [
        'firstName',
        'lastName',
        'email',
        'paymentDate',
        'lastLogin',
    ];
    const { paymentFilter, activityFilter, searchValue, sortBy } =
        handlersValues;

    return compose(
        sortUsersListByProperty(sortBy),
        searchUsersByProperties(searchValue, SEARCH_PROPERTIES),
        filterUsersByPaymentStatus(paymentFilter),
        filterUsersByActivityStatus(activityFilter)
    )(users);
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

const checkAllUsersHandler = (event) => {
    const { tableBodyElement } = tableElements;
    const tableRowsCheckInputs = getTableRowCheckInputs(tableBodyElement);

    for (const checkInput of tableRowsCheckInputs) {
        checkInput.checked = event.target.checked;
    }
};

tableHandler();
