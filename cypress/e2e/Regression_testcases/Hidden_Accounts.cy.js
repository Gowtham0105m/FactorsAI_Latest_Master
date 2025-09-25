import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Hidden Accounts', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it.only('Hidden Accounts', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)

        // select Hidden account

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        methods.clickElementByXPath(locators.Checkbox)
        methods.VisibilityofElementXpath(locators.Hide)
        methods.clickElementByXPath(locators.Hide)
        methods.GetText(locators.MovedSuccessfull_popup, "Selected accounts have been moved to the hidden list")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.NotExistxpath(locators.factors_File)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AllAccount_ActionBtn);
        methods.clickElementByXPath(locators.Show_hidden_accounts);
        cy.wait(Timeout.xs);
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Hide_hidden_accounts);
        methods.NotExistxpath(locators.factors_File)
        methods.clickElementByXPath(locators.AllAccount_ActionBtn);
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        // methods.CompareScreenShot('Configurations')
        methods.VisibilityofElementXpath(locators.panel_engagementScoring)
        methods.clickElementByXPath(locators.Hidden_Accounts)
        methods.VisibilityofElementXpath(locators.panel_hiddenAccounts)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'trackdfect.com')
        methods.clickElementByXPath(locators.Checkbox)
        methods.clickElementByXPath(locators.Unhide)
        methods.assertElementContainsText(locators.Upgrade_validation, 'Are you sure you want to remove these accounts from the hidden list?')
        methods.clickElementByXPath(locators.Unhide_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.NotExistxpath(locators.organic_table1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.Mouseover(locators.account_dropdown);
        methods.clickElementByXPath(locators.Account)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.reload()
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.xs)

    })

    it('Hidden Accounts - Popup link', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)

        // select Hidden account

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        methods.clickElementByXPath(locators.Checkbox)
        methods.VisibilityofElementXpath(locators.Hide)
        methods.clickElementByXPath(locators.Hide)
        methods.GetText(locators.MovedSuccessfull_popup, "Selected accounts have been moved to the hidden list")
        methods.clickElementByXPath(locators.ViewHiddenAccounts_Link);
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.panel_hiddenAccounts)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'trackdfect.com')
        methods.clickElementByXPath(locators.Checkbox)
        methods.clickElementByXPath(locators.Unhide)
        methods.assertElementContainsText(locators.Upgrade_validation, 'Are you sure you want to remove these accounts from the hidden list?')
        methods.clickElementByXPath(locators.Unhide_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.NotExistxpath(locators.organic_table1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.Mouseover(locators.account_dropdown);
        methods.clickElementByXPath(locators.Account)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.reload()
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.xs)

    })
})