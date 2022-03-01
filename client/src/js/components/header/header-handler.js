import ee from '../../utils/event-emitter';
import filtersState from '../../state/filters-state';
import { headerElements } from './header-dom-elements';
import { updateHeaderFilterActiveClass } from './header-view-updates';

const headerHandler = () => {
    const { headerFilterElements } = headerElements;

    for (const filterElm of headerFilterElements) {
        filterElm.addEventListener('click', headerFilterClickHandler);
    }
};

const headerFilterClickHandler = ({ target }) => {
    const filterValue = target.dataset.headerFilter;

    filtersState.setPaymentFilter(filterValue);

    const { paymentFilter } = filtersState.getFilters();
    updateHeaderFilterActiveClass(paymentFilter);

    ee.emit('header/filter-changed');
};

headerHandler();
