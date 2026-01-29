import Login1 from '../../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Account Identification Regression', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();


    })

    it('TC_RE_01, TC_RE_02 - Account Identification ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)

        // Verify table

        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)
        methods.AssertNotEmptyWithXpath(locators.table_row2)

    })

    it('TC_RE_03 - Account Identification - Add filters ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)
        methods.AssertNotEmptyWithXpath(locators.table_row2)
        cy.wait(Timeout.xs)

        // add direct filter 

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.direct)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'Direct')
        methods.assertElementContainsTextxpath(locators.organic_table2, 'Direct')
        methods.assertElementContainsTextxpath(locators.organic_table3, 'Direct')

        // add Paid search filter 

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.paid_search)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'Paid Search')
        methods.assertElementContainsTextxpath(locators.organic_table2, 'Paid Search')
        methods.assertElementContainsTextxpath(locators.organic_table3, 'Paid Search')
    })

    it('TC_RE_04 - Account Identification - Add campaign', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)

        // add campaign

        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_Remarketing_Competitors)
        methods.clickElement(locators.Apply)
        methods.AssertNotEmpty(locators.identi_table)
        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_US_Deanon_Competition)
        methods.clickElement(locators.Apply)
    })

    it('TC_RE_05 - Account Identification - Page viewed', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)

        // add Page viewed

        methods.clickElement(locators.page_view)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.pageview_option4)
        methods.clickElement(locators.Apply)
        methods.VisibilityofElement(locators.identi_table1)
    })

    it('TC_RE_06 - Account Identification - Search field', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)

        methods.clickElementByXPath(locators.search)
        methods.typeElement(locators.search_1, 'klenty')
        methods.Enter(locators.search_1)
        methods.assertElementContainsTextxpath(locators.Klenty_details, 'Klenty')
        methods.clickElementByXPath(locators.X_button)
    })

    it('TC_RE_07 - Account Identification - Download CSV', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)
        methods.clickElementByXPath(locators.download)

    })

    it('TC_RE_08 - Account Identification - Date range', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)
        methods.clickElementByXPath(locators.calender)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.select_date)
        methods.VisibilityofElement(locators.identi_table1)
        methods.AssertNotEmpty(locators.identi_table)
    })

    it('TC_RE_09 - Account Identification - Share_Send Once', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1);
        methods.clickElementByXPath(locators.share1)
        methods.clickElement(locators.Send_Once)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)
    })

    it('TC_RE_10 - Account Identification - Share_Subscribe copy link', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.Titletextcontainsxpath(locators.account_identification_Title, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1);
        methods.clickElementByXPath(locators.share1)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElementByXPath(locators.copy_Link)
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)

    })
})