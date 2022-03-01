class FiltersState {
    paymentFilter = 'all';
    statusFilter = 'all';
    searchValue = '';

    getFilters() {
        return {
            paymentFilter: this.paymentFilter,
            statusFilter: this.statusFilter,
            searchValue: this.searchValue,
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
}

export default new FiltersState();
