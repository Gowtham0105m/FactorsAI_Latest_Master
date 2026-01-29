import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Account Identification Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Account Identification', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        methods.UrlValidationAccide()
        methods.Titletextcontains(locators.Page_title1, 'Top accounts that visited your website')
        methods.VisibilityofElement(locators.Identification_Table)

        // Verify table

        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmptyWithXpath(locators.table_row1)
        methods.AssertNotEmptyWithXpath(locators.table_row2)

        // Apply filter for orgnaic search

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.Organic_Search)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'Organic Search')
        methods.assertElementContainsTextxpath(locators.organic_table2, 'Organic Search')
        methods.assertElementContainsTextxpath(locators.organic_table3, 'Organic Search')

        // Apply filter for Direct

        cy.wait(Timeout.xs)
        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.direct)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'Direct')
        methods.assertElementContainsTextxpath(locators.organic_table2, 'Direct')
        methods.assertElementContainsTextxpath(locators.organic_table3, 'Direct')

        // Apply filter for Paid Social

        cy.wait(Timeout.xs)
        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.paid_search)
        methods.assertElementContainsTextxpath(locators.organic_table1, 'Paid Search')
        methods.assertElementContainsTextxpath(locators.organic_table2, 'Paid Search')
        methods.assertElementContainsTextxpath(locators.organic_table3, 'Paid Search')

        // Apply campaign filter

        cy.wait(Timeout.xs)
        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_Remarketing_Competitors)
        methods.clickElement(locators.Apply)
        methods.AssertNotEmpty(locators.identi_table)
        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_US_Deanon_Competition)
        methods.clickElement(locators.Apply)

        // Apply page view 

        cy.wait(Timeout.xs)
        methods.clickElement(locators.page_view)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.pageview_option4)
        methods.clickElement(locators.Apply)
        methods.VisibilityofElement(locators.identi_table1)

        // Selete date

        methods.clickElementByXPath(locators.calender)
        methods.clickElement(locators.Last_7_Days)
        methods.VisibilityofElement(locators.identi_table1)
        methods.ElementXpathAttrCheck(locators.ShareBtn, "disabled")
        methods.clickElementByXPath(locators.calender)
        methods.clickElementByXPath(locators.select_date)
        methods.VisibilityofElement(locators.identi_table1)
        methods.ElementXpathAttrCheckNot(locators.ShareBtn, "disabled")

        // Share

        methods.clickElementByXPath(locators.share1)
        methods.clickElementByXPath(locators.copy_Link)
        cy.wait(Timeout.xs)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElement(locators.done)
        methods.VisibilityofElement1(locators.notification_popup, "Emails added to subscription list")

        // clear the filter

        methods.clickElement(locators.campaign)
        
        cy.get('.fa-select-group-select--options').click({ multiple: true })
        methods.clickElement0(locators.Apply, 0)
        methods.clickElement(locators.page_view)
        methods.clickElementByXPath(locators.clear)
        methods.clickElement0(locators.Apply, 0)

        // Search

        methods.clickElementByXPath(locators.search)
        methods.typeElement(locators.search_1, 'klenty')
        methods.assertElementContainsTextxpath(locators.Klenty_details, 'Klenty')
        methods.clickElementByXPath(locators.X_button)

        // download

        methods.clickElementByXPath(locators.download)
        cy.wait(Timeout.xs)

    })
})