import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

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

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.search_button)
    methods.typeElementByXPath(locators.search_area, 'accenture.com')
    methods.EnterXpath(locators.search_area)
    methods.clickElementByXPath(locators.Open_Accenture_Acc)
    methods.VisibilityofElementXpath(locators.Time_line_Validation)
    methods.scrollWithXpath(locators.Details)
    methods.clickElementByXPath(locators.Details)
    methods.VisibilityofElement(locators.Page_view_validation)
    cy.wait(Timeout.md)

    // Select Event properties[one filter]

    methods.clickElementByXPath(locators.Event_Properties)

    cy.xpath(`(//span[text()="Event Properties"]//following::div/h4[1])[last()]`)
      .invoke('text')
      .then((Property) => {
        let Event_property = Property.trim();
        cy.log(`**Property name: ${Event_property}**`);

        methods.clickElementByXPath(locators.Event_Add_Property)
        methods.typeElement(locators.select_property, Event_property)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.assertElementContainsText(locators.Popup_Message, "Property Already Exists")
        methods.clickElementByXPath(locators.Event_Add_Property)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()="${Event_property}"]//following::button[1]`)
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