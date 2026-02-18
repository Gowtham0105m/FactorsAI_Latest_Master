import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Explain Regression', () => {

    beforeEach(() => {


        cy.viewport(deviceViewport);
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01  - Explain ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(Timeout.lg)
        methods.assertElementContainsText(locators.Page_title1, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
    })


    it('TC_RE_02 - Explain create', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(Timeout.lg)
        methods.assertElementContainsText(locators.Page_title1, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Explain_CreateNew)
        methods.clickElement(locators.Select_Analysis_Window)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Last_7_days)

    })

    it('TC_RE_03, TC_RE_04, TC_RE_05, TC_RE_06 - Explain create  ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(Timeout.lg)
        methods.assertElementContainsText(locators.Page_title1, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Explain_CreateNew)
        methods.clickElement(locators.Select_Analysis_Window)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Last_7_days)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.others1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        methods.typeElement(locators.Select_Event, "linkedin paid views")
        methods.clickElement(locators.Linkedin_Paid_Views)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElement(locators.Contact_List_1)
        methods.clickElementByXPath(locators.Save_and_Build)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.clickElementByXPath(locators.Journey_Option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(Timeout.xs)
    })
})