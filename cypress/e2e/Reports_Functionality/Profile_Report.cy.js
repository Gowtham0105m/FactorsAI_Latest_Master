import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Profile Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Profile Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${nowTime}_1`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Profile_Report)
        methods.VisibilityofElementXpath(locators.PROFILESTOANALYSE)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.Website_Visitors1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Report')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElementXpath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.wait(Timeout.sm)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.User_identification, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.Save_Report)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
        methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_New_FilterBy1)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.Enrichment_Source)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
    })

    it('Profile Report New Flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Profile_Report)
        methods.VisibilityofElementXpath(locators.PROFILESTOANALYSE)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.Website_Visitors1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Report')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElementXpath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_Breakdown)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.clickElementByXPath(locators.Overwrite)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.close_2)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)

    })

})