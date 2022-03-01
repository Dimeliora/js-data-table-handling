import { paginationElements } from './pagination-dom-elements';

export const showPaginationDropdown = () => {
    const { paginationDropdownElement } = paginationElements;

    const dropdownHeight = paginationDropdownElement.scrollHeight;
    const dropdownBottomCoord =
        paginationDropdownElement.getBoundingClientRect().bottom;

    if (window.innerHeight - dropdownBottomCoord > dropdownHeight) {
        paginationDropdownElement.style.setProperty('bottom', '-5px');
        paginationDropdownElement.style.setProperty(
            'transform',
            'translateY(100%)'
        );
    } else {
        paginationDropdownElement.style.setProperty('top', '-5px');
        paginationDropdownElement.style.setProperty(
            'transform',
            'translateY(-100%)'
        );
    }

    paginationDropdownElement.classList.add('pagination__dropdown--visible');
};

export const hidePaginationDropdownByOutsideClick = (event) => {
    const { paginationDropdownElement, paginationSelectElement } =
        paginationElements;

    if (
        !event.composedPath().includes(paginationDropdownElement) &&
        !event.composedPath().includes(paginationSelectElement)
    ) {
        hidePaginationDropdown();
    }
};

export const hidePaginationDropdown = () => {
    const { paginationDropdownElement } = paginationElements;

    paginationDropdownElement.removeAttribute('style');
    paginationDropdownElement.classList.remove('pagination__dropdown--visible');
};

export const updatePaginationView = (rowsCount, itemsCount, currentPage) => {
    const { paginationSelectValueElement, paginationTotalElement } =
        paginationElements;

    paginationSelectValueElement.textContent = rowsCount;
    paginationTotalElement.textContent = itemsCount;
};
