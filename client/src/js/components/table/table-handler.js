import usersState from '../../state/users-state';
import { createTableRowHTML } from './table-template-creators';
import {
    tableElements,
    getClickedTableRowElement,
    getTableRowInnerElements,
} from './table-dom-elements';
import {
    userMoreShowDropdownHandler,
    userMoreHideDropdownHandler,
    userMoreDropdownOutsideClickHandler,
} from './table-view-updates';

const tableHandler = () => {
    const { tableBodyElm } = tableElements;
    const users = usersState.getUsers();

    renderTableRows(tableBodyElm, users);

    window.addEventListener('click', userMoreDropdownOutsideClickHandler);

    tableBodyElm.addEventListener('click', tableClickHandler);
};

const renderTableRows = (tableBodyElm, users) => {
    const tableRowsMarkup = users.map(createTableRowHTML).join(' ');

    tableBodyElm.innerHTML = tableRowsMarkup;
};

const tableClickHandler = (event) => {
    const tableRow = getClickedTableRowElement(event);
    if (!tableRow) {
        return;
    }

    const tableRowElements = getTableRowInnerElements(tableRow);

    if (event.composedPath().includes(tableRowElements.tableRowMoreElm)) {
        userMoreShowDropdownHandler(tableRowElements.tableRowMoreDropdownElm);
    }

    if (event.composedPath().includes(tableRowElements.tableRowMoreCloseElm)) {
        userMoreHideDropdownHandler(tableRowElements.tableRowMoreDropdownElm);
    }
};

tableHandler();
