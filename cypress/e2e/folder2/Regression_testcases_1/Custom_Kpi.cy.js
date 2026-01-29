import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Custom Kpi Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Custom Kpi Default', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Custom Kpi Default ${randomNumber}`;


        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Custom_Definitions_1)
        methods.clickElementByXPath(locators.Custom_KPI)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')
        cy.wait(Timeout.sm)
        methods.VisibilityofElement2(locators.KPI_Type, 'Default')
        methods.clickElement(locators.Default)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.KPI_Category)
        methods.clickElement(locators.Hubspot_Deals1)
        methods.clickElementByXPath(locators.Function_1)
        methods.clickElement(locators.Unique)
        methods.clickElementByXPath(locators.Add_new2)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)
        methods.scrollWithXpath(locators.Date_Field)
        methods.ClickandTypeXpath(locators.Date_Field, 'create date')
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Create_Date)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.New_Custom_KPI)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.scrollWithXpath(`//h4[text()='${testName}']`)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })


    it('Custom Kpi Derived', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Custom Kpi Derived ${randomNumber}`;


        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Custom_Definitions_1)
        methods.clickElementByXPath(locators.Custom_KPI)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')
        methods.clickElement(locators.Default)
        methods.clickElement(locators.Derived_KPI)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Website_Session, 0)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Select_Event, 'tot')
        methods.clickElement(locators.Total_Session)
        cy.wait(Timeout.sm)
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

    it('Custom Kpi Event Based', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Custom Kpi Event${randomNumber}`;


        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Custom_Definitions_1)
        methods.clickElementByXPath(locators.Custom_KPI)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')
        methods.clickElement(locators.Default)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Event_Based)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.select_event_1)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Hubspot_Companies)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_1)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElement(locators.Function)
        methods.clickElement(locators.Unique)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElement0(locators.Time_of_Occurrence, 0)
        methods.typeElement(locators.search_1, 'Day')
        methods.clickElement(locators.Day_of_Occurrence)
        methods.clickElement(locators.equals_1)
        methods.clickElementByXPath(locators.not_Set)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup2)
        methods.scrollWithXpath(`//h4[text()='${testName}']`)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })

    it('Custom Kpi Time Period Based', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Custom Kpi Time${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Custom_Definitions_1)
        methods.clickElementByXPath(locators.Custom_KPI)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.description, 'Testing Purpose')
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Default)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Time_Period_Based)
        methods.clickElement(locators.KPI_Category)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Hubspot_Contacts1)
        methods.clickElement(locators.KPI_Function)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Average)
        methods.clickElementByXPath(locators.Add_new2)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.not_Set)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Date_Field)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.First_Seen_Date)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add)
        methods.clickElement(locators.First_Seen_Date)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Date_Field)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.First_Seen_Date1)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.New_Custom_KPI)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup2)
        methods.scrollWithXpath(`//h4[text()='${testName}']`)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })



})