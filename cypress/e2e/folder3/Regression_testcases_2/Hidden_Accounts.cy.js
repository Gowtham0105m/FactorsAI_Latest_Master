import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Hidden Accounts', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Hidden Accounts', () => {
        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)
        methods.MouseoverWithXpath(locators.Automation)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflows_Title)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.workflows_Title, 2)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.xs);
        methods.clickElementIndexXpath(locators.Account, 1);
        cy.wait(Timeout.xl);
        cy.wait(Timeout.xl);
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xmd)

        // select Hidden account

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
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.NotExistxpath(locators.factors_File)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.AllAccount_ActionBtn, 1);
        methods.clickElementByXPath(locators.Show_hidden_accounts);
        cy.wait(Timeout.md);
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Hide_hidden_accounts);
        methods.NotExistxpath(locators.factors_File)
        methods.clickElementIndexXpath(locators.AllAccount_ActionBtn, 1);
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Hidden_Accounts1)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.md)
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
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.NotExistxpath(locators.organic_table1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.Account, 1)
        cy.wait(Timeout.xl)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.reload();
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.search_button)
        cy.wait(Timeout.xs)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.sm)

    })

    it('Hidden Accounts - Popup link', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.xmd)
        methods.MouseoverWithXpath(locators.Automation)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.workflows_Title)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpathIndexInput(locators.workflows_Title, 2)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.xs);
        methods.clickElementIndexXpath(locators.Account, 1);
        cy.wait(Timeout.xl);
        cy.wait(Timeout.xl);
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.xmd)

        // select Hidden account

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
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        methods.clickElementByXPath(locators.Checkbox)
        methods.VisibilityofElementXpath(locators.Hide)
        methods.clickElementByXPath(locators.Hide)
        methods.GetText(locators.MovedSuccessfull_popup, "Selected accounts have been moved to the hidden list")
        methods.clickElementByXPath(locators.ViewHiddenAccounts_Link);
        methods.clickElement(locators.Moved_To_HiddenAccounts_Close)
        cy.wait(Timeout.xs)
        cy.wait(Timeout.sm)
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
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        cy.wait(Timeout.md)
        methods.NotExistxpath(locators.organic_table1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.clear_search)
        cy.wait(Timeout.xs)
        methods.Mouseover(locators.account_dropdown);
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.Account, 1)
        cy.wait(Timeout.xl)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.reload();
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.search_button)
        cy.wait(Timeout.xs)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.factors_File, 'trackdfect.com')
        cy.wait(Timeout.sm)

    })

})