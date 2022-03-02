import { headerElements } from './header-dom-elements';

export const updateHeaderFilterActiveClass = (filter) => {
    const { headerFilterElements } = headerElements;

    for (const filterElement of headerFilterElements) {
        if (filterElement.dataset.headerFilter === filter) {
            filterElement.classList.add('header__filter-tab--active');
        } else {
            filterElement.classList.remove('header__filter-tab--active');
        }
    }
};

export const updatePaidAmountView = (amount) => {
    headerElements.headerAmountElement.textContent = `$${amount}`;
};
