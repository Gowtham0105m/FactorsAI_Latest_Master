import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Accounts New flow Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Accounts New flow', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Account_FirstValue)
        methods.VisibilityofElementXpath(locators.Account_value)
        methods.clickElementByXPath(locators.Account_value_Close)
        cy.wait(Timeout.xs)
        methods.MouseoverAndClick(locators.Open_NewTab)
    })
})