import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Content_groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Content_groups', () => {

        const url = '/settings/data-management/touchpoint-definition/content-group';
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo Content groups ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Content_Groups)
        methods.Titletextcontains(locators.Page_title, "Content Groups")
        methods.navigateToUrl(url)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.content_group_name, testName)
        methods.typeElement(locators.content_group_description, 'Testing Purpose')
        methods.clickElementByXPath(locators.New_Value)
        methods.typeElement(locators.content_group_value, 'Test_1')
        methods.clickElementByXPath(locators.Add_Rule)
        methods.typeElement(locators.page_value, '50')
        methods.clickElement(locators.done)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.New_Value)
        methods.typeElement(locators.content_group_value, 'Test_2')
        methods.clickElement(locators.Or_value)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement(locators.Contains)
        methods.clickElement(locators.Equals)
        methods.typeElement(locators.page_value, '60')
        methods.clickElement(locators.done)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.notification_popup, "SuccessContent Group rules created successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm_1)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted content group successfully")
        cy.wait(Timeout.xs)
    })
})