import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Traffic Dashboard filter', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        Login1();
    })

    it('Traffic Dashboard filter', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.TrafficDashboard)
        methods.VisibilityofElementXpath(locators.TrafficDashboardTitle)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.TrafficAddFilter)
        methods.VisibilityofElementXpath(locators.TrafficHideFilter)
        methods.clickElementByXPath(locators.campaign_add_filter)
        methods.clickElement0(locators.User, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Applyfilters)
        methods.VisibilityofElementXpath(locators.TrafficDashboardLoad)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.TrafficViewFilter)
        methods.clickElementByXPath(locators.TrafficViewFilter)
        methods.clickElementByXPath(locators.Clearfilters)
        methods.VisibilityofElementXpath(locators.TrafficDashboardLoad)
    })
})