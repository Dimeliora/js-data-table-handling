import usersState from '../../state/users-state';
import {
    createTableRowHTML,
    createDetailsTableHTML,
    createDetailsTableRowHTML,
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
} from './table-view-updates';

const tableHandler = () => {
    const { tableBodyElm } = tableElements;
    const users = usersState.getUsers();

    renderTableRows(tableBodyElm, users);

    window.addEventListener('click', userMoreDropdownOutsideClickHandler);

    tableBodyElm.addEventListener('click', tableClickHandler);
};

const renderTableRows = (tableBodyElm, users) => {
    const tableRowsMarkup = users
        .map((user) => {
            let tableRow = createTableRowHTML(user);
            tableRow += createDetailsTableHTML(user);

            const detailsTableRows = user.details
                .map(createDetailsTableRowHTML)
                .join(' ');
            tableRow = tableRow.replace('{{details}}', detailsTableRows);

            return tableRow;
        })
        .join(' ');

    tableBodyElm.innerHTML = tableRowsMarkup;
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
    } = getTableRowInnerElements(tableRow);

    if (event.composedPath().includes(tableRowDetailsButtonElm)) {
        const tableRowDetailsElm = getDetailsTableElement(tableRow);
        userDetailsVisibilityToggler(
            tableRowDetailsButtonElm,
            tableRowDetailsElm
        );
    }

    if (event.composedPath().includes(tableRowMoreElm)) {
        userMoreShowDropdownHandler(tableRowMoreDropdownElm);
    }

    if (event.composedPath().includes(tableRowMoreCloseElm)) {
        userMoreHideDropdownHandler(tableRowMoreDropdownElm);
    }
};

tableHandler();
