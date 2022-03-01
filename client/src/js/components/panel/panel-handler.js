import ee from '../../utils/event-emitter';
import filtersState from '../../state/filters-state';
import { panelElements } from './panel-dom-elements';
import {
    toggleFiltersDropdown,
    hideFiltersDropdown,
    hideFiltersDropdownByOutsideClick,
} from './panel-view-updates';
import { debounce } from '../../utils/debounce';

const panelHandler = () => {
    const {
        panelSearchElement,
        panelFiltersElement,
        panelDropdownCloseElement,
        panelFilterInputElements,
    } = panelElements;

    panelFiltersElement.addEventListener('click', toggleFiltersDropdown);

    panelDropdownCloseElement.addEventListener('click', hideFiltersDropdown);

    document.addEventListener('click', hideFiltersDropdownByOutsideClick);

    panelSearchElement.addEventListener(
        'input',
        debounce(panelSearchChangeHandler, 700)
    );

    for (const filterInput of panelFilterInputElements) {
        filterInput.addEventListener('change', panelFilterChangeHandler);
    }
};

const panelSearchChangeHandler = (event) => {
    const value = event.target.value.trim();

    filtersState.setSearchValue(value);

    ee.emit('panel/search-value-changed');
};

const panelFilterChangeHandler = (event) => {
    filtersState.setStatusFilter(event.target.value);

    ee.emit('panel/filter-changed');
};

panelHandler();
