import { getFormattedDateString } from '../../utils/get-formatted-date-string';

const paymentStatusClassMap = {
    paid: 'label--success',
    unpaid: 'label--warning',
    overdue: 'label--danger',
};

const paymentStatusTextMap = {
    paid: 'Paid',
    unpaid: 'Dues',
    overdue: 'Dued',
};

export const createTableRowHTML = (user) => {
    const {
        id,
        name,
        email,
        lastLogin,
        paymentDate,
        paymentStatus,
        amount,
        currency,
        isActive,
    } = user;

    const userActivityText = isActive ? 'Active' : 'Inactive';
    const userActivityClass = isActive ? 'label--primary' : '';
    const paymentStatusClass = paymentStatusClassMap[paymentStatus];
    const paymentStatusText = paymentStatusTextMap[paymentStatus];
    const activationButtonText = isActive ? 'Deactivate' : 'Activate';

    return `
        <tr class="table__row row" data-user="${id}">
            <td class="row__check checkbox">
                <input
                    type="checkbox"
                    class="checkbox__input"
                    id="${id}"
                    data-check
                />
                <label for="${id}" class="checkbox__label">
                    <span class="visually-hidden">Check user ${name}</span>
                </label>
            </td>

            <td class="row__details">
                <button
                    class="row__details-button icon-button"
                    title="Show Details"
                    aria-label="Show Details"
                    data-details-button
                >
                    <svg class="icon-button__icon">
                        <use href="/icons/icon-sprite.svg#down" />
                    </svg>
                </button>
            </td>

            <td class="row__user">
                <div class="row__name">${name}</div>
                <div class="row__email">${email}</div>
            </td>

            <td class="row__user-status">
                <div class="row__user-activity label ${userActivityClass}" data-user-status>
                    <span class="label__text">${userActivityText}</span>
                </div>
                <div class="row__user-last-login">
                    Last login: ${getFormattedDateString(lastLogin)}
                </div>
            </td>

            <td class="row__payment-status">
                <div class="row__user-payment label ${paymentStatusClass}">
                    <span class="label__text">${paymentStatus}</span>
                </div>
                <div class="row__payment-date">
                    ${paymentStatusText} on ${getFormattedDateString(
        paymentDate
    )}
                </div>
            </td>

            <td class="row__amount">
                <div class="row__amount-value">${amount}</div>
                <div class="row__amount-currency">${currency}</div>
            </td>

            <td class="row__more">
                <button class="row__more-button" data-more-button>
                    <span class="row__more-text">View More</span>
                    <svg class="row__more-icon">
                        <use href="/icons/icon-sprite.svg#more" />
                    </svg>
                </button>
                <div class="row__more-dropdown more" data-more-dropdown>
                    <button
                        class="more__close icon-button icon-button--small"
                        title="Close"
                        aria-label="Close"
                        data-more-close-button
                    >
                        <svg class="icon-button__icon">
                            <use href="/icons/icon-sprite.svg#close" />
                        </svg>
                    </button>
                    <ul class="more__list">
                        <li class="more__item">
                            <button class="more__button">Edit</button>
                        </li>
                        <li class="more__item">
                            <button class="more__button">View Profile</button>
                        </li>
                        <li class="more__item more__item--success">
                            <button class="more__button" data-user-activate>
                                ${activationButtonText} User
                            </button>
                        </li>
                        <li class="more__item more__item--danger">
                            <button class="more__button" data-user-delete>
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
    `;
};

export const createDetailsTableHTML = ({ id }) => {
    return `
        <tr class="table__details">
            <td colspan="7">
                <div class="table__details-wrapper" data-details>
                    <table class="details">
                        <thead>
                            <tr class="details__header">
                                <th>Date</th>
                                <th>User activity</th>
                                <th>
                                    <div class="details__info">
                                        Detail
                                        <svg class="details__info-icon">
                                            <use href="/icons/icon-sprite.svg#info" />
                                        </svg>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody data-details="${id}">
                            {{details}}
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    `;
};

export const createDetailsTableRowHTML = (details) => {
    const { date, activity, detail } = details;

    return `
        <tr class="details__row">
            <td class="details__date">
                ${getFormattedDateString(date)}
            </td>
            <td class="details__activity">${activity}</td>
            <td class="details__description">${detail}</td>
        </tr>
    `;
};
