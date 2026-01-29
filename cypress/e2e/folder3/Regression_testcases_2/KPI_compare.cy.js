import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('KPI compare Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('KPI compare', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
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
        cy.wait(Timeout.xs)

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
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Compare)
        methods.clickElementByXPath(locators.Compare_to)
        methods.VisibilityofElement(locators.Attri_pageloaded)

    })
})