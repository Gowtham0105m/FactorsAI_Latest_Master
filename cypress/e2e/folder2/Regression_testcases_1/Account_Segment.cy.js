import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Accounts Segment Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Accounts Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo Folder_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
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
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.New_folder1)
        methods.typeElementByXPath(locators.create_newfolder, testName1)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup1)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.xs)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
        methods.Clear(locators.Search_segment)
        methods.clickElementByXPath(`//div[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)
    })
})