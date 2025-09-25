import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

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

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.VisibilityofElement(locators.Page_title, 'Account Configurations')
        methods.clickElementByXPath(locators.Engagement_Category)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.ClearAndTypeWithXpath(locators.Hot_Input, '50')
        methods.ClearAndTypeWithXpath(locators.Warm_Input, '40')
        methods.ClearAndTypeWithXpath(locators.Cool_Input, '30')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.assertElementContainsText(locators.notification_popup, "Engagement category rules updated.All accounts will be re-assigned categories based on new rules within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Engagement_Category)
        cy.wait(Timeout.xs)
        methods.CompareScreenShot('Engagement Category')
        methods.Exist(locators.DownloadCSV_Popup)
        methods.clickElementByXPath(locators.Reset_to_Default)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.assertElementContainsText(locators.notification_popup, "Engagement category rules updated.All accounts will be re-assigned categories based on new rules within 24 hours.")

    })
})