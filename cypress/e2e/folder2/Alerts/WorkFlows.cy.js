import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';
import envDetails from '../../../fixtures/envDetails.json';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';
import Login1 from '../../PageObjects/Login1.js';


describe('WorkFlow Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('WorkFlow - Hubspot', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Hubspot_${nowTime}`;
        const testName1 = `Demo Hubspot New_${nowTime}_1`;
        const IntegrateName = "HubSpot";

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.visit(`${envDetails.backendApiUrl}/automations/workflows`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.workflow)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Hubspot_template_Option)
        methods.clickElementByXPath(locators.Hubspot_template)
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

    it('WorkFlow - Salesforce', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Salesforce_${nowTime}`;
        const IntegrateName = "Salesforce";

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.visit(`${envDetails.backendApiUrl}/automations/workflows`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.workflow)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Salesforce_template_Option)
        methods.clickElementByXPath(locators.Salesforce_template)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.wait(Timeout.md)
        methods.ScrollAndClickxpath(locators.adpilot_arrow_left)
        methods.ElementToBeClickableXpath(locators.workflow)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Salesforce_template_Option)
        methods.clickElementByXPath(locators.Salesforce_template)
        methods.clickElementByXPath(locators.Use_this_template)
        cy.wait(Timeout.md)

        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(`//h4[text()="Map properties from Factors to ${IntegrateName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Add_Additional_Property, 0)
        methods.clickElementByXPath(locators.Multi_Select_Property_Sales)
        methods.typeElementByXPath(locators.Multi_Select_Property_Sales, "region")
        methods.clickElement(locators.companyRegion)
        methods.clickElementIndexXpath(locators.Multi_Select_Property_Sales, 1)
        methods.typeElementByXPathwithIndex(locators.Multi_Select_Property_Sales, "city", 1)
        methods.clickElement(locators.BillingCity1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.typeElementByXPath(locators.Search_Input, "Iso c")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.IsoCode)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow UpdatedWorkflow is updated and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)
    })

    it('WorkFlow - Zoho', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Zoho_Demo_${nowTime}`;
        const IntegrateName = "Integrate Zoho CRM";

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementIndexXpath(locators.WorkFlows, 0)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ElementToBeClickableXpath(locators.workflow)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Zoho_template_Option)
        methods.ScrollAndClickxpath(locators.Zoho_Templete)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.edit_Icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.assertElementContainsText1(locators.PerformedEvent, "Performs an event")
        methods.clickElementByXPath(locators.select_event)
        methods.clickElementByXPath(locators.pageview_option2)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.Hubspot, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.wait(Timeout.lg)
        methods.assertElementContainsText1(`(//span[text()="${IntegrateName}"]//following::h4)[1]`, "Connected")
        cy.wait(Timeout.xs)

        cy.xpath(`//div[@role="tablist"]//following::div[@role="tab"]`, { Timeout: extraTimeOut })
            .invoke('attr', 'aria-expanded')
            .then((Configure_expand) => {

                if (Configure_expand === "false") {
                    cy.log('**Dropdown is not expanded**');
                    methods.clickElementByXPath(locators.Configurations)
                } else {
                    cy.log('**Dropdown is already expanded, skipping click action**');
                }

            })

        methods.clickElementByXPath(locators.AddProperty)
        methods.clickElementByXPath(locators.Select_Property)
        methods.typeElementByXPath(locators.Select_Property, "Email")
        methods.clickElement0(locators.Selete_Property_Option, 0)
        methods.clickElementByXPath(locators.Select_Property1)
        methods.typeElementByXPath(locators.Select_Property1, "Account Name")
        methods.clickElement(locators.AccountName)
        methods.clickElementByXPath(locators.AddProperty)
        methods.clickElementByXPath(locators.Select_Property2)
        methods.typeElementByXPath(locators.Select_Property2, "Form ID")
        methods.clickElement0(locators.Form_ID1, 0)
        methods.clickElementByXPath(locators.Select_Property3)
        methods.typeElementByXPath(locators.Select_Property3, "Account Site")
        methods.clickElement(locators.AccountSite)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']`)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow UpdatedWorkflow is updated and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Cancel)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('WorkFlow - Activity log', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementIndexXpath(locators.WorkFlows, 0)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.MouseoverAndClick(locators.ShowLogs)
        methods.VisibilityofElementXpath(locators.ActivityLog)
        methods.clickElementByXPath(locators.ActivityLog_Refresh)
        cy.wait(Timeout.sm)

        cy.document().then((doc) => {
            const noDataElement = doc.evaluate(`//div[text()="No data"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (noDataElement) {
                cy.log('**"No Data" is visible, skipping the search steps.**');
            } else {
                cy.xpath('//h4[text()="Activity Log"]//following::tbody/tr[1]/td[3]/h4')
                    .invoke('text')
                    .then((DomainName) => {
                        methods.clickElementByXPath(locators.ActivityLog_Search);
                        methods.typeElement(locators.Searchreports, DomainName);
                        methods.assertElementContainsTextxpath(locators.ActivityLog_SearchResult, DomainName);
                        methods.clickElementByXPath(locators.ActivityLog_SearchClose);
                    });
            }
        });

        methods.clickElementByXPath(locators.close_2)
    })
})