import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Event Report Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    Login1();

  })

  it('Event Report', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;
    const testName1 = `Demo_${nowTime}_1`;
    let selectedDateBeforeSave1 = "";
    let selectedDateAfterSave1 = "";

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)
    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)
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
    methods.clickElementByXPath(locators.Add_New_FilterBy)
    methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    cy.wait(Timeout.sm)
    methods.clickElement(locators.equals_1)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.pageview_option2)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Apply1)
    methods.clickElementByXPath(locators.KPI_Cal)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Last_Month)
    cy.wait(Timeout.md)
    cy.xpath('//span[text()="Run Analysis"]//preceding::button[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateBeforeSave1 = dateText.trim();
        cy.log(`**Selected Date Before Save: ${selectedDateBeforeSave1}**`);
      });
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1);
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.xpath('(//div[@class="calendar"]//div[@class="fa-custom-datepicker"])[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateAfterSave1 = dateText.trim();
        cy.log(`**Selected Date After Save: ${selectedDateAfterSave1}**`);
      });
    if (selectedDateBeforeSave1 === selectedDateAfterSave1) {
      cy.log("**Both the date are same**");
    } else {
      throw new Error("**The date are not same**");
    }
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElementByXPath(locators.Add_another_event)
    methods.clickElement0(locators.Hubspot_Contacts, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElementIndexXpath(locators.Run_Analysis1, 0)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.wait(Timeout.xs)
    methods.ElementToBeClickableXpath(locators.Save_1)
    cy.wait(Timeout.md)
    methods.MouseoverWithXpath(locators.Save_dropdown)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Save_as_New)
    methods.typeElement(locators.Report_Name, testName1)
    methods.typeElement(locators.Description_OP, 'Testing Purpose1')
    methods.clickElementByXPath(locators.Save_3);
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)
    methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElement(locators.Add_New_Breakdown_new)
    methods.clickElement0(locators.Hubspot_Companies, 0)
    methods.clickElementByXPath(locators.Filter_option1)
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.wait(Timeout.sm)
    methods.ElementToBeClickableXpath(locators.Save_1)
    cy.wait(Timeout.md)
    methods.MouseoverWithXpath(locators.Save_dropdown)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName1}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)

  })

  it('Event Report New Flow', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;
    let selectedDateBeforeSave1 = "";
    let selectedDateAfterSave1 = "";

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)

    // add filter

    methods.clickElementByXPath(locators.add_new_3)
    methods.Clickwithindexandvalidation(locators.All_Account, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElement(locators.equals_1)
    methods.clickElementByXPath(locators.false)
    methods.clickElementByXPath(locators.Apply1)

    // Breakdown

    methods.clickElementByXPath(locators.Add_New_Breakdown)
    methods.clickElement(locators.Company_Identification)
    methods.clickElementByXPath(locators.Filter_option1)

    // select date

    methods.clickElementByXPath(locators.KPI_Cal)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Last_Month)
    cy.wait(Timeout.sm)
    cy.xpath('//span[text()="Run Analysis"]//preceding::button[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateBeforeSave1 = dateText.trim();
        cy.log(`**Selected Date Before Save: ${selectedDateBeforeSave1}**`);
      });
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.xpath('(//div[@class="calendar"]//div[@class="fa-custom-datepicker"])[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateAfterSave1 = dateText.trim();
        cy.log(`**Selected Date After Save: ${selectedDateAfterSave1}**`);
      });
    if (selectedDateBeforeSave1 === selectedDateAfterSave1) {
      cy.log("**Both the date are same**");
    } else {
      throw new Error("**The date are not same**");
    }
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElementByXPath(locators.Remove_FilterBy)
    methods.clickElementByXPath(locators.Remove_Breakdown)
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.wait(Timeout.xs)
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

  it('Report Draft bulk delete', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.typeElement(locators.Search_dashboard, 'Auto')
    methods.clickElementByXPath(locators.Automate)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)
    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)
    methods.clickElementByXPath(locators.add_new_3)
    methods.Clickwithindexandvalidation(locators.All_Account, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElement(locators.equals_1)
    methods.clickElementByXPath(locators.false)
    methods.clickElementByXPath(locators.Apply1)
    methods.clickElementByXPath(locators.Add_New_Breakdown)
    methods.clickElement(locators.Company_Identification)
    methods.clickElementByXPath(locators.Filter_option1)
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(`//h4[text()='${testName}']//preceding::input[@type='checkbox'][1]`)
    methods.clickElementByXPath(locators.delete)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Yes)
    methods.assertElementContainsText(locators.DeleteErrorPopup, 'Some reports are not deleted')
    methods.assertElementContainsTextxpath(locators.ReportNameVerification, testName)
    methods.clickElementByXPath(locators.Got_It)
    methods.assertElementContainsText(locators.Popup_Message, "None of the reports were deleted.")
    cy.wait(Timeout.xs)
    methods.typeElement(locators.Search_dashboard, 'Auto')
    methods.clickElementByXPath(locators.Automate)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
    methods.clickElementByXPath(locators.Removefromthisboard)
    methods.clickElementByXPath(locators.Yes)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Drafts)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(`//h4[text()='${testName}']//preceding::input[@type='checkbox'][1]`)
    methods.clickElementByXPath(locators.delete)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Yes)
    methods.assertElementContainsText(locators.Popup_Message, "Selected reports were deleted successfully.")

  })

  it('Event Report - Edit Details', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;
    const testName1 = `Demo_${nowTime}_1`;
    let selectedDateBeforeSave1 = "";
    let selectedDateAfterSave1 = "";

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Add_New_FilterBy)
    methods.clickElement0(locators.Hubspot_Companies, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElement(locators.equals_1)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElementByXPath(locators.Apply1)
    cy.xpath('//span[text()="Run Analysis"]//preceding::button[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateBeforeSave1 = dateText.trim();
        cy.log(`**Selected Date Before Save: ${selectedDateBeforeSave1}**`);
      });
    methods.clickElementByXPath(locators.Run_Analysis1)
    cy.wait(Timeout.sm)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.xpath('(//div[@class="calendar"]//div[@class="fa-custom-datepicker"])[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateAfterSave1 = dateText.trim();
        cy.log(`**Selected Date After Save: ${selectedDateAfterSave1}**`);
      });
    if (selectedDateBeforeSave1 === selectedDateAfterSave1) {
      cy.log("**Both the date are same**");
    } else {
      throw new Error("**The date are not same**");
    }
    methods.clickElementByXPath(locators.Expand_1)
    cy.wait(Timeout.sm)
    methods.MouseoverWithXpath(locators.ReportOptions)
    methods.clickElementByXPath(locators.EditDetails)
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
    cy.wait(Timeout.xs)
  })

  it('Event Report - Share to Slack', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;
    let selectedDateBeforeSave1 = "";
    let selectedDateAfterSave1 = "";

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Add_New_FilterBy)
    methods.clickElement0(locators.Hubspot_Companies, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElement(locators.equals_1)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElementByXPath(locators.Apply1)
    cy.xpath('//span[text()="Run Analysis"]//preceding::button[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateBeforeSave1 = dateText.trim();
        cy.log(`**Selected Date Before Save: ${selectedDateBeforeSave1}**`);
      });
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.xpath('(//div[@class="calendar"]//div[@class="fa-custom-datepicker"])[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateAfterSave1 = dateText.trim();
        cy.log(`**Selected Date After Save: ${selectedDateAfterSave1}**`);
      });
    if (selectedDateBeforeSave1 === selectedDateAfterSave1) {
      cy.log("**Both the date are same**");
    } else {
      throw new Error("**The date are not same**");
    }
    methods.clickElementByXPath(locators.Expand_1)
    cy.wait(Timeout.sm)
    methods.MouseoverWithXpath(locators.ReportOptions)
    methods.clickElementByXPath(locators.Share_to_slack_1)
    cy.wait(Timeout.sm)
    methods.typeElement(locators.slackShare_channel, 'staging')
    cy.wait(Timeout.sm)
    methods.clickElement(locators.alert_test_staging)
    methods.typeElement(locators.Yourmessage, "Testing Event Report")
    methods.clickElement(locators.done)
    methods.assertElementContainsText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected Slack channels")
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)
  })

  it('Event Report - Email this Report', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;
    let selectedDateBeforeSave1 = "";
    let selectedDateAfterSave1 = "";

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElementXpath(locators.SegmentTitle)
    methods.clickElementByXPath(locators.Drafts)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    cy.wait(Timeout.sm)
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Add_New_FilterBy)
    methods.clickElement0(locators.Hubspot_Companies, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElement(locators.equals_1)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElementByXPath(locators.Apply1)
    cy.xpath('//span[text()="Run Analysis"]//preceding::button[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateBeforeSave1 = dateText.trim();
        cy.log(`**Selected Date Before Save: ${selectedDateBeforeSave1}**`);
      });
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.assertElementContainsText(locators.notification_popup, "Report Saved Successfully")
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.xpath('(//div[@class="calendar"]//div[@class="fa-custom-datepicker"])[1]')
      .invoke('text')
      .then((dateText) => {
        selectedDateAfterSave1 = dateText.trim();
        cy.log(`**Selected Date After Save: ${selectedDateAfterSave1}**`);
      });
    if (selectedDateBeforeSave1 === selectedDateAfterSave1) {
      cy.log("**Both the date are same**");
    } else {
      throw new Error("**The date are not same**");
    }
    methods.clickElementByXPath(locators.Expand_1)
    cy.wait(Timeout.sm)
    methods.MouseoverWithXpath(locators.ReportOptions)
    methods.clickElementByXPath(locators.Emailthisreport)
    methods.typeElement(locators.emailShare_email, "sarath_tdfect@factors.ai")
    methods.clickElementByXPath(locators.AddEmail)
    methods.typeElement(locators.emailShare_email1, "sarath_tdfect@factors.ai")
    methods.clickElementByXPath(locators.Delete_Email)
    methods.clickElementByXPath(locators.AddEmail)
    methods.typeElement(locators.emailShare_email1, "sarath_tdfect@factors.ai")
    methods.typeElement(locators.emailShare_message, "Testing Event Report")
    methods.clickElementByXPath(locators.SendEmailBtn)
    methods.assertElementContainsText(locators.notification_popup, "Report Sent SuccessfullyReport has been sent to the selected emails")
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)
  })
})