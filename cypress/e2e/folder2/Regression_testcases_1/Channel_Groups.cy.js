import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Channel Groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Channel Groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo Channel Groups ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.channelGroup)
        methods.Titletextcontains(locators.Page_title, "Channel Groups")
        methods.VisibilityofElement(locators.identi_table)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.Value, testName)
        methods.clickElementByXPath(locators.Add_new2)
        methods.NotExistxpath(locators.FilterDataLoading)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Time_of_Occurrence, 0)
        methods.NotExistxpath(locators.FilterDataLoading)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        methods.NotExistxpath(locators.FilterDataLoading)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message, "Channel Group added!")
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.scrollWithXpath(`//span[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.EditProperty)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Add_new2)
        methods.NotExistxpath(locators.FilterDataLoading)
        methods.clickElement0(locators.Time_of_Occurrence, 0)
        methods.NotExistxpath(locators.FilterDataLoading)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElement(locators.between)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Channel_PlusIcon)
        methods.clickElement0(locators.session_properties, 0)
        methods.NotExistxpath(locators.FilterDataLoading)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
         cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message, "Channel Group added!")
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.scrollWithXpath(`//span[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.RemoveProperty)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, "Channel group removed!")
        methods.VisibilityofElement(locators.identi_table)

    })
})