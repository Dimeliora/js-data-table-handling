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

export const updatePaginationSelectView = (rowsCount) => {
    const { paginationSelectValueElement, paginationSelectOptionElements } =
        paginationElements;

    paginationSelectValueElement.textContent = rowsCount;

    for (const optionElement of paginationSelectOptionElements) {
        if (optionElement.dataset.paginationSelectOption == rowsCount) {
            optionElement.classList.add('pagination__dropdown-item--active');
        } else {
            optionElement.classList.remove('pagination__dropdown-item--active');
        }
    }
};

export const updatePaginationPagesView = (
    rowsCount,
    currentPage,
    totalItems
) => {
    const { paginationTotalElement, paginationCurrentElement } =
        paginationElements;

    const from = (currentPage - 1) * rowsCount + 1;
    let to = (currentPage - 1) * rowsCount + rowsCount;
    to = Math.min(to, totalItems);

    let currentElementText = `${from}-${to}`;
    if (from === to) {
        currentElementText = `${from}`;
    } else if (to === 0) {
        currentElementText = `${to}`;
    }

    paginationCurrentElement.textContent = currentElementText;

    paginationTotalElement.textContent = totalItems;
};

export const handlePaginationButtonsDisabledState = (page, min, max) => {
    const { paginationPrevElement, paginationNextElement } = paginationElements;

    paginationPrevElement.disabled = page <= min;
    paginationNextElement.disabled = page >= max;
};
