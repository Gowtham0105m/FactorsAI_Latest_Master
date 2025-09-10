import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout} from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe.skip('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it.skip('Pricing', () => {

        // pricing

        cy.wait(Timeout.md)
        methods.clickElement(locators.setting)
        cy.wait(Timeout.sm)
       // methods.clickElementByXPath(locators.Pricing)
       cy.get('.flex-col > :nth-child(4)').click({force:true})
       cy.wait(Timeout.sm)

        // select upgrade plan

        methods.clickElement(locators.upgrade_plan)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.upgrade_title,'Upgrade to get more out of Factors')
        cy.wait(Timeout.sm)

        // buy a plan

        methods.scrollWithXpath(locators.Buy_this_Plan)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buy_this_Plan)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.VisibilityofElementXpath(locators.Continue)
        methods.clickElementByXPath(locators.Continue)
        cy.wait(Timeout.sm)

        // Payment gateway
        
        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click()
            cy.get('[id="first_name"]').clear().type('sonali');
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(Timeout.md)

        })

        // back to staging url

        methods.PricingURL()
        methods.VisibilityofElement(locators.Account_Pagetitle)

        // downgrading

        methods.clickElement(locators.upgrade_plan)
        methods.scrollWithXpath(locators.Buy_this_Plan)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Buy_this_Plan)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.Continue)
        cy.wait(Timeout.sm)

        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click();
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(Timeout.md)
        })

        methods.PricingURL()
        methods.VisibilityofElement(locators.Account_Pagetitle)

    })
})