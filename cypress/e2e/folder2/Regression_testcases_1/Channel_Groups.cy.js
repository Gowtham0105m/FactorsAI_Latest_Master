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

        cy.wait(Timeout.ml)
        methods.scrollWithXpath(locators.Title_page)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.md)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                cy.wait(Timeout.sm);
                methods.clickElementIndexXpath(locators.Account, 1);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.channelGroup)
        cy.wait(Timeout.md)
        methods.Titletextcontainsxpath(locators.DataManagementHeader, "Channel Groups")
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
        methods.scrollWithXpath(`//span[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
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
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message, "Channel Group added!")
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(`//span[text()="${testName}"]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        methods.clickElementByXPath(locators.RemoveProperty)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, "Channel group removed!")
        methods.VisibilityofElement(locators.identi_table)

    })
})