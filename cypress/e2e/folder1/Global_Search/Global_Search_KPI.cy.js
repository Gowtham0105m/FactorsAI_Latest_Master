import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Global search kpi', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Global search kpi without saving', () => {

        cy.wait(Timeout.md);
        methods.scrollWithXpath(locators.Account_Pagetitle);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.account_pageloaded);
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New KPI Report');
        methods.clickElementByXPath(locators.Create_New_KPI_Report);
        methods.VisibilityofElementXpath(locators.KPITOANALYSE);
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.Add_a_KPI);
        methods.clickElement(locators.Hubspot_Contacts);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Run_Analysis1);
        cy.wait(Timeout.md);
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Closed); -
            methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.sm);
    })

    it('Global search kpi with saving', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md);
        methods.scrollWithXpath(locators.Account_Pagetitle);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.account_pageloaded);
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New KPI Report');
        methods.clickElementByXPath(locators.Create_New_KPI_Report);
        methods.VisibilityofElementXpath(locators.KPITOANALYSE);
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.Add_a_KPI);
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement(locators.Total_Session)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElementByXPath(locators.KPI_Cal)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Last_Month)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Run_Analysis1);
        methods.VisibilityofElement(locators.Profile_report_gen);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Save_1);
        cy.wait(Timeout.sm);
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1);
        cy.wait(Timeout.xs);
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Closed);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.Add_New_Breakdown_new)
        methods.clickElement(locators.HubspotCompany)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.close_2)
        methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.User_identification, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
    })
})