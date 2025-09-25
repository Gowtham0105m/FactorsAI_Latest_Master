import Login1 from "../PageObjects/Login1.js";
import { deviceViewport, Timeout } from "../Utils.js";
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Plans & Billing', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Plans & Billing', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.plans_billing)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Plans_Billing2)
        methods.CompareScreenShot('PlansBilling')
        methods.scrollWithXpath(locators.Plans_Billing2)

    })

})