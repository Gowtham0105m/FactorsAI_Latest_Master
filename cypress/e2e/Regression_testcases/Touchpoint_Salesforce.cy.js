import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('TouchPoint Salesforce Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TouchPoint Salesforce', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.Titletextcontains(locators.Page_title, "Touchpoint Definitions")
        methods.clickElementByXPath(locators.Salesforce)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElementXpath(locators.Createatouchpointusing)
        methods.clickElementByXPath(locators.Create_a_touchpoint_using_Contact)
        methods.clickElement(locators.Campaigns)
        methods.clickElementByXPath(locators.Add_Filter_1)
        methods.clickElement0(locators.others, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Type_Property)
        methods.clickElement(locators.offer)
        methods.clickElementByXPath(locators.Select_Source_Property)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Select_Campaign_Property)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.Select_Channel_Property)
        methods.clickElementByXPath(locators.pageview_option4)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.done)
        methods.clickElementByXPath(locators.Touchpoints_Metaball)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.delete)
        cy.wait(Timeout.xs)

    })

})