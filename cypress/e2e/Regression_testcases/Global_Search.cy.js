import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
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

    it('Global search', () => {

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
        methods.clickElementByXPath(locators.global_Search)
        methods.VisibilityofElementXpath(locators.global_Popup)
        methods.clickElementByXPath(locators.ask_Factors)
        methods.ClickandTypeXpath(locators.ai_Textfield, 'Visitors having company industry as software and technology visited last week?')
        methods.EnterXpath(locators.ai_Textfield)
        cy.wait(Timeout.lgr)
        methods.NotExistxpath(locators.GlobalSearch_Loading)
        methods.VisibilityofElementXpath(locators.kpi_Heading)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand_1)
        methods.CompareScreenShot('Global_Search')
        methods.VisibilityofElementXpath(locators.filter_By_Option)
        methods.clickElementByXPath(locators.collapse_All)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement(locators.Company_Identification)
        methods.typeElement(locators.select_property, "Company Name")
        methods.ScrollAndClickxpath(locators.Company_option)
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
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.global_Search)
        methods.ClickandTypeXpath(locators.global_Jumpto, 'create new segment')
        methods.clickElementByXPath(locators.CreateNewSegment)
        methods.VisibilityofElement(locators.SegmentTemplatePopup)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.VisibilityofElementXpath(locators.segment_Page_Heading)
    })
})