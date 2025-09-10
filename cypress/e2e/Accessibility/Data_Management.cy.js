import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';

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
      { key: 'Integrations', index: 10, url: 'integration' },
      { key: 'Touchpoint Definitions', index: 11, url: 'touchpoint_definition?activeTab=utmParameters' },
      { key: 'Custom Definitions', index: 12, url: 'custom_definition?activeTab=customKPI' },
      { key: 'Account Configurations', index: 14, url: 'account_scoring?activeTab=engagementScoring' }

    ].map((item) => {

      cy.wait(Timeout.sm)
      methods.clickElement(locators.setting)
      cy.xpath(`//h4[text()="Project Settings"]//following::h4[${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElement(locators.Page_title)
      methods.Titletextcontains(locators.Page_title, item.key)

    });

    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Attribute_title)
    cy.wait(Timeout.sm);
    methods.UrlValidationset('attribution')
    methods.VisibilityofElement(locators.Page_title)
    methods.Titletextcontains(locators.Page_title, 'Attribution')

  });

})