import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Global search ', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Global search profile without saving', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`(//*[text()="All segments"])[1]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

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
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New Profile Report');
        methods.clickElementByXPath(locators.Create_New_Profile_Report);
        methods.VisibilityofElementXpath(locators.PROFILESTOANALYSE)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Add_New);
        methods.clickElement(locators.Website_Visitors1);
        methods.clickElementByXPath(locators.Run_Analysis1);
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Closed);
        methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        cy.wait(Timeout.xmd);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.sm);
    })

    it('Global search profile with saving', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`(//*[text()="All segments"])[1]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

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
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New Profile Report');
        methods.clickElementByXPath(locators.Create_New_Profile_Report);
        methods.VisibilityofElementXpath(locators.PROFILESTOANALYSE)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Add_New);
        methods.clickElement(locators.Website_Visitors1);
        methods.clickElementByXPath(locators.Run_Analysis1);
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.Save_1);
        methods.typeElement(locators.Report_Name, testName);
        methods.typeElement(locators.Description_OP, 'Testing Purpose');
        methods.clickElementByXPath(locators.save1);
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//*[text()='${testName}']//following::button[1]`)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Closed);
        methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//*[text()='${testName}']//following::button[1]`)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.User_identification, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Created_Since)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Prevoius_Month)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Month_Date)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Overwrite)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//*[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
    })
})