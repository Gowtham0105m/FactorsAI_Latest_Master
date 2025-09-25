import Login1 from "../PageObjects/Login1.js";
import { deviceViewport, Timeout } from "../Utils.js";
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Login & Security', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();
    })

    it('Login & Security', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Login_Security)
        cy.wait(Timeout.xs)
        methods.CompareScreenShot('Login Security')
        methods.clickElementByXPath(locators.Login_Security_1)

    })
})