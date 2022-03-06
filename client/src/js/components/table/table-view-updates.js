import { getTableElements } from './table-dom-elements';

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
    const { tableBodyElement } = getTableElements();

    const visibleDropdown = tableBodyElement.querySelector('.more--visible');
    if (visibleDropdown) {
        hideUserMoreDropdown(visibleDropdown);
        return;
    }

    const dropdownBottomCoord = dropdownElement.getBoundingClientRect().bottom;
    const tableBottomCoord = tableBodyElement.getBoundingClientRect().bottom;

    if (dropdownBottomCoord > tableBottomCoord) {
        dropdownElement.style.setProperty('bottom', '-19px');
        dropdownElement.style.setProperty(
            '--arrow-y-position',
            'calc(100% - 38px)'
        );
    } else {
        dropdownElement.style.setProperty('top', '-20px');
        dropdownElement.style.setProperty('--arrow-y-position', '22px');
    }

    dropdownElement.classList.add('more--visible');
};

export const hideUserMoreDropdown = (dropdownElement) => {
    dropdownElement.removeAttribute('style');
    dropdownElement.classList.remove('more--visible');
};

export const hideUserMoreDropdownByOutsideClick = (event) => {
    const { tableBodyElement } = getTableElements();

    const visibleDropdown = tableBodyElement.querySelector('.more--visible');

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
