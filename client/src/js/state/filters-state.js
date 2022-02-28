class FiltersState {
    paymentFilter = 'all';
    searchValue = '';

    getFilters() {
        return {
            paymentFilter: this.paymentFilter,
            searchValue: this.searchValue,
        };
    }

    setPaymentFilter(value) {
        this.paymentFilter = value;
    }

    setSearchValue(value) {
        this.searchValue = value.toLowerCase();
    }
}

export default new FiltersState();
