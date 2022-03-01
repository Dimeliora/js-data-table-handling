import { tableElements } from './table-dom-elements';

export const toggleUserDetailsTable = (
    tableRowDetailsButtonElement,
    detailsElement
) => {
    if (detailsElement.style.maxHeight) {
        tableRowDetailsButtonElement.classList.remove(
            'row__details-button--active'
        );
        detailsElement.style.removeProperty('max-height');
    } else {
        tableRowDetailsButtonElement.classList.add(
            'row__details-button--active'
        );
        detailsElement.style.setProperty(
            'max-height',
            `${detailsElement.scrollHeight}px`
        );
    }
};

export const showUserMoreDropdown = (dropdownElement) => {
    const visibleDropdown =
        tableElements.tableBodyElement.querySelector('.more--visible');
    if (visibleDropdown) {
        hideUserMoreDropdown(visibleDropdown);
    }

    dropdownElement.classList.add('more--visible');
};

export const hideUserMoreDropdown = (dropdownElement) => {
    dropdownElement.classList.remove('more--visible');
};

export const hideUserMoreDropdownByOutsideClick = (event) => {
    const visibleDropdown =
        tableElements.tableBodyElement.querySelector('.more--visible');

    if (!visibleDropdown) {
        return;
    }

    if (
        !event.target.closest('[data-more-button]') &&
        !event.composedPath().includes(visibleDropdown)
    ) {
        hideUserMoreDropdown(visibleDropdown);
    }
};

export const deleteTableRowAndDetails = (tableRowElement) => {
    const detailsRowElement = tableRowElement.nextElementSibling;

    detailsRowElement.remove();
    tableRowElement.remove();
};
