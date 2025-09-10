import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Custom Kpi Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Custom Kpi', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo Custom Kpi${randomNumber}`;


        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')

        methods.clickElement(locators.Default)
        methods.clickElement(locators.Derived_KPI)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Website_Session, 0)
        methods.typeElement(locators.Select_Event, 'tot')
        methods.clickElement(locators.Total_Session)
        methods.clickElementByXPath(locators.Add_another_KPI)
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.KPI_option_1)

        methods.typeElement(locators.Formula, 'A+B')
        methods.clickElement(locators.showAspercentage)

        methods.scroll(locators.done)
        methods.clickElement(locators.done)

        methods.VisibilityofElement(locators.notification_popup)
        methods.scrollWithXpath(`//h4[text()='${testName}']`)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })
})