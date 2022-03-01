import ee from '../../utils/event-emitter';
import usersState from '../../state/users-state';
import handleState from '../../state/handle-state';
import { paginationElements } from './pagination-dom-elements';
import {
    updatePaginationView,
    showPaginationDropdown,
    hidePaginationDropdown,
    hidePaginationDropdownByOutsideClick,
} from './pagination-view-updates';

const paginationHandler = () => {
    const { paginationSelectElement, paginationSelectOptionElements } =
        paginationElements;

    const users = usersState.getAllUsers();
    const { rowsPerPage } = handleState.getHandlersValues();
    updatePaginationView(rowsPerPage, users.length);

    paginationSelectElement.addEventListener('click', showPaginationDropdown);

    document.addEventListener('click', hidePaginationDropdownByOutsideClick);

    for (const paginationDropdownOption of paginationSelectOptionElements) {
        paginationDropdownOption.addEventListener(
            'click',
            rowsPerPageChangeHandler
        );
    }
};

const rowsPerPageChangeHandler = (event) => {
    const rowsPerPage = event.target.dataset.paginationSelectOption;

    handleState.setRowsPerPage(rowsPerPage);

    const users = usersState.getAllUsers();

    hidePaginationDropdown();
    updatePaginationView(rowsPerPage, users.length);

    ee.emit('pagination/rows-per-page-changed');
};

paginationHandler();
