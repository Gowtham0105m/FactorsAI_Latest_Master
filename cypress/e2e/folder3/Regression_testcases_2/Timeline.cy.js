import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Timeline Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Account Timeline -- User Properties and Event Properties', () => {

    cy.wait(Timeout.ml)
    methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
    cy.wait(Timeout.ml)
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    cy.wait(Timeout.md)
    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`(//*[text()="All segments"])[1]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (!demoElement || demoElement.offsetParent === null) {
        cy.log("**All Segment not loaded**");
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.People);
        cy.wait(Timeout.xs);
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.sm);
        methods.clickElementIndexXpath(locators.Account, 1);
        cy.wait(Timeout.xs);
      } else {
        cy.log("**All Segment has been loaded**");
      }
    });
    methods.clickElementByXPath(locators.search_button)
    cy.wait(Timeout.xs)
    methods.typeElementByXPath(locators.search_area, 'accenture.com')
    cy.wait(Timeout.xs)
    methods.EnterXpath(locators.search_area)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Open_Accenture_Acc)
    cy.wait(Timeout.md)
    methods.VisibilityofElementXpath(locators.Time_line_Validation)
    cy.wait(Timeout.sm)

    let found = false;

    for (let i = 0; i < 10; i++) {
      if (found) break;

      cy.document().then((doc) => {
        const el = doc.evaluate(locators.Details, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (el && el.offsetParent !== null) {
          cy.log('**Element is visible — clicking it**');
          found = true;
          methods.clickElementByXPath(locators.Details)
        } else {
          cy.log(`**Element not visible — scroll attempt ${i + 1}**`);
          cy.wait(Timeout.md)
          cy.get('.rc-virtual-list-holder').scrollTo(0, 500 * (i + 1), { ensureScrollable: false });
          cy.wait(500);
        }
      });
    }

    methods.VisibilityofElement(locators.Page_view_validation)

    // Select Event properties[one filter]

    methods.clickElementByXPath(locators.Event_Properties)

    cy.xpath(`(//span[text()="Event Properties"]//following::div[contains(@id,"panel-event")]//h6[1])[last()]`).invoke('text').then((Property) => {
      let Event_property = Property.trim();
      cy.log(`**Property name: ${Event_property}**`);

      methods.clickElementByXPath(locators.Event_Add_Property)
      methods.typeElement(locators.select_property, Event_property)
      cy.wait(Timeout.sm)
      methods.clickElementByXPath(locators.Filter_option1)
      methods.assertElementContainsText(locators.Popup_Message, "Property Already Exists")
      methods.clickElementByXPath(locators.Event_Add_Property)
      cy.wait(Timeout.sm)
      methods.clickElementByXPath(`//*[text()="${Event_property}"]//following::button[1]`)
      methods.assertElementContainsText(locators.Popup_Message, "Updated Event Properties Configuration")
      cy.wait(Timeout.sm)
      methods.clickElementByXPath(locators.Event_Add_Property)
      methods.ClearAndType(locators.select_property, Event_property)
      cy.wait(Timeout.sm)
      methods.clickElementByXPath(locators.Filter_option1)
      methods.assertElementContainsText(locators.Popup_Message, "Updated Event Properties Configuration")
      cy.wait(Timeout.sm)
    })
  })
})