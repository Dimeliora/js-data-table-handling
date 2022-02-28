import { tableElements, getTableRowInnerElements } from './table-dom-elements';
import { createTableRowHTML } from './table-template-creators';

export const userDetailsVisibilityToggler = (
    tableRowDetailsButtonElm,
    detailsElement
) => {
    if (detailsElement.style.maxHeight) {
        tableRowDetailsButtonElm.classList.remove(
            'row__details-button--active'
        );
        detailsElement.style.removeProperty('max-height');
    } else {
        tableRowDetailsButtonElm.classList.add('row__details-button--active');
        detailsElement.style.setProperty(
            'max-height',
            `${detailsElement.scrollHeight}px`
        );
    }
};

export const userMoreShowDropdownHandler = (dropdownElm) => {
    const visibleDropdown =
        tableElements.tableBodyElm.querySelector('.more--visible');
    if (visibleDropdown) {
        userMoreHideDropdownHandler(visibleDropdown);
    }

    dropdownElm.classList.add('more--visible');
};

export const userMoreHideDropdownHandler = (dropdownElm) => {
    dropdownElm.classList.remove('more--visible');
};

export const userMoreDropdownOutsideClickHandler = (event) => {
    const visibleDropdown =
        tableElements.tableBodyElm.querySelector('.more--visible');

    if (!visibleDropdown) {
        return;
    }

    if (
        !event.target.closest('[data-more-button]') &&
        !event.composedPath().includes(visibleDropdown)
    ) {
        userMoreHideDropdownHandler(visibleDropdown);
    }
};

export const updateTableRowView = (tableRowElement, user) => {
    tableRowElement.innerHTML = createTableRowHTML(user);
};

export const deleteTableRowAndDetails = (tableRowElement) => {
    const detailsRow = tableRowElement.nextElementSibling;
    detailsRow.remove();
    tableRowElement.remove();
};
