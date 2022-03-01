import ee from '../../utils/event-emitter';
import handleState from '../../state/handle-state';
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

    handleState.setPaymentFilter(filterValue);

    const { paymentFilter } = handleState.getHandlersValues();
    updateHeaderFilterActiveClass(paymentFilter);

    ee.emit('header/filter-changed');
};

headerHandler();
