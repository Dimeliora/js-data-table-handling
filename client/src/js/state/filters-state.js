class FiltersState {
    paymentFilter = 'all';

    setPaymentFilter(value) {
        this.paymentFilter = value;
    }

    getFilters() {
        return {
            paymentFilter: this.paymentFilter,
        };
    }
}

export default new FiltersState();
