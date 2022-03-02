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
    handlePaginationButtonsDisabledState,
} from './pagination-view-updates';

const paginationHandler = () => {
    const users = usersState.getAllUsers();
    const { rowsPerPage, currentPage } = handleState.getHandlersValues();

    const {
        paginationSelectElement,
        paginationSelectOptionElements,
        paginationPrevElement,
        paginationNextElement,
    } = paginationElements;

    updatePaginationView(users.length, rowsPerPage, currentPage);

    paginationSelectElement.addEventListener('click', showPaginationDropdown);

    document.addEventListener('click', hidePaginationDropdownByOutsideClick);

    for (const optionElement of paginationSelectOptionElements) {
        optionElement.addEventListener('click', rowsPerPageChangeHandler);
    }

    paginationPrevElement.addEventListener(
        'click',
        getPaginationPageChangeHandler(-1)
    );

    paginationNextElement.addEventListener(
        'click',
        getPaginationPageChangeHandler(1)
    );

    ee.on('table/users-list-handled', updatePaginationAfterFiltering);
};

const updatePaginationView = (usersCount, rowsPerPage, currentPage) => {
    const minPageNumber = 1;
    const maxPageNumber = Math.ceil(usersCount / rowsPerPage);

    updatePaginationSelectView(rowsPerPage);
    updatePaginationPagesView(rowsPerPage, currentPage, usersCount);
    handlePaginationButtonsDisabledState(
        currentPage,
        minPageNumber,
        maxPageNumber
    );
};

const rowsPerPageChangeHandler = ({ target }) => {
    const users = usersState.getAllUsers();
    const rowsPerPage = Number(target.dataset.paginationSelectOption);

    handleState.setRowsPerPage(rowsPerPage);
    handleState.setCurrentPage(1);

    hidePaginationDropdown();
    updatePaginationView(users.length, rowsPerPage, 1);

    ee.emit('pagination/rows-per-page-changed');
};

const getPaginationPageChangeHandler = (step) => () => {
    const users = usersState.getAllUsers();
    const { rowsPerPage, currentPage } = handleState.getHandlersValues();

    const minPageNumber = 1;
    const maxPageNumber = Math.ceil(users.length / rowsPerPage);

    let newPageNumber = currentPage + step;
    newPageNumber = Math.max(minPageNumber, newPageNumber);
    newPageNumber = Math.min(newPageNumber, maxPageNumber);

    handleState.setCurrentPage(newPageNumber);

    updatePaginationPagesView(rowsPerPage, newPageNumber, users.length);
    handlePaginationButtonsDisabledState(
        newPageNumber,
        minPageNumber,
        maxPageNumber
    );

    ee.emit('pagination/current-page-changed');
};

const updatePaginationAfterFiltering = (usersCount) => {
    const { rowsPerPage, currentPage } = handleState.getHandlersValues();

    const rowsLeftOnPage = usersCount - (currentPage - 1) * rowsPerPage;
    if (rowsLeftOnPage === 0 && currentPage > 1) {
        getPaginationPageChangeHandler(-1)();
    } else {
        updatePaginationView(usersCount, rowsPerPage, currentPage);
    }
};

paginationHandler();
