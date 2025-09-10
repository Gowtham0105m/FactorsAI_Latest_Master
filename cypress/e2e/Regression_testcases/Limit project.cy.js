import Login2 from '../PageObjects/Login2';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Limit Project', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login2();

    })

    it.skip('Upgrading the limit for all the add on  - Basics', () => {

        const userName = "test 12345"
        cy.wait(Timeout.xl)
        methods.clickElementByXPath(locators.user_name)
        cy.wait(Timeout.lg)
        cy.xpath('//h4[text()="Kamali k"]//following::h4[1]').invoke('text')
            .then((firstText) => {

                if (firstText.trim() === userName) {
                    methods.clickElement1(locators.setting)
                } else {

                    methods.clickElementByXPath(locators.project_name1)
                    methods.clickElementByXPath(locators.project_name);
                    methods.clickElementByXPath(locators.switch)
                    methods.clickElement1(locators.setting)
                }

            })
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.plans_billing)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Upgrade)
        methods.clickElementByXPath(locators.Basic_add_btn)
        cy.wait(Timeout.sm)
        cy.visit('https://factors-test.chargebee.com', { args: { Timeout } }, ({ Timeout }) => {
            methods.clickElementByXPath(locators.Qty)
            methods.clickElementByXPath(locators.Qty_value)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.Qty1)
            methods.clickElementByXPath(locators.Qty_value1)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.Qty2)
            methods.clickElementByXPath(locators.Qty_value2)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.Qty3)
            methods.clickElementByXPath(locators.Qty_value3)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.Qty4)
            methods.clickElementByXPath(locators.Qty_value4)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.proceed_to_checkout)
            cy.wait(Timeout.sm)
            methods.clickElementByXPath(locators.subscribe)
        })
    })

    it.skip('4 Upgrading the limit for all the add on  - Growth', () => {

        methods.clickElementByXPath(locators.segment_used)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.plans_billing)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Upgrade)
        methods.clickElementByXPath(locators.Growth_add_btn)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Qty)
        methods.clickElementByXPath(locators.Qty_value)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.proceed_to_checkout)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.subscribe)
    })
});