import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Insight custom range', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Insight custom range', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.Account);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot3)
        methods.clickElement(locators.Insight_Icon)
        methods.VisibilityofElementXpath(locators.Hubspot_InsightLoad)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Week)
        cy.wait(Timeout.lgr)
        methods.scrollWithXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.SalesOpportunityAnalysis)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.ml)
        methods.Existxpath(locators.Opportunity_Created)
        methods.Existxpath(locators.Pipeline_Created)
        methods.Existxpath(locators.Average_Deal_Size)
        methods.Existxpath(locators.Revenue_Booked)
        methods.Existxpath(locators.Close_Rate)
        methods.Existxpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Month)
        cy.wait(Timeout.lgr)
        methods.scrollWithXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.SalesOpportunityAnalysis)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.ml)
        methods.Existxpath(locators.Opportunity_Created)
        methods.Existxpath(locators.Pipeline_Created)
        methods.Existxpath(locators.Average_Deal_Size)
        methods.Existxpath(locators.Revenue_Booked)
        methods.Existxpath(locators.Close_Rate)
        methods.Existxpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Quarter)
        cy.wait(Timeout.lgr)
        methods.scrollWithXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.SalesOpportunityAnalysis)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.ml)
        methods.Existxpath(locators.Opportunity_Created)
        methods.Existxpath(locators.Pipeline_Created)
        methods.Existxpath(locators.Average_Deal_Size)
        methods.Existxpath(locators.Revenue_Booked)
        methods.Existxpath(locators.Close_Rate)
        methods.Existxpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.select_custom_range)
        methods.clickElementByXPath(locators.Preview_Month1)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.SalesOpportunityAnalysis)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.ml)
        methods.Existxpath(locators.Opportunity_Created)
        methods.Existxpath(locators.Pipeline_Created)
        methods.Existxpath(locators.Average_Deal_Size)
        methods.Existxpath(locators.Revenue_Booked)
        methods.Existxpath(locators.Close_Rate)
        methods.Existxpath(locators.Avg_Sales_Cycle_Length)
    })

    it('Compare another insight segment', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.Account);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot3)
        methods.clickElement(locators.Insight_Icon)
        methods.VisibilityofElementXpath(locators.Hubspot_InsightLoad)
        cy.wait(Timeout.xmd)
        methods.ScrollAndClick(locators.Search)
        methods.clickElement(locators.Visited_Website1)
        cy.wait(Timeout.lgr)
        methods.scrollWithXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews)
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.scrollWithXpath(locators.SalesOpportunityAnalysis)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.Existxpath(locators.Opportunity_Created)
        methods.Existxpath(locators.Pipeline_Created)
        methods.Existxpath(locators.Average_Deal_Size)
        methods.Existxpath(locators.Revenue_Booked)
        methods.Existxpath(locators.Close_Rate)
        methods.Existxpath(locators.Avg_Sales_Cycle_Length)

    })
})