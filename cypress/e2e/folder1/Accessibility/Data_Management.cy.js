import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';

describe('Data Management Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Data Management', () => {


    //config dropdown and pages accessibility check 

    [
      { key: 'Integrations', index: 1, url: 'data-management/integration' },
      { key: 'Attribution', index: 4, url: 'attribution' },

    ].map((item) => {

      cy.wait(Timeout.sm)
      methods.clickElement(locators.setting)
      methods.clickElementByXPath(locators.Data_Management)
      cy.xpath(`//span[text()="Data Management"]//following::span[@class="ant-menu-title-content"][${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElement(locators.Page_title)
      methods.Titletextcontains(locators.Page_title, item.key)

    });

    cy.wait(Timeout.sm)
    methods.clickElement(locators.Page_title)
    cy.wait(Timeout.sm);
    methods.clickElementIndexXpath(locators.Attribution, 0)
    methods.UrlValidationset('attribution')
    methods.VisibilityofElement(locators.Page_title)
    methods.Titletextcontains(locators.Page_title, 'Attribution')

  });

})