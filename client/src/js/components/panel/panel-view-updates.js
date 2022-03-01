import { panelElms } from './panel-dom-elements';

export const toggleFiltersDropdown = () => {
    const { panelFiltersElm, panelDropdownElm } = panelElms;

    panelFiltersElm.classList.toggle('panel__filters-button--active');
    panelDropdownElm.classList.toggle('filters--visible');
};

export const hideFiltersDropdown = () => {
    const { panelFiltersElm, panelDropdownElm } = panelElms;

    panelFiltersElm.classList.remove('panel__filters-button--active');
    panelDropdownElm.classList.remove('filters--visible');
};

export const filtersDropdownOutsideClickHandler = (event) => {
    const { panelFiltersElm, panelDropdownElm } = panelElms;

    if (
        !event.composedPath().includes(panelFiltersElm) &&
        !event.composedPath().includes(panelDropdownElm)
    ) {
        hideFiltersDropdown();
    }
};
