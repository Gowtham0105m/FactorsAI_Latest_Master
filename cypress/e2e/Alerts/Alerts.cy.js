import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Alert Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Alert', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Alert ${nowTime}`;
        const testName1 = `Demo Editted Alert ${nowTime}_1`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)

        // New alert

        methods.clickElementByXPath(locators.Realtimealerts)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.NewAlert)
        methods.clickElementByXPath(locators.NewAlert)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElement(locators.Account_click)
        methods.VisibilityofElementIndex(locators.alert_page)

        // Select event

        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.Website_activity, 0)
        methods.clickElementByXPath(locators.pageview_option1)

        // Add filters

        methods.clickElement(locators.search_button)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.IsoCode)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // alert name

        methods.typeElement(locators.Alert_name, testName)

        // add property

        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company d')
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Company_domain)
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company n')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Company_option)
        methods.clickElement(locators.Add_property)
        methods.clickElementByXPath(locators.Filter_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Filter_option1)
        cy.wait(Timeout.sm)

        // Where to get the alert

        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        methods.clickElementByXPath(locators.alertteststaging)
        methods.clickElementByXPath(locators.Mention_member)
        methods.typeElementByXPath(locators.Mention_member, 'sara')
        methods.clickElementByXPath(locators.sarath)

        // save the alert

        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Alert_name)
        methods.ClearAndType(locators.Alert_name, testName1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.typeElement(locators.search_1, "enrichment")
        methods.clickElement(locators.Enrichment_Source)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Alert_Scroll)
        methods.clickElement0(locators.Add_property, 0)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.typeElement(locators.select_property, "email")
        methods.clickElement(locators.email)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Alert_Hide_Option)
        methods.clickElementIndexXpath(locators.Advancedsettings_Dropdown, 0)
        methods.typeElementByXPathwithIndex(locators.Advancedsettings_Dropdown, "page tit", 0)
        methods.clickElement(locators.Alert_PageTitle)
        methods.clickElementIndexXpath(locators.Advancedsettings_Dropdown, 1)
        methods.ScrollAndClick(locators.Twelve_Hours)
        methods.clickElementByXPath(locators.Alert_Update_Btn)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedAlerts is edited and saved successfully.")
        methods.assertElementContainsTextxpath(`//h4[text()="${testName1}"]//following::td[2]`, "Active")
        methods.clickElementByXPath(`//h4[text()="${testName1}"]`)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Alert_Toogle, 0)
        methods.clickElementByXPath(locators.pause)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.Popup_Message, "Successfully paused alerts.")
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(`//h4[text()="${testName1}"]//following::td[2]`, "Paused")

        // Deleting the alert

        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName1}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })

    it('Copy Alert', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Copy Alert ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)


        // New alert

        methods.clickElementByXPath(locators.Realtimealerts)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.NewAlert)
        methods.clickElementByXPath(locators.NewAlert)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElementByXPath(locators.Account_text)
        methods.VisibilityofElementIndex(locators.alert_page)

        // Select event

        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.Website_activity, 0)
        methods.clickElementByXPath(locators.pageview_option1)

        // Add filters

        methods.clickElement(locators.search_button)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.IsoCode)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // alert name

        methods.typeElement(locators.Alert_name, testName)

        // add property

        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company d')
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Company_domain)
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company n')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Company_option)
        methods.clickElement(locators.Add_property)
        methods.clickElementByXPath(locators.Filter_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Filter_option1)

        // Where to get the alert

        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        methods.clickElementByXPath(locators.alertteststaging)

        // save the alert

        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)

        // Deleting the alert

        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.CreateCopy)
        methods.assertElementContainsText(locators.notification_popup, "Alert CreatedCopy of alert is created and saved successfully.")
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.AlertName, `Copy of ${testName}`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()='Copy of ${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)
    })

    it('Alert Template', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Alert Template ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)

        // New alert

        methods.clickElementByXPath(locators.Realtimealerts)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.NewAlert)
        methods.clickElementByXPath(locators.NewAlert)
        methods.clickElementByXPath(locators.ChooseaTemplate)
        methods.typeElement(locators.search_1, "A new")
        methods.clickElementByXPath(locators.Choose_Template)
        methods.clickElementByXPath(locators.This_is_correct)
        methods.VisibilityofElementIndex(locators.alert_page)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Alert_name)
        methods.ClearAndType(locators.Alert_name, testName)

        //To set the alert in slack

        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        methods.clickElementByXPath(locators.alertteststaging)
        methods.clickElementByXPath(locators.Mention_member)
        methods.typeElementByXPath(locators.Mention_member, 'sara')
        methods.clickElementByXPath(locators.sarath)


        // save the alert

        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })
})