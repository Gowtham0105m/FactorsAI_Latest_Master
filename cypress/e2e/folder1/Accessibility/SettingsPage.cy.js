import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Settings Page Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Settings Page', () => {

        //settings dropdown and pages accessibility check 

        [
            { key: 'General', index: 1, url: 'project/general' },
            { key: 'Members', index: 2, url: 'project/members' },
            { key: 'Plans & Billing', index: 4, url: 'project/plans/billing' },
            { key: 'Login and Security', index: 6, url: 'project/login-security' },


        ].map((item) => {
            cy.wait(Timeout.sm);
            methods.clickElement(locators.setting)
            methods.clickElementByXPath(locators.Project_Settings)
            cy.xpath(`//span[text()="Project Settings"]//following::span[@class="ant-menu-title-content"][${item.index}]`).click({ force: true });
            cy.wait(Timeout.xs)
            methods.UrlValidationset(item.url)
            methods.Titletextcontains1(locators.Page_title, 0, item.key)
            cy.wait(Timeout.md)

        });

        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Page_title)
        methods.clickElementByXPath(locators.Plans_Billing)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Plans_Billing)

    });
})