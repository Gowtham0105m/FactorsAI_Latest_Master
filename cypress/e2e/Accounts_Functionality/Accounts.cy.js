import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it.only('Accounts', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_QF_${nowTime}`;
        const Folder = `Automation Folder ${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

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
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Filter)
        methods.GetTextXpath(locators.QuickSearchTitle, "Select from quick suggestions")
        methods.clickElement0(locators.HighEngagement, 0)
        methods.clickElement0(locators.SQLsandOpps, 0)
        methods.clickElement(locators.VisitedPricing)
        methods.MouseoverAndClick(locators.calender_Icon)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.ninety_days)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_filter)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName1)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.md)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.GetTextXpath(locators.SegmentTitle, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h1[text()="${testName1}"]//following::button[3]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Segment deleted successfully")

        // Search Account

        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'factors.ai')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        cy.document().then((doc) => {
            const Searched_Account = doc.evaluate(locators.factors_File, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!Searched_Account || Searched_Account.offsetParent === null) {
                cy.log("**Search account is not visible it is in hidden**");
                methods.clickElementByXPath(locators.AllAccount_ActionBtn);
                methods.clickElementByXPath(locators.Show_hidden_accounts);
                cy.wait(Timeout.xs);
                methods.assertElementContainsTextxpath(locators.factors_File, 'factors.ai')
                cy.wait(Timeout.xs);
            } else {
                cy.log("**Search account is visible**");
                methods.assertElementContainsTextxpath(locators.factors_File, 'factors.ai')
            }
        });

        // Download columns

        methods.clickElementByXPath(locators.download_button)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.Titletextcontainsxpath(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClickXpath(locators.exportCSV)
        methods.NotExist(locators.DownloadCSV_Popup)
        methods.clickElementByXPath(locators.clear_search)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // Add filter

        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.All_Account)
        methods.typeElementByXPath(locators.Search_Input, "visi")
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Hubspot_Companies)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElementByXPath(locators.Apply_filter)

        // Save Segment

        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.New_folder1)
        methods.typeElementByXPath(locators.create_newfolder, Folder)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Folder created")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.save1)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)

        // renaming segment

        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.RenameSegment)
        methods.typeElementByXPath(locators.segment_name, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment renamed successfully")
        methods.Titletextcontainsxpath(locators.SegmentTitle, combination)

        //deleting the segment

        methods.clickElementByXPath(`//span[text()='${combination}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")

        // add column

        cy.wait(Timeout.lg)
        methods.NotExist(locators.Loader)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Add_column_1)
        methods.VisibilityofElement(locators.Table_properties)
        methods.clickElement(locators.company_name)
        methods.clickElementByXPath(locators.Apply1)
        methods.Clear(locators.Search_segment)
        methods.clickElementByXPath(`//div[text()='${Folder}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.xs)

    })

    it('Account - Update this Segment', () => {

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
        cy.wait(Timeout.xl)
        cy.wait(Timeout.lg)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.scrollWithXpath(locators.Showfilter)
        methods.VisibilityofElementXpath(locators.Showfilter)
        methods.clickElementByXPath(locators.Showfilter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.typeElementByXPath(locators.Search_Input, "In h")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save_segments1);
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.UpdatethisSegment);
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Segment updated successfully")
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)

    })

    it('Account - Save as New Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo Segment_${nowTime}`;

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
        cy.wait(Timeout.xl)
        cy.wait(Timeout.lg)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.scrollWithXpath(locators.Showfilter)
        methods.VisibilityofElementXpath(locators.Showfilter)
        methods.clickElementByXPath(locators.Showfilter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.typeElementByXPath(locators.Search_Input, "In h")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save_segments1);
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SaveasNewSegment);
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.lgr)
        methods.NotExist(locators.Loader)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Search_segment, testName1)
        methods.clickElementByXPath(`//span[text()='${testName1}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.All_segments)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)

    })
})