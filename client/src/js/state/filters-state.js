class FiltersState {
    paymentFilter = 'all';
    activityFilter = 'all';
    searchValue = '';
    sortBy = 'default';

    getFilters() {
        return {
            paymentFilter: this.paymentFilter,
            activityFilter: this.activityFilter,
            searchValue: this.searchValue,
            sortBy: this.sortBy,
        };
    }

    setPaymentFilter(value) {
        this.paymentFilter = value;
    }

    setActivityFilter(value) {
        this.activityFilter = value;
    }

    setSearchValue(value) {
        this.searchValue = value.toLowerCase();
    }

    setSortBy(value) {
        this.sortBy = value;
    }
}

export default new FiltersState();
