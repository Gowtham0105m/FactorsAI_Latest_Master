import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Insight custom range', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it.only('Insight custom range', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
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
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot)
        methods.clickElementByXPath(locators.Insight)
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
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
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
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
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
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.select_custom_range)
        methods.clickElementByXPath(locators.Preview_Month1)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date1)
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
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
    })

    it('Compare another insight segment', () =>{

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
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
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot)
        methods.clickElementByXPath(locators.Insight)
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
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)

    })
})