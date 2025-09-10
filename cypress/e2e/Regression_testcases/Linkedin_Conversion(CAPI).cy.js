import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';
import Login1 from '../PageObjects/Login1.js';

describe('Linkedin_Conversion(CAPI) Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })
    it('Linkedin_Conversion(CAPI)', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `New linkedin workflow ${nowTime}`;
        const testName1 = `New linkedin workflow ${nowTime}_1`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.LinkedInCAPI)
        methods.VisibilityofElementXpath(locators.LinkedInCAPITitle)
        methods.clickElementByXPath(locators.SyncNewConversion_Btn)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.SelectConversionEvent)
        methods.VisibilityofElement(locators.Slack_Channel_List)
        methods.typeElementByXPath(locators.SelectConversionEvent, "test c")
        methods.clickElementByXPath(locators.test_capi)
        methods.ClickandTypeXpath(locators.First_Name, "first_n")
        methods.clickElement(locators.first_name1)
        methods.ClickandTypeXpath(locators.Last_Name, "last_n")
        methods.clickElement(locators.last_name)
        methods.ClickandTypeXpath(locators.Job_Tittle, "Enrichment")
        methods.clickElement(locators.Enrichment_Source1)
        methods.ClickandTypeXpath(locators.Company_Name, "project_n")
        methods.clickElement(locators.project_name_opt)
        methods.ClickandTypeXpath(locators.Country_Code, "Iso")
        methods.clickElement(locators.IsoCode1)
        methods.clickElementByXPath(locators.edit_Icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`(//h4[text()='${testName}'])[1]`)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//h4[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement(locators.others)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`(//h4[text()='${testName1}']//following::button[1])[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.linkedin_refresh_icon)
        cy.wait(Timeout.sm)

    });

});