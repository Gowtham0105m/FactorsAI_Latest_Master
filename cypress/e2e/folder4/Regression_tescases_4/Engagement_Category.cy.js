import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Engagement Category Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Engagement Category', () => {

        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xl)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Engagement_Scoring)
        methods.VisibilityofElement2(locators.DataManagementHeader, 'Engagement Scoring')
        methods.clickElementByXPath(locators.Engagement_Category)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.ClearAndTypeWithXpath(locators.Hot_Input, '70')
        methods.ClearAndTypeWithXpath(locators.Warm_Input, '60')
        methods.ClearAndTypeWithXpath(locators.Cool_Input, '50')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.assertElementContainsText(locators.notification_popup, "Engagement category rules updated.All accounts will be re-assigned categories based on new rules within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Engagement_Category)
        cy.wait(Timeout.xs)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.clickElementByXPath(locators.Reset_to_Default)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.assertElementContainsText(locators.notification_popup, "Engagement category rules updated.All accounts will be re-assigned categories based on new rules within 24 hours.")

    })
})