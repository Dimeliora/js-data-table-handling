import { panelElements } from './panel-dom-elements';

export const toggleFiltersDropdown = () => {
    const { panelFiltersElement, panelDropdownElement } = panelElements;

    panelFiltersElement.classList.toggle('panel__filters-button--active');
    panelDropdownElement.classList.toggle('filters--visible');
};

export const hideFiltersDropdown = () => {
    const { panelFiltersElement, panelDropdownElement } = panelElements;

    panelFiltersElement.classList.remove('panel__filters-button--active');
    panelDropdownElement.classList.remove('filters--visible');
};

export const hideFiltersDropdownByOutsideClick = (event) => {
    const { panelFiltersElement, panelDropdownElement } = panelElements;

    if (
        !event.composedPath().includes(panelFiltersElement) &&
        !event.composedPath().includes(panelDropdownElement)
    ) {
        hideFiltersDropdown();
    }
};
