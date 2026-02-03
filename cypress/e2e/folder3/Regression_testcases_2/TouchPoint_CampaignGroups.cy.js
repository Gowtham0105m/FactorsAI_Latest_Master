import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('TouchPoint Campaign Groups', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TouchPoint Campaign Groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Campaign_Groups)
        methods.Titletextcontains(locators.Page_title, "Campaign Groups")
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')
        methods.clickElementByXPath(locators.New_value_1)
        methods.assertElementContainsText(locators.Add_property_title, 'Add/Edit new value')
        methods.typeElement(locators.Value, 'Test')
        methods.clickElementByXPath(locators.New_Filter)
        methods.clickElementByXPath(locators.Select_Property_text)
        methods.clickElementByXPath(locators.Name_text)
        methods.typeElementByXPath(locators.Filtervalue, 'Test')
        methods.clickElement(locators.Add_property_title)
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_1)
        methods.assertElementContainsText(locators.notification_popup, "SuccessCustom Dimension rules created successfully")
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Property)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm_1)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted property successfully")
        cy.wait(Timeout.xs)

    })
})