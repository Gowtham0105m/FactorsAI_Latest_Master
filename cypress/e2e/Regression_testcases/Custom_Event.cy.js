import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Custom Event Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Custom Event -- Any change in property - Record modified time', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Custom Event ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event)
        methods.assertElementContainsText(locators.Event_Title, 'New Custom Event')
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, "Automation Testing")
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot1)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Deal)
        methods.ScrollAndClick(locators.Property_name)
        methods.clickElementByXPath(locators.property_name_list_selection)
        methods.clickElementByXPath(locators.Record_modified_time)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event Added!")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.View_Event)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.Event_DisplayName, testName)
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event removed!")
        cy.wait(Timeout.xs)
    })

    it('Custom Event -- Any change in property - Select a property', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Custom Event ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event)
        methods.assertElementContainsText(locators.Event_Title, 'New Custom Event')
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, "Automation Testing")
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot1)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Deal)
        methods.ScrollAndClick(locators.Property_name)
        methods.clickElementByXPath(locators.property_name_list_selection)
        methods.clickElementByXPath(locators.Event_Select_a_property)
        methods.clickElement(locators.datetime_objProperty)
        methods.clickElementIndexXpath(locators.datetime_objProperty_list, 1)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event Added!")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.View_Event)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.Event_DisplayName, testName)
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event removed!")
        cy.wait(Timeout.xs)
    })

    it('Custom Event -- Specific change in property - Record modified time', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Custom Event ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event)
        methods.assertElementContainsText(locators.Event_Title, 'New Custom Event')
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, "Automation Testing")
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot1)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Deal)
        methods.clickElementByXPath(locators.Event_Specific_change_in_property)
        methods.ScrollAndClick(locators.Property_name)
        methods.clickElementByXPath(locators.property_name_list_selection)
        methods.clickElementByXPath(locators.Record_modified_time)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event Added!")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.View_Event)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.Event_DisplayName, testName)
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event removed!")
        cy.wait(Timeout.xs)
    })

    it('Custom Event -- Specific change in property - Select a property', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Custom Event ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event)
        methods.assertElementContainsText(locators.Event_Title, 'New Custom Event')
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, "Automation Testing")
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot1)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Deal)
        methods.clickElementByXPath(locators.Event_Specific_change_in_property)
        methods.ScrollAndClick(locators.Property_name)
        methods.clickElementByXPath(locators.property_name_list_selection)
        methods.clickElementByXPath(locators.Event_Select_a_property)
        methods.clickElement(locators.datetime_objProperty)
        methods.clickElementIndexXpath(locators.datetime_objProperty_list, 1)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event Added!")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.View_Event)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.Event_DisplayName, testName)
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.assertElementContainsText(locators.Popup_Message, "Custom Event removed!")
        cy.wait(Timeout.xs)

    })
})