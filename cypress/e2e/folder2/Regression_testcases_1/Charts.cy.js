import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Charts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01_Charts - companies have been visited', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        cy.wait(Timeout.sm)
        methods.ElementVisibleandClick(locators.Website_Session1)
        methods.clickElementByXPath(locators.Add_another_event)
        methods.clickElement(locators.Hubspot_Contacts)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.KPI_Cal)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.choose_date, 7)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Run_Analysis1)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Sparkline)
        methods.clickElementByXPath(locators.Line_Chart)
    })

    it('TC_RE_02_Charts - Local filters, Local break down', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Website_Session1, 0)
        methods.MouseoverAndClick(locators.Filter_this_event)
        methods.clickElement0(locators.Company_Identification, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.Filter_this_event)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElement0(locators.choose_date, 6)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)

    })
})