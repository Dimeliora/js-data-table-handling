import ee from '../../utils/event-emitter';
import usersState from '../../state/users-state';
import handleState from '../../state/handle-state';
import { paginationElements } from './pagination-dom-elements';
import {
    showPaginationDropdown,
    hidePaginationDropdown,
    updatePaginationPagesView,
    updatePaginationSelectView,
    hidePaginationDropdownByOutsideClick,
} from './pagination-view-updates';

const paginationHandler = () => {
    const { paginationSelectElement, paginationSelectOptionElements } =
        paginationElements;

    updatePaginationView();

    paginationSelectElement.addEventListener('click', showPaginationDropdown);

    document.addEventListener('click', hidePaginationDropdownByOutsideClick);

    for (const optionElement of paginationSelectOptionElements) {
        optionElement.addEventListener('click', rowsPerPageChangeHandler);
    }
};

const updatePaginationView = () => {
    const users = usersState.getAllUsers();
    const { rowsPerPage, currentPage } = handleState.getHandlersValues();

    updatePaginationSelectView(rowsPerPage);
    updatePaginationPagesView(rowsPerPage, currentPage, users.length);
};

const rowsPerPageChangeHandler = ({ target }) => {
    const rowsPerPage = Number(target.dataset.paginationSelectOption);

    handleState.setRowsPerPage(rowsPerPage);
    handleState.setCurrentPage(1);

    hidePaginationDropdown();
    updatePaginationView();

    ee.emit('pagination/rows-per-page-changed');
};

paginationHandler();
