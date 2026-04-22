import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Clone Segment', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Clone Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Clone Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)

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

        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElement0(locators.SQLsandOpps, 0)
        methods.clickElement0(locators.Not_Customers, 0)
        methods.clickElementByXPath(locators.Add_Event)
        methods.typeElement(locators.Select_Event, "visi")
        methods.clickElement0(locators.Third_party_Intent_Visit, 0)
        methods.clickElementByXPath(locators.AdvancedFilters)
        methods.assertElementContainsText2(locators.Person_Matches, "person that matches")
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        methods.clickElement0(locators.search_1, 0)
        methods.typeElement(locators.search_1, "Total Active Time")
        methods.clickElement0(locators.User_Total_Active_Time, 0)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Subscribe)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.receive_this_digest_Input, "sarath.s@trackdfect.ai")
        methods.assertElementContainsText(locators.Digest_Tooltip, "Some emails are from outside your organization. Be cautious before sharing sensitive information")
        methods.ClearAndType(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai")

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
        methods.assertElementContainsText(locators.AlertMsg, "at least 4 properties need to be added")
        methods.clickElementIndexXpath(locators.properties_list_Option, 2)
        methods.clickElementIndexXpath(locators.properties_list_Option, 4)
        methods.clickElementIndexXpath(locators.properties_list_Option, 6)
        methods.clickElementByXPath(locators.Subscribe_Digest_Btn)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.assertElementContainsText2(locators.notification_popup1, `You’re subscribed to the Segment Digest!`)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Subscribe_Digest_Segment)
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.Manage_Subscription)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.AddEmail)
        methods.typeElementwithIndex(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai", 1)
        methods.scrollWithXpath(locators.Send_a_test_email)
        methods.clickElementByXPath(locators.Send_a_test_email)
        methods.assertElementContainsText(locators.notification_popup1, "Email Send")
        methods.clickElementByXPath(locators.update_Option)
        methods.assertElementContainsText(locators.notification_popup1, `You have updated this segment Digest`)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Subscribe_Digest_Segment)
        methods.clickElementByXPath(locators.delete)
        methods.VisibilityofElement(locators.Import_Confirmation, "Delete this subscription?")
        methods.clickElementByXPath(locators.Yes_Delete)
        methods.assertElementContainsText(locators.notification_popup, 'Subscription deletedsubscription for this segment is deleted')
        cy.wait(Timeout.sm)
        methods.GetTextXpath(locators.SegmentTitle, testName)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        methods.clickElementIndexXpath(locators.Clone_Segment, 0)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Cloned segment successfully")
        methods.VisibilityofElement(locators.Open_Filter)
        methods.assertElementContainsText1(locators.QuickSearchTitle, "Select from quick suggestions")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.RenameSegment)
        methods.typeElementByXPath(locators.segment_name, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment renamed successfully")
        methods.Titletextcontainsxpath(locators.SegmentTitle, combination)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//span[text()='${combination}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Search_segment, testName1)
        methods.clickElementByXPath(`//span[text()='${testName1}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

    })

    it('Clone Segment New Flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)

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

        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElement0(locators.SQLsandOpps, 0)
        methods.clickElement0(locators.Not_Customers, 0)
        methods.clickElementByXPath(locators.Add_Event)
        methods.typeElement(locators.Select_Event, "visi")
        methods.clickElement0(locators.Third_party_Intent_Visit, 0)
        methods.clickElementByXPath(locators.AdvancedFilters)
        methods.assertElementContainsText2(locators.Person_Matches, "person that matches")
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        methods.clickElement0(locators.search_1, 0)
        methods.typeElement(locators.search_1, "Total Active Time")
        methods.clickElement0(locators.User_Total_Active_Time, 0)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.segment_summary_Icon)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.receive_this_digest_Input, "sarath.s@trackdfect.ai")
        methods.assertElementContainsText(locators.Digest_Tooltip, "Some emails are from outside your organization. Be cautious before sharing sensitive information")
        methods.ClearAndType(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai")

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
        methods.assertElementContainsText(locators.AlertMsg, "at least 4 properties need to be added")
        methods.clickElementIndexXpath(locators.properties_list_Option, 2)
        methods.clickElementIndexXpath(locators.properties_list_Option, 4)
        methods.clickElementIndexXpath(locators.properties_list_Option, 6)
        methods.clickElementByXPath(locators.Subscribe_Digest_Btn)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.assertElementContainsText2(locators.notification_popup1, `You’re subscribed to the Segment Digest!`)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Subscribe_Digest_Segment)
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.Manage_Subscription)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.AddEmail)
        methods.typeElementwithIndex(locators.receive_this_digest_Input, "sarath_tdfect@factors.ai", 1)
        methods.scrollWithXpath(locators.Send_a_test_email)
        methods.clickElementByXPath(locators.Send_a_test_email)
        methods.assertElementContainsText(locators.notification_popup1, "Email Send")
        methods.clickElementByXPath(locators.update_Option)
        methods.assertElementContainsText(locators.notification_popup1, `You have updated this segment Digest`)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Subscribe_Digest_Segment)
        methods.clickElementByXPath(locators.delete)
        methods.VisibilityofElement(locators.Import_Confirmation, "Delete this subscription?")
        methods.clickElementByXPath(locators.Yes_Delete)
        methods.assertElementContainsText(locators.notification_popup, 'Subscription deletedsubscription for this segment is deleted')
        cy.wait(Timeout.sm)
        methods.GetTextXpath(locators.SegmentTitle, testName)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.threedot_icon)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Clone_Segment)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Cloned segment successfully")
        methods.VisibilityofElement(locators.Open_Filter)
        methods.assertElementContainsText1(locators.QuickSearchTitle, "Select from quick suggestions")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.threedot_icon)
        methods.clickElementByXPath(locators.RenameSegment)
        methods.typeElementByXPath(locators.segment_name, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment renamed successfully")
        methods.Titletextcontainsxpath(locators.SegmentTitle, combination)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.threedot_icon)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Segment deleted successfully")
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

    })

})