import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Draft CheckBox Login', () => {
    beforeEach(() => {
        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // Login before running tests
        Login1();
    });

    it('Draft CheckBox - Select all data', () => {

        cy.wait(Timeout.md);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        methods.Mouseover(locators.report_dropdown);
        methods.clickElementByXPath(locators.Dashboards);
        cy.wait(Timeout.sm);
        methods.VisibilityofElementXpath(locators.SegmentTitle);
        methods.clickElementByXPath(locators.Drafts);
        methods.VisibilityofElement(locators.Table_Body_1);
        methods.clickElement0(locators.Dropdown, 0);
        methods.clickElementByXPath(locators.Selectalldata);
        cy.wait(Timeout.sm);

        cy.get('[rel="nofollow"]').then(($pages) => {
            const totalPages = $pages.length;
            cy.log(`**Total pages: ${totalPages}**`);

            const validateCurrentPage = (pageNumber) => {
                cy.xpath('//th[text()="Type"]//following::label').each(($el, index) => {
                    cy.wrap($el)
                        .invoke('attr', 'class')
                        .then((classList) => {
                            if (classList.includes('ant-checkbox-wrapper-checked')) {
                                cy.log(`**Page ${pageNumber} - Checkbox ${index + 1} is checked.**`);
                            } else {
                                throw new Error(`**Page ${pageNumber} - Checkbox ${index + 1} is NOT checked.**`);
                            }
                        });
                });
            };

            const navigateAndValidatePages = (currentPage) => {
                validateCurrentPage(currentPage);

                if (currentPage < totalPages) {

                    cy.get('[rel="nofollow"]')
                        .contains((currentPage + 1).toString())
                        .click();
                    cy.wait(Timeout.sm);

                    navigateAndValidatePages(currentPage + 1);
                } else {
                    cy.log('**All pages validated successfully.**');
                }
            };
            navigateAndValidatePages(1);
        });
    });

    it('Draft CheckBox - Invert current page', () => {

        cy.wait(Timeout.md);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        methods.Mouseover(locators.report_dropdown);
        methods.clickElementByXPath(locators.Dashboards);
        cy.wait(Timeout.sm);
        methods.VisibilityofElementXpath(locators.SegmentTitle);
        methods.clickElementByXPath(locators.Drafts);
        methods.VisibilityofElement(locators.Table_Body_1);
        methods.clickElement0(locators.Dropdown, 0);
        methods.clickElementByXPath(locators.Invertcurrentpage);
        cy.wait(Timeout.sm);

        cy.get('[rel="nofollow"]').then(($pages) => {
            const totalPages = $pages.length;
            cy.log(`**Total pages: ${totalPages}**`);
            const validateCurrentPage = () => {
                cy.xpath('//th[text()="Type"]//following::label').each(($el, index) => {
                    cy.wrap($el)
                        .invoke('attr', 'class')
                        .then((classList) => {
                            if (classList.includes('ant-checkbox-wrapper-checked')) {
                                cy.log(`**Current page - Checkbox ${index + 1} is checked.**`);
                            } else {
                                throw new Error(`**Current page - Checkbox ${index + 1} is NOT checked.**`)
                            }
                        });
                });
            };

            const validateOtherPage = (pageNumber) => {
                cy.xpath('//th[text()="Type"]//following::label').each(($el, index) => {
                    cy.wrap($el)
                        .invoke('attr', 'class')
                        .then((classList) => {
                            if (!classList.includes('ant-checkbox-wrapper-checked')) {
                                cy.log(`**Page ${pageNumber} - Checkbox ${index + 1} is correctly NOT checked.**`);
                            } else {
                                throw new Error(`**Page ${pageNumber} - Checkbox ${index + 1} is incorrectly checked.**`)
                            }
                        });
                });
            };

            const navigateAndValidatePages = (currentPage) => {
                if (currentPage === 1) {
                    validateCurrentPage();
                } else {
                    cy.get('[rel="nofollow"]').contains(currentPage.toString()).click();
                    cy.wait(Timeout.sm);
                    validateOtherPage(currentPage);
                }

                if (currentPage < totalPages) {
                    navigateAndValidatePages(currentPage + 1);
                } else {
                    cy.log('Validation for all pages completed.');
                }
            };

            navigateAndValidatePages(1);
        })
    });

    it('Draft CheckBox - Clear all data', () => {

        cy.wait(Timeout.md);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        methods.Mouseover(locators.report_dropdown);
        methods.clickElementByXPath(locators.Dashboards);
        cy.wait(Timeout.sm);
        methods.VisibilityofElementXpath(locators.SegmentTitle);
        methods.clickElementByXPath(locators.Drafts);
        methods.VisibilityofElement(locators.Table_Body_1);
        methods.clickElement0(locators.Dropdown, 0);
        methods.clickElementByXPath(locators.Selectalldata);
        cy.wait(Timeout.sm);

        cy.get('[rel="nofollow"]').then(($pages) => {
            const totalPages = $pages.length;
            cy.log(`**Total pages: ${totalPages}**`);

            const validatePage = (pageNumber, isChecked) => {
                cy.xpath('//th[text()="Type"]//following::label').each(($el, index) => {
                    cy.wrap($el)
                        .invoke('attr', 'class')
                        .then((classList) => {
                            const condition = classList.includes('ant-checkbox-wrapper-checked');
                            if (condition === isChecked) {
                                cy.log(`**Page ${pageNumber} - Checkbox ${index + 1} is correctly ${isChecked ? 'checked' : 'NOT checked'}.**`);
                            } else {
                                throw new Error(`**Page ${pageNumber} - Checkbox ${index + 1} is incorrectly ${isChecked ? 'NOT checked' : 'checked'}.**`)
                            }
                        });
                });
            };

            const navigateAndValidatePages = (currentPage, isChecked) => {
                cy.log(`Validating page ${currentPage}`);
                validatePage(currentPage, isChecked);

                if (currentPage < totalPages) {
                    cy.get('[rel="nofollow"]')
                        .contains((currentPage + 1).toString())
                        .click();
                    cy.wait(Timeout.sm);
                    navigateAndValidatePages(currentPage + 1, isChecked);
                } else {
                    cy.log(`**Validation completed for all pages.**`);
                }
            };

            navigateAndValidatePages(1, true);

            methods.clickElement0(locators.pagination, 0);
            methods.clickElement0(locators.Dropdown, 0);
            methods.clickElementByXPath(locators.Clearalldata);

            navigateAndValidatePages(1, false);
        });
    });

});