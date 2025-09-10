import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Milestone Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Milestone - Save, Edit and Delete', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo Milestone ${randomNumber}`;
        const testName1 = `Demo Milestone New ${randomNumber}`;
        const MileStone_Name1 = "Testing 1";
        const MileStone_Name2 = "Testing 2";

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Milestones)
        cy.wait(Timeout.sm)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Milestone")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//h4[contains(text(),"Demo Milestone")]//following::button`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Journey_Delete);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Milestone deleted successfully");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.ElementVisibleandClickXpath(locators.New_Milestone_Btn)
        methods.VisibilityofElementXpath(locators.Milestone_Header)
        methods.clickElement0(locators.custom_event_name, 0)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.Add_Event_company_updated)
        methods.clickElement0(locators.custom_event_name, 1)
        methods.ClearAndTypeWithXpath(locators.Milestones_Textarea1, MileStone_Name1)
        methods.EnterXpath(locators.Milestones_Textarea1)
        methods.clickElementByXPath(locators.Journey_Filterthisevent)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_Account_stage)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElement0(locators.custom_event_name, 2)
        methods.ClearAndTypeWithXpath(locators.Milestones_Textarea1, MileStone_Name2)
        methods.EnterXpath(locators.Milestones_Textarea1)
        methods.clickElementIndexXpath(locators.Journey_Filterthisevent, 1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Milestone_Limit)
        methods.ElementNotClickableXpath(locators.CopyMilestone_Btn)
        methods.clickElementByXPath(locators.DeleteMilestone_Btn)
        methods.ElementToBeClickableXpath(locators.Add_Account_stage)
        methods.ElementToBeClickableXpath(locators.CopyMilestone_Btn)
        methods.clickElementByXPath(locators.CopyMilestone_Btn)
        methods.VisibilityofElementXpath(`//h1[text()="Copy of ${MileStone_Name1}"]`)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Milestone_Limit)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Milestone created successfullyData collection may take up to 24 hours. Once complete, this milestone will be visible in segments.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.custom_event_name, 0)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName1)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.custom_event_name, 2)
        methods.ClearAndTypeWithXpath(locators.Milestones_Textarea1, MileStone_Name2)
        methods.EnterXpath(locators.Milestones_Textarea1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Milestone updated successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName1}"]//following::button`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Journey_Delete);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Milestone deleted successfully");
        cy.wait(Timeout.xs);

    })

    it('Milestone - Clone', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo Milestone ${randomNumber}`;
        const MileStone_Name1 = "Testing 1";
        const MileStone_Name2 = "Testing 2";

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Milestones)
        cy.wait(Timeout.sm)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Milestone")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//h4[contains(text(),"Demo Milestone")]//following::button`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Journey_Delete);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Milestone deleted successfully");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.ElementVisibleandClickXpath(locators.New_Milestone_Btn)
        methods.VisibilityofElementXpath(locators.Milestone_Header)
        methods.clickElement0(locators.custom_event_name, 0)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.Add_Event_company_updated)
        methods.clickElement0(locators.custom_event_name, 1)
        methods.ClearAndTypeWithXpath(locators.Milestones_Textarea1, MileStone_Name1)
        methods.EnterXpath(locators.Milestones_Textarea1)
        methods.clickElementByXPath(locators.Journey_Filterthisevent)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_Account_stage)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElement0(locators.custom_event_name, 2)
        methods.ClearAndTypeWithXpath(locators.Milestones_Textarea1, MileStone_Name2)
        methods.EnterXpath(locators.Milestones_Textarea1)
        methods.clickElementIndexXpath(locators.Journey_Filterthisevent, 1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Milestone_Limit)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Milestone created successfullyData collection may take up to 24 hours. Once complete, this milestone will be visible in segments.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Journey_Clone)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h1[text()="${testName} (Copy)"]`)
        methods.clickElementByXPath(locators.DeleteMilestone_Btn)
        methods.ElementToBeClickableXpath(locators.Add_Account_stage)
        methods.ElementToBeClickableXpath(locators.CopyMilestone_Btn)
        methods.clickElementByXPath(locators.CopyMilestone_Btn)
        methods.VisibilityofElementXpath(`//h1[text()="Copy of ${MileStone_Name1}"]`)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Milestone_Limit)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Milestone created successfullyData collection may take up to 24 hours. Once complete, this milestone will be visible in segments.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName} (Copy)"]//following::button`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Journey_Delete);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Milestone deleted successfully");
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Journey_Delete);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Milestone deleted successfully");
        cy.wait(Timeout.xs);
    })
})