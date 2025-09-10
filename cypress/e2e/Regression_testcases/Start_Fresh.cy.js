import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Start_Fresh_Icon', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Move folder', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const FolderName = `Master_${nowTime}`;

        cy.wait(Timeout.md)
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
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.typeElementByXPath(locators.Search_Input, "visi")
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.equals_1)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Add_event)
        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement(locators.Website_Session)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndType(locators.Paid_search_visitors, testName)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)

        // search saved segment
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.ClearAndType(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        methods.clickElementByXPath(locators.Movetofolder)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.New_folder)
        methods.ClickandType(locators.FolderNameField, FolderName)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Segment Moved to New Folder")
        methods.Clear(locators.Search_segment)
        methods.scrollWithXpath(`//div[text()="${FolderName}"]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.delete_segment)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${FolderName}"]//following::span[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Delete_Folder)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)

    })

})