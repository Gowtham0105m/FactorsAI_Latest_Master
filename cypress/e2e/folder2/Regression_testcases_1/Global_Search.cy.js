import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Global search Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Global search - ask factor', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.xmd)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md)
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
        methods.VisibilityofElementXpath(locators.global_Search)
        methods.clickElementByXPath(locators.global_Search)
        methods.VisibilityofElementXpath(locators.global_Popup)
        methods.clickElementByXPath(locators.ask_Factors)
        methods.ClickandTypeXpath(locators.ai_Textfield, 'visitors having company industry as software and technology visited last week?')
        methods.EnterXpath(locators.ai_Textfield)
        methods.NotExistxpath(locators.GlobalSearch_Loading)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpath(locators.EVENTS)
        methods.clickElementByXPath(locators.Add_another_event);
        methods.clickElement(locators.HubspotDeals);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.add_new_3)
        methods.Clickwithindexandvalidation(locators.Linkedin_Company_Engagements, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.false)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement(locators.Company_Identification)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        methods.typeElement(locators.select_property, "Hubspot deal pipeline")
        methods.clickElement(locators.Hubspot_Deal_Pipeline)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElementXpath(locators.Graph_Details)
        methods.ScrollAndClickxpath(locators.save2)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.VisibilityofElementXpath(`//*[text()='${testName}']`)
        methods.MouseoverWithXpath(`//*[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.global_Search)
        methods.ClickandTypeXpath(locators.global_Jumpto, 'create new segment')
        methods.clickElementByXPath(locators.CreateNewSegment)
        methods.VisibilityofElement(locators.SegmentTemplatePopup)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Scratch_global)
        methods.VisibilityofElementXpath(locators.segment_Page_Heading)
    })
})