import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Google Enhanced Conversions Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Google Enhanced Conversions - Conversion feedback for Leads with Use the Deal amount', () => {

        const nowTime = dayjs().format('H:m:s');
        const Ad_Account = "7108784795";
        const testName = `Demo Google CAPI ${nowTime}`;
        const testName1 = `Demo Google CAPI New ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GoogleEnhancedConversions)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Google CAPI")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`(//h4[contains(text(),"Demo Google CAPI")]//following::button/span[@aria-label="more"])[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.remove_workflows)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Ok)
                methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
                cy.wait(Timeout.xs)
            } else {
                cy.log('No rules containing "Demo Google CAPI" found. Skipping deletion.');
            }
        });

        methods.ElementToBeClickableXpath(locators.SyncNewConversion_Btn)
        cy.xpath('(//td[@class="ant-table-cell"])[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });
        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 0)
        methods.clickElement(`div[title="${Ad_Account}"]`)
        methods.clickElement0(locators.Search, 1)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.clickElementIndexXpath(locators.Google_Conversion_Action_Dropdown_Option, 1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Visited_Website, 0)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElement(locators.UsetheDealamount_Option)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SelectDealProperty)
        methods.clickElement0(locators.HubspotDeal, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.scroll(locators.PhoneNumber)
        cy.wait(Timeout.xs)
        methods.ClearAndType(locators.Defaultconversionvalue_Input, 10)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 3)
        methods.typeElementwithIndex(locators.Search, "user email", 3)
        methods.clickElement(locators.UserEmailID)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 5)
        methods.typeElementwithIndex(locators.Search, "user phone", 5)
        methods.clickElement(locators.UserPhone)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.workflow_edit_icon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.notification_popup1, "Failed!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.xs)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GEC_Refresh_Btn)
        methods.GetText(locators.notification_popup, "SuccessRefreshed conversion actions!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName1}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('Google Enhanced Conversions - Conversion feedback for Leads with Use the custom value', () => {

        const nowTime = dayjs().format('H:m:s');
        const Ad_Account = "7108784795";
        const testName = `Demo Google CAPI ${nowTime}`;
        const testName1 = `Demo Google CAPI New ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GoogleEnhancedConversions)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Google CAPI")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`(//h4[contains(text(),"Demo Google CAPI")]//following::button/span[@aria-label="more"])[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.remove_workflows)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Ok)
                methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
                cy.wait(Timeout.xs)
            } else {
                cy.log('No rules containing "Demo Google CAPI" found. Skipping deletion.');
            }
        });

        methods.ElementToBeClickableXpath(locators.SyncNewConversion_Btn)
        cy.xpath('(//td[@class="ant-table-cell"])[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });
        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 0)
        methods.clickElement(`div[title="${Ad_Account}"]`)
        methods.clickElement0(locators.Search, 1)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.clickElementIndexXpath(locators.Google_Conversion_Action_Dropdown_Option, 1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Visited_Website, 0)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElement(locators.Usethecustomvalue_Option)
        methods.ClearAndType(locators.Defaultconversionvalue_Input, 10)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 3)
        methods.typeElementwithIndex(locators.Search, "user email", 3)
        methods.clickElement(locators.UserEmailID)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 5)
        methods.typeElementwithIndex(locators.Search, "user phone", 5)
        methods.clickElement(locators.UserPhone)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.workflow_edit_icon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.notification_popup1, "Failed!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.xs)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GEC_Refresh_Btn)
        methods.GetText(locators.notification_popup, "SuccessRefreshed conversion actions!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName1}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('Google Enhanced Conversions - Conversion feedback for Clicks with Use the Deal amount', () => {

        const nowTime = dayjs().format('H:m:s');
        const Ad_Account = "7108784795";
        const testName = `Demo Google CAPI ${nowTime}`;
        const testName1 = `Demo Google CAPI New ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GoogleEnhancedConversions)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Google CAPI")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`(//h4[contains(text(),"Demo Google CAPI")]//following::button/span[@aria-label="more"])[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.remove_workflows)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Ok)
                methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
                cy.wait(Timeout.xs)
            } else {
                cy.log('No rules containing "Demo Google CAPI" found. Skipping deletion.');
            }
        });

        methods.ElementToBeClickableXpath(locators.SyncNewConversion_Btn)
        cy.xpath('(//td[@class="ant-table-cell"])[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });
        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 0)
        methods.clickElement(`div[title="${Ad_Account}"]`)
        methods.clickElement(locators.ConversionfeedbackforLeads_Option)
        methods.clickElement0(locators.Search, 1)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.clickElementIndexXpath(locators.Google_Conversion_Action_Dropdown_Option, 1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_Plus_button)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.UsetheDealamount_Option)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SelectDealProperty)
        methods.clickElement0(locators.HubspotDeal, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.ClearAndType(locators.Defaultconversionvalue_Input, 10)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.workflow_edit_icon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.notification_popup1, "Failed!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GEC_Refresh_Btn)
        methods.GetText(locators.notification_popup, "SuccessRefreshed conversion actions!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName1}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('Google Enhanced Conversions - Conversion feedback for Clicks with Use the custom value', () => {

        const nowTime = dayjs().format('H:m:s');
        const Ad_Account = "7108784795";
        const testName = `Demo Google CAPI ${nowTime}`;
        const testName1 = `Demo Google CAPI New ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GoogleEnhancedConversions)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Google CAPI")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`(//h4[contains(text(),"Demo Google CAPI")]//following::button/span[@aria-label="more"])[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.remove_workflows)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Ok)
                methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
                cy.wait(Timeout.xs)
            } else {
                cy.log('No rules containing "Demo Google CAPI" found. Skipping deletion.');
            }
        });

        methods.ElementToBeClickableXpath(locators.SyncNewConversion_Btn)
        cy.xpath('(//td[@class="ant-table-cell"])[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });

        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 0)
        methods.clickElement(`div[title="${Ad_Account}"]`)
        methods.clickElement(locators.ConversionfeedbackforLeads_Option)
        methods.clickElement0(locators.Search, 1)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.clickElementIndexXpath(locators.Google_Conversion_Action_Dropdown_Option, 1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Visited_Website, 0)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElement(locators.Usethecustomvalue_Option)
        methods.ClearAndType(locators.Defaultconversionvalue_Input, 10)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.workflow_edit_icon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.notification_popup1, "Failed!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GEC_Refresh_Btn)
        methods.GetText(locators.notification_popup, "SuccessRefreshed conversion actions!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(`(//h4[text()="${testName1}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('Google Enhanced Conversions - Search and Refresh flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const Ad_Account = "7108784795";
        const testName = `Demo Google CAPI ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.GoogleEnhancedConversions)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Demo Google CAPI")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`(//h4[contains(text(),"Demo Google CAPI")]//following::button/span[@aria-label="more"])[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.remove_workflows)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Ok)
                methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
                cy.wait(Timeout.xs)
            } else {
                cy.log('No rules containing "Demo Google CAPI" found. Skipping deletion.');
            }
        });

        methods.ElementToBeClickableXpath(locators.SyncNewConversion_Btn)
        cy.xpath('(//td[@class="ant-table-cell"])[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });

        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 0)
        methods.clickElement(`div[title="${Ad_Account}"]`)
        methods.clickElement0(locators.Search, 1)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.clickElementIndexXpath(locators.Google_Conversion_Action_Dropdown_Option, 1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Visited_Website, 0)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElement(locators.Usethecustomvalue_Option)
        methods.ClearAndType(locators.Defaultconversionvalue_Input, 10)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 3)
        methods.typeElementwithIndex(locators.Search, "user email", 3)
        methods.clickElement(locators.UserEmailID)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Search, 5)
        methods.typeElementwithIndex(locators.Search, "user phone", 5)
        methods.clickElement(locators.UserPhone)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.workflow_edit_icon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.notification_popup1, "Failed!")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.adpilot_publish)
        methods.GetText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        methods.clickElementByXPath(locators.Google_Capi_Search_Btn)
        methods.typeElement(locators.Searchreports, testName)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.Google_Capi_TableRow_1)
        methods.NotExistxpath(locators.Google_Capi_TableRow_2)
        methods.assertElementContainsTextxpath(locators.Google_Capi_FirstData, testName)
        methods.clickElementByXPath(locators.Google_Capi_Search_Btn)
        methods.clickElementByXPath(`(//h4[text()="${testName}"]//following::button/span[@aria-label="more"])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Google_Capi_Refresh_Btn)
        methods.VisibilityofElementXpathIndexInput(locators.GoogleEnhancedConversions, 1)
        methods.VisibilityofElementXpath(locators.GoogleCAPIrules_Title)
        cy.wait(Timeout.xs)
    })
})