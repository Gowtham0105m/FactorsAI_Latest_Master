import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Predictive Scoring Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Predictive Scoring', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Predictive Score Demo ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElementXpath(locators.Newprediction)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Predictive Score Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//h4[contains(text(),"Predictive Score Demo")]//following::button[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Journey_Delete)
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.Newprediction)
        methods.VisibilityofElementXpath(locators.Predictionrule_Title)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElement(locators.Company_Created_title)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//h4[text()="${testName}"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");

    })

    it.only('Predictive Scoring - Clone', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Predictive Score Demo ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElementXpath(locators.Newprediction)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//h4[contains(text(),"Predictive Score Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//h4[contains(text(),"Predictive Score Demo")]//following::button[1]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Journey_Delete)
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.Newprediction)
        methods.VisibilityofElementXpath(locators.Predictionrule_Title)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElement(locators.Company_Created_title)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//h4[text()="${testName}"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Clone)
        methods.AssertNotEmptyWithXpath(locators.SegmentTitle , `${testName} (Copy)`)
        methods.clickElementByXPath(locators.PS_Add_Filter)
        methods.clickElement(locators.Hubspot_Contacts)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//h4[text()="${testName} (Copy)"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()="${testName} (Copy)"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//h4[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");

    })
})