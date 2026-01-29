import userDetails1 from '../../../fixtures/userDetails1.json';
import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport } from '../../Utils.js';
import methods from '../../../support/Common_Method.js'
import locators from '../../../support/Locators.js'

describe('Login Page Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    })

    it('Login Page - Success', () => {

        Login1();

        //checking if Login is success

        methods.launchUrl()

        //Displays logged in user details
        methods.VisibilityofElement(locators.usermail)
        methods.VisibilityofElement1(locators.usermail, userDetails1.email)
        
        //landing in default screen - All account
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.VisibilityofElementXpath(locators.Account_Pagetitle)
        methods.VisibilityofElementXpath(locators.Account_Pagetitle, 'All Accounts')
    });
})