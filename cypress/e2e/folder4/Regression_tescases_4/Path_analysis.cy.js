import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Path analaysis', () => {

    beforeEach(() => {


        cy.viewport(deviceViewport);
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Path analysis ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        methods.assertElementContainsText(locators.Page_title1, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
    })

    it('TC_RE_02, TC_RE_03 - Path analysis create event ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        methods.assertElementContainsText(locators.Page_title1, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.others1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.All_events_except)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement(locators.Hubspot_Companies)
        methods.clickElement(locators.Company_Created_title)
    })

    it('TC_RE_04, TC_RE_05 - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        methods.assertElementContainsText(locators.Page_title1, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement(locators.others1)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.All_events_except)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement(locators.Hubspot_Companies)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Steps)
        methods.clickElement(locators.Four_steps)
        methods.clickElementByXPath(locators.Select_date_range)
        methods.clickElementByXPath(locators.Preview_Month)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date)
        methods.clickElementByXPath(locators.Save_and_Build)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.GetText(locators.Popup_Message, "Report saved!")
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.MouseoverWithXpath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.Popup_Message, "Saved report removed!")
        cy.wait(Timeout.xs)

    })

    it('TC_RE_06, TC_RE_07 - Path analysis create event ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        methods.assertElementContainsText(locators.Page_title1, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement(locators.others1)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.Only_specific_events)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.If_the_event_equals_title)
        methods.clickElementByXPath(locators.If_the_event_equals)
        methods.clickElementByXPath(locators.Path_Select_event)
        methods.clickElementByXPath(locators.G2_Engagement_option)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement0(locators.If_the_event_equals_title, 1)
        methods.clickElementByXPath(locators.If_the_event_is_of_type)
        methods.clickElementByXPath(locators.Path_Select_event_1)
        methods.clickElement(locators.Page_Views)
        cy.wait(Timeout.xs)

    })

    it('TC_RE_08 - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        methods.assertElementContainsText(locators.Page_title1, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement(locators.others1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.Only_specific_events)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.If_the_event_equals_title)
        methods.clickElementByXPath(locators.If_the_event_equals)
        methods.clickElementByXPath(locators.Path_Select_event)
        methods.clickElementByXPath(locators.G2_Engagement_option)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement0(locators.If_the_event_equals_title, 1)
        methods.clickElementByXPath(locators.If_the_event_is_of_type)
        methods.clickElementByXPath(locators.Path_Select_event_1)
        methods.clickElement(locators.Page_Views)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.Enrichment_Source)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Steps)
        methods.clickElement(locators.Four_steps)
        methods.clickElementByXPath(locators.Select_date_range)
        methods.clickElementByXPath(locators.Preview_Month)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date)
        methods.clickElementByXPath(locators.Save_and_Build)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.GetText(locators.Popup_Message, "Report saved!")
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.MouseoverWithXpath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.Popup_Message, "Saved report removed!")
        cy.wait(Timeout.xs)
    })
})