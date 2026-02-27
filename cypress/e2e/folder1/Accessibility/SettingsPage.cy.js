import Login1 from '../../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';
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
            { key: 'Members', index: 2, url: 'project/members?activeTab=users' },
            { key: 'Plans & Billing', index: 4, url: 'project/plans/billing' },
            { key: 'Login and Security', index: 6, url: 'project/login-security' },


        ].map((item) => {
            cy.wait(Timeout.sm);
            methods.clickElement(locators.setting)
            methods.clickElementByXPath(locators.Project_Settings)
            cy.xpath(`//span[text()="Project Settings"]//following::span[@class="ant-menu-title-content"][${item.index}]`).click({ force: true });
            cy.wait(Timeout.xs)
            methods.UrlValidationset(item.url)
            methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)
            cy.wait(Timeout.md)

        });

    });

    it('Sharing', () => {

        [
            { key: 'Sharing', index: 1, url: 'project/sharing/segment-digest' },

        ].map((item) => {

            cy.wait(Timeout.sm)
            methods.clickElement(locators.setting)
            methods.clickElementByXPath(locators.Sharing)
            cy.xpath(`(//*[text()="Sharing"]//following::ul/li)[1][${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
            cy.wait(Timeout.xs);
            methods.UrlValidationset(item.url)
            methods.VisibilityofElementXpath(locators.DataManagementHeader)
            methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)

        });

    });

})