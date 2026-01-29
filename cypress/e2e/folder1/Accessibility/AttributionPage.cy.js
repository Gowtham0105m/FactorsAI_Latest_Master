import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Attribution Page Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Attribution Page', () => {

        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(Timeout.xs);
        methods.UrlValidation('/attribution')
        methods.VisibilityofElement(locators.Page_title1)
        methods.Titletextcontains(locators.Page_title1, 'Attribution')
    });
})