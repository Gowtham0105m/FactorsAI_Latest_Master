import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Global search event', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Global search event without saving', () => {

        cy.wait(Timeout.md);
        methods.scrollWithXpath(locators.Account_Pagetitle);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.account_pageloaded);
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New Event Report');
        methods.clickElementByXPath(locators.Create_New_Event_Report);
        methods.VisibilityofElementXpath(locators.EVENTS)
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.Add_First_Event);
        methods.clickElement(locators.Hubspot_Contacts);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Run_Analysis1);
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Closed);
        methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.sm);
    });

    it('Global search event with saving', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md);
        methods.scrollWithXpath(locators.Account_Pagetitle);
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts');
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.account_pageloaded);
        methods.clickElementByXPath(locators.global_Search);
        methods.VisibilityofElementXpath(locators.global_Popup);
        methods.ClickandType(locators.Search_or_jump, 'New Event Report');
        methods.clickElementByXPath(locators.Create_New_Event_Report);
        methods.VisibilityofElementXpath(locators.EVENTS)
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.Add_First_Event);
        methods.clickElement(locators.Hubspot_Contacts);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        methods.clickElementByXPath(locators.Add_another_event);
        methods.clickElement(locators.HubspotDeals);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Run_Analysis1);
        methods.VisibilityofElement(locators.Profile_report_gen);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Save_1);
        cy.wait(Timeout.sm);
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1);
        cy.wait(Timeout.xs);
        methods.VisibilityofElement(locators.Profile_report_gen);
        methods.clickElementByXPath(locators.Closed);
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.wait(Timeout.sm);
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.Add_New_Breakdown_new)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.close_2)
        methods.VisibilityofElement(locators.Upgrade_validation);
        methods.clickElementByXPath(locators.Close_without_saving);
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        cy.wait(Timeout.xs);
        methods.clickElementByXPath(locators.View_Report)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Add_another_event);
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.pageview_option1);
        methods.clickElementByXPath(locators.Run_Analysis1);
        methods.VisibilityofElement(locators.Profile_report_gen)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.MouseoverWithXpath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
    });
})