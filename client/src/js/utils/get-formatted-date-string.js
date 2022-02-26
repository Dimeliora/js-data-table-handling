const monthShortNames = [
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
    const dateString = new Date(date).toLocaleDateString('fr');

    const formattedDateString = dateString
        .split('/')
        .map((datePart, index) => {
            if (index === 1) {
                return monthShortNames[Number(datePart) - 1];
            }

            return datePart;
        })
        .join('/');

    return formattedDateString;
};
