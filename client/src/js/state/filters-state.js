class FiltersState {
    paymentFilter = 'all';
    statusFilter = 'all';
    searchValue = '';
    sortBy = 'default';

    getFilters() {
        return {
            paymentFilter: this.paymentFilter,
            statusFilter: this.statusFilter,
            searchValue: this.searchValue,
            sortBy: this.sortBy,
        };
    }

    setPaymentFilter(value) {
        this.paymentFilter = value;
    }

    setStatusFilter(value) {
        this.statusFilter = value;
    }

    setSearchValue(value) {
        this.searchValue = value.toLowerCase();
    }

    setSortBy(value) {
        this.sortBy = value;
    }
}

export default new FiltersState();
