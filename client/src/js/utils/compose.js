export function compose(...funcs) {
    return function (arg) {
        return funcs.reduceRight((prev, curr) => curr.call(this, prev), arg);
    };
}
