import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout} from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

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
            { key: 'General', index: 1, url: 'general' },
            { key: 'Members', index: 2, url: 'members' },
            { key: 'Plans & Billing', index: 3, url: 'pricing?activeTab=billing' },
            { key: 'Sharing', index: 4, url: 'project/sharing?activeTab=1' },
            { key: 'Login and Security', index: 5, url: 'login_security' },

        ].map((item) => {
            cy.wait(Timeout.sm);
            methods.clickElement(locators.setting)
            cy.xpath(`//h4[text()="Project Settings"]//following::h4[${item.index}]`).click({ force: true });
            cy.wait(Timeout.xs)
            methods.UrlValidationset(item.url)
            methods.Titletextcontains1(locators.Page_title, 0, item.key)
        });
    });


})