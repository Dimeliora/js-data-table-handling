import ee from '../../utils/event-emitter';
import filtersState from '../../state/filters-state';
import { panelElms } from './panel-dom-elements';
import { debounce } from '../../utils/debounce';

const panelHandler = () => {
    const { panelSearchElm } = panelElms;

    panelSearchElm.addEventListener(
        'input',
        debounce(panelSearchChangeHandler, 700)
    );
};

const panelSearchChangeHandler = (event) => {
    const value = event.target.value.trim();

    filtersState.setSearchValue(value);

    ee.emit('panel/search-value-changed');
};

panelHandler();
