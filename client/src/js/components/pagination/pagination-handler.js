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
    const {
        paginationSelectElement,
        paginationSelectOptionElements,
        paginationPrevElement,
        paginationNextElement,
    } = paginationElements;

    updatePaginationView();

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
};

const updatePaginationView = () => {
    const users = usersState.getAllUsers();
    const { rowsPerPage, currentPage } = handleState.getHandlersValues();

    const minPageNumber = 1;
    const maxPageNumber = Math.ceil(users.length / rowsPerPage);

    updatePaginationSelectView(rowsPerPage);
    updatePaginationPagesView(rowsPerPage, currentPage, users.length);
    handlePaginationButtonsDisabledState(
        currentPage,
        minPageNumber,
        maxPageNumber
    );
};

const rowsPerPageChangeHandler = ({ target }) => {
    const rowsPerPage = Number(target.dataset.paginationSelectOption);

    handleState.setRowsPerPage(rowsPerPage);
    handleState.setCurrentPage(1);

    hidePaginationDropdown();
    updatePaginationView();

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

paginationHandler();
