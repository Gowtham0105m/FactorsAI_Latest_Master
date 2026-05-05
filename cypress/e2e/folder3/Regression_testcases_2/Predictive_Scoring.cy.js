import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

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

        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElement2(locators.DataManagementHeader, 'Predictive Scoring')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElementXpath(locators.Newprediction)

        cy.document().then((doc) => {

            const demoElements = doc.evaluate(`//*[contains(text(),"Predictive Score Demo")]`, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            if (demoElements.snapshotLength > 0) {

                for (let i = 0; i < demoElements.snapshotLength; i++) {

                    methods.clickElementByXPath(`(//*[contains(text(),"Predictive Score Demo")]//following::button[1])[1]`);
                    cy.wait(Timeout.sm);
                    methods.clickElementByXPath(locators.Journey_Delete);
                    methods.clickElementByXPath(locators.Yes);
                    methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
                    cy.wait(Timeout.xs);
                }

            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.Newprediction)
        methods.VisibilityofElementXpath(locators.Predictionrule_Title)
        methods.clickElementByXPath(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[text()="Untitled Prediction"]`, testName)
        methods.EnterXpath(`//textarea[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Event)
        methods.typeElement(locators.Select_Event, 'linkedin organic engagements')
        methods.clickElement(locators.Linkedin_Organic_Engagements)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText1(locators.DataManagementHeader, 'Predictive Scoring')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//*[text()="${testName}"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//*[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");

    })

    it('Predictive Scoring - Clone', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Predictive Score Demo ${randomNumber}`;

        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElement2(locators.DataManagementHeader, 'Predictive Scoring')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.PredictiveScoring)
        methods.VisibilityofElementXpath(locators.Newprediction)

        cy.document().then((doc) => {

            const demoElements = doc.evaluate(`//*[contains(text(),"Predictive Score Demo")]`, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            if (demoElements.snapshotLength > 0) {

                for (let i = 0; i < demoElements.snapshotLength; i++) {

                    methods.clickElementByXPath(`(//*[contains(text(),"Predictive Score Demo")]//following::button[1])[1]`);
                    cy.wait(Timeout.sm);
                    methods.clickElementByXPath(locators.Journey_Delete);
                    methods.clickElementByXPath(locators.Yes);
                    methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
                    cy.wait(Timeout.xs);
                }

            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.Newprediction)
        methods.VisibilityofElementXpath(locators.Predictionrule_Title)
        methods.clickElementByXPath(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[text()="Untitled Prediction"]`, testName)
        methods.EnterXpath(`//textarea[text()="${testName}"]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Event)
        methods.typeElement(locators.Select_Event, 'linkedin organic engagements')
        methods.clickElement(locators.Linkedin_Organic_Engagements)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText1(locators.DataManagementHeader, 'Predictive Scoring')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//*[text()="${testName}"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//*[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Clone)
        methods.AssertNotEmptyWithXpath(locators.SegmentTitle, `${testName} (Copy)`)
        methods.clickElementByXPath(locators.PS_Add_Filter)
        methods.typeElement(locators.search_1, 'contact pipeline')
        methods.clickElement(locators.Hubspot_Contact_Pipeline)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.not_Set)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Run_a_check)
        methods.assertElementContainsText(locators.notification_popup, 'Data check completed successfully')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buildmodel)
        methods.assertElementContainsText(locators.notification_popup, 'Rule Saved. Building Model.Prediction rule has been saved. Model is being built, come back in 3-4 hours to view results from test data and publish the model.')
        cy.wait(Timeout.sm)
        methods.assertElementContainsText1(locators.DataManagementHeader, 'Predictive Scoring')
        methods.VisibilityofElementXpath(locators.Newprediction)
        methods.assertElementContainsTextxpath(`//*[text()="${testName} (Copy)"]//following::td[3]`, 'Building')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//*[text()="${testName} (Copy)"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//*[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Journey_Delete)
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Predictive Score deleted successfully");

    })
})