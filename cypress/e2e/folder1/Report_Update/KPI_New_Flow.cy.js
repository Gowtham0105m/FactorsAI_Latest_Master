import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';



describe('KPI Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        Login1();


    })

    it('KPI Report', () => {

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
        methods.Clickwithindexandvalidation(locators.Website_Session1, 0)
        methods.typeElement(locators.search_1, 'engaged users')
        methods.clickElement(locators.EngagedUsers)
        methods.clickElementByXPath(locators.filter_Funnel)
        methods.typeElement(locators.search_1, 'session medium')
        methods.clickElementByXPath(locators.session_Medium_Option)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.filter_Funnel)
        methods.clickElement0(locators.Company_Identification1, 0)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.search_1, 'Name')
        methods.clickElement(locators.CompanyName)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        //selecting filterBy

        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.typeElement(locators.search_1, 'session medium')
        methods.clickElementByXPath(locators.session_Medium_Option)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)

        //clicking user name

        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.User_identification, 0)
        methods.typeElement(locators.search_1, 'user name')
        methods.clickElement(locators.userName)
        methods.clickElement(locators.equals_1)
        methods.typeElement(locators.search_1, 'not set')
        methods.clickElementByXPath(locators.not_Set_Option)
        methods.clickElementByXPath(locators.Apply1)

        //adding breakdown

        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElementByXPath(locators.company_option)
        methods.typeElement(locators.select_property, 'company industry')
        methods.clickElement(locators.company_Industtry)

        //scroll and check the bars

        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.three_dot_create_Alias)
        methods.clickElementByXPath(locators.create_Alias)
        methods.clickElement(locators.alias_Text_Field)
        methods.typeElement(locators.alias_Text_Field, 'Testing')
        methods.clickElementByXPath(locators.create_Option)
        methods.clickElementByXPath(locators.brkdwn_Cancel)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)

        //edit the given alias

        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.three_dot_Edit_Alias)
        methods.clickElementByXPath(locators.edit_Alias)
        methods.ClearAndType(locators.alias_Text_Field, 'testing_New')
        methods.clickElementByXPath(locators.update_Option)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)

        //to verify the alias name

        methods.assertElementContainsTextxpath(locators.alias_Name_Verify, 'testing_New')
        methods.clickElementByXPath(locators.Compare)
        methods.clickElementByXPath(locators.previous_Day)
        methods.clickElementByXPath(locators.datepicker1)
        methods.clickElementByXPath(locators.cal_Selector)
        methods.clickElementByXPath(locators.datepicker2)
        methods.clickElementByXPath(locators.previous_30_Days)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.Metric)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.column)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.Line_Chart)
        methods.scrollWithXpath(locators.table_Check)
        methods.clickElementByXPath(locators.Save_1)
        methods.clickElementByXPath(locators.Add_to_Dashboard)
        methods.typeElement(locators.Report_Name, testName)
        methods.clickElementByXPath(locators.Please_Select)
        methods.typeElementByXPath(locators.select_folder, "Auto")
        methods.clickElementByXPath(locators.Automate_dashboard)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Automation_dashboard_Folder)
        methods.clickElementByXPath(locators.Automate)
        methods.assertElementContainsTextxpath(locators.SegmentTitle, "Automation Dashboard")
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Removefromthisboard)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Drafts)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)

    })
})