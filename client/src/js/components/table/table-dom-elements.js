export const tableWrapperElement = document.querySelector(
    '[data-table-wrapper]'
);

export const getTableElements = () => ({
    tableBodyElement: document.querySelector('[data-table]'),
    tableCheckAllElement: document.querySelector('[data-check-all]'),
});

export const getTableRowCheckInputs = (tableBodyElement) =>
    tableBodyElement.querySelectorAll('[data-check]');

export const getClickedTableRowElement = (event) =>
    event.target.closest('[data-user]');

export const getDetailsTableElement = (tableRowElement) =>
    tableRowElement.nextElementSibling.querySelector('[data-details]');

export const getTableRowInnerElements = (tableRowElement) => ({
    tableRowCheckElement: tableRowElement.querySelector('[data-check]'),
    tableRowDetailsButtonElement: tableRowElement.querySelector(
        '[data-details-button]'
    ),
    tableRowUserStatusElement:
        tableRowElement.querySelector('[data-user-status]'),
    tableRowMoreElement: tableRowElement.querySelector('[data-more-button]'),
    tableRowMoreDropdownElement: tableRowElement.querySelector(
        '[data-more-dropdown]'
    ),
    tableRowMoreCloseElement: tableRowElement.querySelector(
        '[data-more-close-button]'
    ),
    tableRowActivateElement: tableRowElement.querySelector(
        '[data-user-activate]'
    ),
    tableRowDeleteElement: tableRowElement.querySelector('[data-user-delete]'),
});
