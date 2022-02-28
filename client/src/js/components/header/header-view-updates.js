import { headerElms } from './header-dom-elements';

export const updateHeaderFilterActiveClass = (filter) => {
    const { headerFilterElms } = headerElms;

    for (const filterElement of headerFilterElms) {
        if (filterElement.dataset.headerFilter === filter) {
            filterElement.classList.add('header__filter-tab--active');
        } else {
            filterElement.classList.remove('header__filter-tab--active');
        }
    }
};
