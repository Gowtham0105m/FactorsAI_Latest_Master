import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Linkedin Audience sync login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();


    })

    it('Linkedin audience Sync', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `New audience sync ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        methods.clickElementByXPath(locators.LinkedIn_Audience_Sync1)
        methods.VisibilityofElementXpath(locators.LinkedInaudiencesync)
        cy.xpath('(//tbody/tr/td)[1]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text.trim()).as('Text1');
            });
        methods.clickElementByXPath(locators.SyncNewAudience)
        cy.wait(Timeout.md);
        methods.clickElementByXPath(locators.LinkedInAdAccountField)
        methods.clickElement(locators.LinkedInAdAccount)
        methods.clickElementByXPath(locators.select_factors_segment)
        methods.clickElementByXPath(locators.Engaged_linkedin)
        methods.clickElementByXPath(locators.select_audiences_linkedin)
        methods.typeElementByXPath(locators.select_audiences_linkedin, "Test audience | Third-party: Factors AI")
        methods.clickElementByXPath(locators.Testing_audience)
        methods.clickElementByXPath(locators.adpilot_editicon)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(locators.workflow_name, Text1);
        });
        methods.EnterXpath(locators.workflow_name)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup2, "Failed!Title already in use. Please provide a different title.")
        methods.clickElementByXPath(locators.adpilot_editicon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.linkedin_sync_status)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.linkedin_refresh_icon)
    })
})