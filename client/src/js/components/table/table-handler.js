import usersState from '../../state/users-state';
import { createTableRowHTML } from './table-template-creators';
import { tableElms } from './table-dom-elements';

const tableHandler = () => {
    const { tableBodyElm } = tableElms;
    const users = usersState.getUsers();

    renderTableRows(tableBodyElm, users);
};

const renderTableRows = (tableBodyElm, users) => {
    const tableRowsMarkup = users.map(createTableRowHTML).join(' ');

    tableBodyElm.innerHTML = tableRowsMarkup;
};

tableHandler();
