export const tableElements = {
    tableBodyElm: document.querySelector('[data-table]'),
    tableCheckAllElm: document.querySelector('[data-check-all]'),
};

export const getClickedTableRowElement = (event) =>
    event.target.closest('[data-user]');

export const getDetailsTableElement = (tableRowElm) =>
    tableRowElm.nextElementSibling;

export const getTableRowInnerElements = (tableRowElm) => ({
    tableRowCheckElm: tableRowElm.querySelector('[data-check]'),
    tableRowDetailsButtonElm: tableRowElm.querySelector(
        '[data-details-button]'
    ),

    tableRowMoreElm: tableRowElm.querySelector('[data-more-button]'),
    tableRowMoreDropdownElm: tableRowElm.querySelector('[data-more-dropdown]'),
    tableRowMoreCloseElm: tableRowElm.querySelector('[data-more-close-button]'),
    tableRowActivateElm: tableRowElm.querySelector('[data-user-activate]'),
    tableRowDeleteElm: tableRowElm.querySelector('[data-user-delete]'),
});
