import ee from '../../utils/event-emitter';
import usersState from '../../state/users-state';
import handleState from '../../state/handle-state';
import { headerElements } from './header-dom-elements';
import {
    updateHeaderFilterActiveClass,
    updatePaidAmountView,
} from './header-view-updates';

const headerHandler = () => {
    const { headerFilterElements } = headerElements;

    updatePaidAmount();

    for (const filterElm of headerFilterElements) {
        filterElm.addEventListener('click', headerFilterClickHandler);
    }

    ee.on('table/users-list-handled', updatePaidAmount);
};

const updatePaidAmount = () => {
    const { paidAmount } = usersState;

    updatePaidAmountView(paidAmount);
};

const headerFilterClickHandler = ({ target }) => {
    const filterValue = target.dataset.headerFilter;

    handleState.setPaymentFilter(filterValue);

    const { paymentFilter } = handleState.getHandlersValues();
    updateHeaderFilterActiveClass(paymentFilter);

    ee.emit('header/filter-changed');
};

headerHandler();
