import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('All Templates', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('All_Template', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo All_Template_${nowTime}`;
        const testName1 = `Demo All_Template New_${nowTime}_1`;
        const IntegrateName = "HubSpot";

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Automation)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText2(locators.new_AI_Workflows, 'Try out our new AI Workflows!')
        methods.clickElementByXPath(locators.Try_it_now)
        cy.wait(Timeout.xs)
        methods.ElementToBeClickableXpath(locators.All_Templates)
        methods.clickElementByXPath(locators.Apollo_Hubspot_Templete)
        methods.VisibilityofElement01(locators.pause_Noti)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.wait(Timeout.md)
        methods.ScrollAndClickxpath(locators.adpilot_arrow_left)
        methods.ElementToBeClickableXpath(locators.workflow)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Hubspot_template_Option)
        methods.clickElementByXPath(locators.Hubspot_template)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(`//h4[text()="Map properties from Factors to ${IntegrateName}"]`)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']`)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName1)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.scrollWithXpath(`//h4[text()="Map properties from Factors to ${IntegrateName}"]`)
        methods.VisibilityofElementXpath(`//h4[text()="Map properties from Factors to ${IntegrateName}"]`)
        methods.scrollWithXpath(locators.SaveandPublish)
        methods.clickElementIndexXpath(locators.Add_Additional_Property, 0)
        methods.clickElementByXPath(locators.Multi_Select_Property)
        methods.typeElementByXPath(locators.Multi_Select_Property, "region")
        methods.clickElement(locators.companyRegion)
        methods.clickElementIndexXpath(locators.Multi_Select_Property, 1)
        methods.typeElementByXPathwithIndex(locators.Multi_Select_Property, "city", 1)
        methods.clickElement(locators.City1)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.SaveandPublish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Workflow UpdatedWorkflow is updated and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName1}']//following::button[2]`)
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)


    })

})