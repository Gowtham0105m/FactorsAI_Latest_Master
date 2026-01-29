import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Accounts Page Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Accounts Page', () => {

        //Accounts screen
        [
            { key: 'All Accounts', index: 1, url: '/' },
            { key: 'All People', index: 2, url: '/profiles/people?segmentId=All' },
        ].map((item) => {
            cy.wait(Timeout.sm)
            methods.clickElement(locators.account_dropdown)
            cy.xpath(`(//li//h4)[${item.index}]`).click({ force: true });
            cy.wait(Timeout.xs)
            methods.navigateToUrl(item.url)
            cy.wait(Timeout.md)
            methods.scrollWithXpath(locators.Title_page)
            methods.VisibilityofElementXpath(locators.Title_page)
            methods.assertElementContainsTextxpath(locators.Title_page, item.key)
        })

        cy.wait(Timeout.sm)
        methods.clickElement(locators.account_dropdown)
        cy.xpath(`(//li//h4)[3]`).click({ force: true });
        cy.wait(Timeout.xs)
        methods.navigateToUrl('/reports/visitor_report')
        cy.wait(Timeout.md)
        methods.scroll(locators.Page_title1)
        methods.VisibilityofElement(locators.Page_title1)
        methods.assertElementContainsText(locators.Page_title1, 'Top accounts that visited your website')

        cy.wait(Timeout.sm)
        methods.clickElement(locators.account_dropdown)
        cy.xpath(`(//li//h4)[1]`).click({ force: true });
        cy.wait(Timeout.xs)
        methods.navigateToUrl("/")
        methods.scrollWithXpath(locators.SegmentTitle)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.assertElementContainsTextxpath(locators.SegmentTitle, "All Accounts")

    });
})