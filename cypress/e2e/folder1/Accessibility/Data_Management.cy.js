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
      cy.xpath(`//span[text()="Data Management"]//following::span[@class="ant-menu-title-content"][${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.lg);
      cy.wait(Timeout.xs)
      methods.UrlValidationset(item.url)
      methods.VisibilityofElementXpath(locators.DataManagementHeader)
      methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)

    });

  });

  it('Touchpoints Definitions', () => {

    [
      { key: 'UTM Parameters', index: 1, url: 'data-management/touchpoint-definition/utm-parameters' },
      { key: 'Campaign Groups', index: 2, url: 'data-management/touchpoint-definition/campaign-group' },
      { key: 'Channel Groups', index: 3, url: 'data-management/touchpoint-definition/channel-group' },
      { key: 'Content Groups', index: 4, url: 'data-management/touchpoint-definition/content-group' },
      { key: 'Email tracking', index: 5, url: 'data-management/touchpoint-definition/email-tracking' },
      { key: 'Hubspot', index: 6, url: 'data-management/touchpoint-definition/hubspot' },
      { key: 'Salesforce', index: 7, url: 'data-management/touchpoint-definition/salesforce' },

    ].map((item) => {

      cy.wait(Timeout.sm)
      methods.clickElement(locators.setting)
      methods.clickElementByXPath(locators.Touchpoints)
      cy.xpath(`//*[text()="Touchpoints Definitions"]//following::ul/li[${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElementXpath(locators.DataManagementHeader)
      methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)

    });

  });

  it('Custom Definitions', () => {

    [
      { key: 'Custom KPIs', index: 1, url: 'data-management/custom-definition/kpi' },
      { key: 'Custom Events', index: 2, url: 'data-management/custom-definition/event' },
      { key: 'Property Mapping', index: 3, url: 'data-management/custom-definition/property-mapping' },

    ].map((item) => {

      cy.wait(Timeout.sm)
      methods.clickElement(locators.setting)
      methods.clickElementByXPath(locators.Custom_Definitions_1)
      cy.xpath(`//*[text()="Custom Definitions"]//following::ul/li[${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElementXpath(locators.DataManagementHeader)
      methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)

    });

  });

  it('Account Configurations', () => {

    [
      { key: 'Engagement Scoring', index: 1, url: 'data-management/account-configuration/engagement-scoring' },
      { key: 'Interest Groups', index: 3, url: 'data-management/account-configuration/interest-groups' },
      { key: 'Milestones', index: 4, url: 'data-management/account-configuration/journeys' },
      { key: 'Predictive Scoring', index: 5, url: 'data-management/account-configuration/predictive-score' },
      { key: 'Research Intent', index: 6, url: 'data-management/account-configuration/research-intent' },
      { key: 'Intent Upload', index: 7, url: 'data-management/account-configuration/intent-upload' },

    ].map((item) => {

      cy.wait(Timeout.sm)
      methods.clickElement(locators.setting)
      methods.clickElementByXPath(locators.Account_Configurations_1)
      cy.xpath(`//*[text()="Account Configurations"]//following::ul/li[${item.index}]`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElementXpath(locators.DataManagementHeader)
      methods.Titletextcontainsxpath(locators.DataManagementHeader, item.key)

    });

  });

})