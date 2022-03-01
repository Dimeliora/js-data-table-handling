class HandleState {
    paymentFilter = 'all';
    activityFilter = 'all';
    searchValue = '';
    sortBy = 'default';
    rowsPerPage = 5;
    currentPage = 1;

    getHandlersValues() {
        return {
            paymentFilter: this.paymentFilter,
            activityFilter: this.activityFilter,
            searchValue: this.searchValue,
            sortBy: this.sortBy,
            rowsPerPage: this.rowsPerPage,
            currentPage: this.currentPage,
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

    setRowsPerPage(value) {
        this.rowsPerPage = value;
    }

    setCurrentPage(value) {
        this.currentPage = value;
    }
}

export default new HandleState();
