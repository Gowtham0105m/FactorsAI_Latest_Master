import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Journeys Page Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Path Analysis and Explain Page', () => {

    //Journey screen
    [
      { key: 'Path Analysis', index: 2, url: 'path-analysis' },
      { key: 'Explain', index: 3, url: 'explain' },
    ].map((item) => {
      cy.wait(Timeout.sm)
      methods.Mouseover(locators.report_dropdown)
      cy.wait(Timeout.xs)
      cy.xpath(`(//ul)[2]/li[${item.index}]/span/a`, { timeout: extraTimeOut }).click({ force: true });
      cy.wait(Timeout.xs);
      methods.navigateToUrljour(item.url)
      methods.VisibilityofElement(locators.Page_title1)
      methods.VisibilityofElement(locators.Page_title1, item.key)
    })
  });
})