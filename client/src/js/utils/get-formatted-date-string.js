const MONTHS_SHORT_NAMES = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
];

export const getFormattedDateString = (date) => {
    const dateString = new Date(date).toLocaleDateString();

    const formattedDateString = dateString
        .split('.')
        .map((datePart, index) => {
            if (index === 1) {
                return MONTHS_SHORT_NAMES[Number(datePart) - 1];
            }

            return datePart;
        })
        .join('/');

    return formattedDateString;
};
