import Login1 from "../PageObjects/Login1.js";
import { deviceViewport, Timeout } from "../Utils.js";
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('My Projects', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('My Projects', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        cy.wait(Timeout.xs)
        


    })

})