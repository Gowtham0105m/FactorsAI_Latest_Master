import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';

describe('Accounts Segment Digest Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })
    it.only('Account Segment Digest', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.Account);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });

        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.All_Account)
        methods.typeElementByXPath(locators.Search_Input, "visi")
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.lgr)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.lgr)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.segment_summary_Icon)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai")
        methods.assertElementContainsText(locators.Digest_Tooltip, "Some emails are from outside your organization. Be cautious before sharing sensitive information")

        for (let i = 0; i < 9; i++) {
            methods.clickElementByXPath(locators.AddEmail)
            methods.typeElementwithIndex(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai", i + 1)
            methods.scroll(locators.SelectaDay)
            cy.wait(Timeout.xs)
        }

        methods.VisibilityofElementXpath(locators.Email_Limit_ToolTip)
        methods.scroll(`[title="${testName}"]`)

        for (let j = 0; j < 9; j++) {
            methods.clickElementIndexXpath(locators.Remove_Digest_Mail, 1)
            cy.wait(Timeout.xs)
        }

        methods.clickElement(locators.SelectaDay)
        methods.clickElement(locators.Mail_Day)
        methods.clickElement(locators.SelectTime)
        methods.clickElement(locators.Mail_Time)
        methods.clickElementByXPath(locators.Digest_properties)
        methods.clickElementIndexXpath(locators.properties_list_Option, 0)
        methods.assertElementContainsTextWithIndex(locators.AlertMsg, "at least 4 properties need to be added", 1)
        methods.clickElementIndexXpath(locators.properties_list_Option, 2)
        methods.clickElementIndexXpath(locators.properties_list_Option, 4)
        methods.clickElementIndexXpath(locators.properties_list_Option, 6)
        methods.clickElementByXPath(locators.Subscribe_Digest_Btn)
        methods.VisibilityofElementIndexInput(locators.Templete_Popup, 1)
        methods.clickElementByXPath(locators.Yes_Proceed)
        methods.assertElementContainsText(locators.notification_popup1, `You’re subscribed to the Segment Digest!`)
        // cy.wait(Timeout.sm)
        // methods.clickElementByXPath(locators.All_segments)
        // methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        // methods.clickElementByXPath(locators.Manage_Subscription)
        // methods.VisibilityofElement(locators.Templete_Popup)
        // methods.clickElementByXPath(locators.AddEmail)
        // methods.typeElementwithIndex(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai", 1)
        // methods.scrollWithXpath(locators.Send_a_test_email)
        // methods.clickElementByXPath(locators.Send_a_test_email)
        // methods.assertElementContainsText(locators.notification_popup, "Email Sendsummary on the selected emails are send, please verify")
        // methods.clickElementByXPath(locators.update_Option)
        // methods.VisibilityofElementIndexInput(locators.Templete_Popup, 1)
        // methods.clickElementByXPath(locators.Yes_Proceed)
        // methods.assertElementContainsText(locators.notification_popup1, `You have updated this segment Digest`)
        // cy.wait(Timeout.sm)
        // methods.ScrollAndClickxpath(`//span[text()='${testName}']//following::span[1]`)
        // methods.clickElementByXPath(locators.delete_segment)
        // cy.wait(Timeout.xs)
        // methods.clickElementByXPath(locators.Yes)
        // methods.NotExist(locators.Loading)
        // methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        // cy.wait(Timeout.xs)
    })

    it('Account Segment Digest - Sharing → Segment Digest', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.Account);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });

        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.All_Account)
        methods.typeElementByXPath(locators.Search_Input, "visi")
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.lgr)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.lgr)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Sharing)
        methods.assertElementContainsText(locators.Page_title, 'Sharing')
        methods.clickElementByXPath(locators.Segment_Digest)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElementXpath(locators.Set_Up_Segment_Digest_Header)
        methods.clickElement(locators.Enter_Segment_Input)
        methods.clickElement(`[title="${testName}"]`)
        methods.typeElement(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai")
        methods.assertElementContainsText(locators.Digest_Tooltip, "Some emails are from outside your organization. Be cautious before sharing sensitive information")

        for (let i = 0; i < 9; i++) {
            methods.clickElementByXPath(locators.AddEmail)
            methods.typeElementwithIndex(locators.receive_this_digest_Input, "kamali_tdfect@factors.ai", i + 1)
            methods.scroll(locators.SelectaDay)
            cy.wait(Timeout.xs)
        }

        methods.VisibilityofElementXpath(locators.Email_Limit_ToolTip)
        methods.scroll(locators.Enter_Segment_Input)

        for (let j = 0; j < 9; j++) {
            methods.clickElementIndexXpath(locators.Remove_Digest_Mail, 1)
            cy.wait(Timeout.xs)
        }

        methods.clickElement(locators.SelectaDay)
        methods.clickElement(locators.Mail_Day)
        methods.clickElement(locators.SelectTime)
        methods.clickElement(locators.Mail_Time)
        methods.clickElementByXPath(locators.Digest_properties)
        methods.clickElementIndexXpath(locators.properties_list_Option, 0)
        methods.assertElementContainsTextWithIndex(locators.AlertMsg, "at least 4 properties need to be added", 1)
        methods.clickElementIndexXpath(locators.properties_list_Option, 2)
        methods.clickElementIndexXpath(locators.properties_list_Option, 4)
        methods.clickElementIndexXpath(locators.properties_list_Option, 6)
        methods.ScrollAndClickxpath(locators.Subscribe_Digest_Btn)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Yes_Proceed)
        methods.assertElementContainsText(locators.notification_popup1, `You’re subscribed to the Segment Digest!`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Page_title, 'Sharing')
        methods.VisibilityofElementXpath(`//tbody/tr/td/div[text()="${testName}"]`)
        methods.clickElementByXPath(`(//div[text()="${testName}"]//following::button)[1]`)
        methods.clickElementByXPath(locators.Segment_Digest_Edit_Btn)
        methods.VisibilityofElementXpath(locators.Manage_Segment_Digest_Header)
        methods.clickElementByXPath(locators.AddEmail)
        methods.typeElementwithIndex(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai", 1)
        methods.scrollWithXpath(locators.Send_a_test_email)
        methods.clickElementByXPath(locators.Send_a_test_email)
        methods.assertElementContainsText(locators.notification_popup, "Email Sendsummary on the selected emails are send, please verify")
        methods.clickElementByXPath(locators.update_Option)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Yes_Proceed)
        methods.assertElementContainsText(locators.notification_popup1, `You have updated this segment Digest`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Page_title, 'Sharing')
        methods.clickElement(locators.Factors_Icon)
        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.All_segments)
        methods.ScrollAndClickxpath(`//span[text()='${testName}']`)
        methods.VisibilityofElement(locators.Subscribe_Digest_Segment)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Sharing)
        methods.assertElementContainsText(locators.Page_title, 'Sharing')
        methods.clickElementByXPath(locators.Segment_Digest)
        methods.VisibilityofElementXpath(`//tbody/tr/td/div[text()="${testName}"]`)
        methods.clickElementByXPath(`(//div[text()="${testName}"]//following::button)[1]`)
        methods.clickElementByXPath(locators.Delete_Digest)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Yes_Delete)
        methods.assertElementContainsText(locators.notification_popup, 'Subscription deletedsubscription for this segment is deleted')
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Factors_Icon)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.ScrollAndClickxpath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
    })
})