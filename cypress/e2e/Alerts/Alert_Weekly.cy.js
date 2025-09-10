import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Alert Weekly Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Alert Weekly', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Alert Weekly ${nowTime}`;
        const testName1 = `Demo Editted Alert Weekly ${nowTime}_1`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementByXPath(locators.Weekly_updates)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.Weekly_updates, 1)
        // methods.assertElementContainsText(locators.Page_title1, 'Weekly updates')
        methods.VisibilityofElement(locators.identi_table)
        methods.clickElementByXPath(locators.create_new)
        methods.typeElement(locators.Alert_name, testName)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.clickElement0(locators.Website_Session, 0)
        methods.typeElement(locators.Select_Event, "Tot")
        methods.clickElement(locators.Total_Session)
        methods.clickElement(locators.operator)
        methods.clickElementByXPath(locators.is_greater_than)
        methods.typeElement(locators.Value, '2')
        methods.clickElement(locators.Date_Range)
        methods.clickElementByXPath(locators.Monthly)
        methods.clickElementByXPath(locators.save2)
        methods.clickElementByXPath(locators.Alert_Confirm_CheckBox)
        methods.ElementToBeClickableXpath(locators.Save_Alert)
        methods.clickElementByXPath(locators.Save_Alert)
        methods.GetText(locators.notification_popup, "ErrorPlease select atleast one delivery option to send alert.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)
        methods.scrollWithXpath(locators.save2)
        methods.clickElementByXPath(locators.save2)
        methods.clickElementByXPath(locators.Alert_Confirm_CheckBox)
        methods.ElementToBeClickableXpath(locators.Save_Alert)
        methods.clickElementByXPath(locators.Save_Alert)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']`)
        methods.ClearAndType(locators.Alert_name, testName1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.typeElement(locators.search_1, "Domain")
        methods.clickElement(locators.LinkedinDomain)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.save2)
        methods.clickElementByXPath(locators.save2)
        methods.clickElementByXPath(locators.Alert_Confirm_CheckBox)
        methods.ElementToBeClickableXpath(locators.Save_Alert)
        methods.clickElementByXPath(locators.Save_Alert)
        methods.GetText(locators.notification_popup, "Alerts SavedAlerts is saved successfully.")
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(`//h4[text()="${testName1}"]//following::td[2]`, "Active")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)
    })

    it('Weekly Alert Copy', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Weekly Alert Copy ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementByXPath(locators.Weekly_updates)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.Weekly_updates, 1)
        // methods.assertElementContainsText(locators.Page_title1, 'Weekly updates')
        methods.VisibilityofElement(locators.identi_table)
        methods.clickElementByXPath(locators.create_new)
        methods.typeElement(locators.Alert_name, testName)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.clickElement0(locators.Website_Session, 0)
        methods.typeElement(locators.Select_Event, "Tot")
        methods.clickElement(locators.Total_Session)
        methods.clickElement(locators.operator)
        methods.clickElementByXPath(locators.is_greater_than)
        methods.typeElement(locators.Value, '2')
        methods.clickElement(locators.Date_Range)
        methods.clickElementByXPath(locators.Monthly)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)
        methods.scrollWithXpath(locators.save2)
        methods.clickElementByXPath(locators.save2)
        methods.clickElementByXPath(locators.Alert_Confirm_CheckBox)
        methods.ElementToBeClickableXpath(locators.Save_Alert)
        methods.clickElementByXPath(locators.Save_Alert)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.CreateCopy)
        methods.assertElementContainsText(locators.notification_popup, "Alert CreatedCopy of alert is created and saved successfully.")
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.AlertName, `Copy of ${testName}`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()='Copy of ${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)
    })
})