import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('KPI Login', () => {

  beforeEach(() => {


    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Kpi - Share to slack', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    cy.wait(Timeout.sm)
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
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
    methods.clickElement0(locators.choose_date, 9)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Run_Anal)
    methods.VisibilityofElement(locators.table_validation1)
    methods.VisibilityofElement(locators.table_validation2)
    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.clickElementByXPath(locators.save1)
    methods.VisibilityofElement(locators.notification_popup)
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.table_validation1)
    methods.clickElement(locators.close_kpi)
    cy.wait(Timeout.sm)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Share_to_slack)
    methods.typeElement(locators.slackShare_channel, 'staging')
    methods.clickElement(locators.alert_test_staging)
    methods.typeElement(locators.slackShare_message, 'Testing Report')
    methods.clickElement(locators.done)
    methods.GetText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected Slack channel")
    cy.wait(Timeout.xs)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.wait(Timeout.sm)

  })

  it('Kpi - Share to email', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    cy.wait(Timeout.sm)
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
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
    methods.clickElement0(locators.choose_date, 9)
    methods.clickElementByXPath(locators.Run_Anal)
    methods.VisibilityofElement(locators.table_validation1)
    methods.VisibilityofElement(locators.table_validation2)

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.clickElementByXPath(locators.save1)
    methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Closed)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Email_this_report)
    methods.typeElement(locators.emailShare_email, 'sarath_tdfect@factors.ai')
    methods.typeElement(locators.emailShare_message, 'Testing Report')
    methods.clickElement(locators.done)
    methods.assertElementContainsText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected emails")
    cy.wait(Timeout.sm)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.wait(Timeout.sm)

  })

})