import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('KPI Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('KPI Report', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)

        // Select KPI report & add event

        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement0(locators.Total_Session, 0)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElement0(locators.choose_date, 7)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_another_KPI_1)
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose1')
        methods.clickElementByXPath(locators.Save_Report)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.table_validation1)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.wait(Timeout.xs)
        methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.Add_New_Breakdown_new)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)

    })

    it('KPI Report New Flow', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)

        // Select KPI report & add event

        methods.clickElementByXPath(locators.Add_a_KPI)
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
        methods.clickElement0(locators.choose_date, 7)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_FilterBy1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
    })

    it('KPI Report - Edit Details', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement(locators.Total_Session)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.sm)
        methods.MouseoverWithXpath(locators.ReportOptions)
        methods.clickElementByXPath(locators.EditDetails)
        methods.VisibilityofElement(locators.SegmentTemplatePopup)
        methods.ClearAndType(locators.Report_Name, testName1)
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
    })

    it('KPI Report - Share to Slack', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement(locators.Total_Session)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.sm)
        methods.MouseoverWithXpath(locators.ReportOptions)
        methods.clickElementByXPath(locators.Share_to_slack_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.slackShare_channel)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.typeElement(locators.slackShare_channel, 'staging')
        cy.wait(Timeout.sm)
        methods.clickElement(locators.alert_test_staging)
        methods.typeElement(locators.Yourmessage, "Testing KPI Report")
        methods.clickElement(locators.done)
        methods.assertElementContainsText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected Slack channels")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
    })

    it('KPI Report - Email this Report', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement(locators.Total_Session)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.sm)
        methods.MouseoverWithXpath(locators.ReportOptions)
        methods.clickElementByXPath(locators.Emailthisreport)
        methods.typeElement(locators.emailShare_email, "sarath_tdfect@factors.ai")
        methods.clickElementByXPath(locators.AddEmail)
        methods.typeElement(locators.emailShare_email1, "sarath_tdfect@factors.ai")
        methods.clickElementByXPath(locators.Delete_Email)
        methods.clickElementByXPath(locators.AddEmail)
        methods.typeElement(locators.emailShare_email1, "kamali_tdfect@factors.ai")
        methods.typeElement(locators.emailShare_message, "Testing KPI Report")
        methods.clickElementByXPath(locators.SendEmailBtn)
        methods.assertElementContainsText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected emails")
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
    })
})