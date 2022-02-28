export const debounce = (fn, ms) => {
    let timerId;

    return function (...args) {
        clearInterval(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    };
};
