import ee from '../../utils/event-emitter';
import filtersState from '../../state/filters-state';
import { panelElms } from './panel-dom-elements';
import {
    toggleFiltersDropdown,
    hideFiltersDropdown,
    filtersDropdownOutsideClickHandler,
} from './panel-view-updates';
import { debounce } from '../../utils/debounce';

const panelHandler = () => {
    const {
        panelSearchElm,
        panelFiltersElm,
        panelDropdownCloseElm,
        panelFilterInputElms,
    } = panelElms;

    panelFiltersElm.addEventListener('click', toggleFiltersDropdown);

    panelDropdownCloseElm.addEventListener('click', hideFiltersDropdown);

    document.addEventListener('click', filtersDropdownOutsideClickHandler);

    panelSearchElm.addEventListener(
        'input',
        debounce(panelSearchChangeHandler, 700)
    );

    for (const filterInput of panelFilterInputElms) {
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
