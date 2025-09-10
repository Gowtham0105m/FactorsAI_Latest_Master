import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';

describe('Insight Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Insight', () => {

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
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.InHubspot)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.typeElementByXPath(locators.Search_Input, "In h")
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.equals_1)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndType(locators.Paid_search_visitors, testName)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.lg)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Insight)
        methods.clickElementByXPath(locators.Insight)
        cy.wait(Timeout.lg)
        methods.scrollWithXpath(locators.InsightMsg2)
        methods.assertElementContainsTextxpath(locators.InsightMsg1, "We are working hard to build the insights,")
        methods.assertElementContainsTextxpath(locators.InsightMsg2, "Check back in a day's time...")
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
    })

})