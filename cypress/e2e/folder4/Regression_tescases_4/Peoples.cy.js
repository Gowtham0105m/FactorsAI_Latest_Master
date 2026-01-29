import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Peoples Regression', () => {

    beforeEach(() => {


        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Peoples_Page Load', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.xs)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

    })

    it('TC_RE_02, TC_RE_03 - Peoples_Page filter', () => {
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.xs)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Filter)
        methods.VisibilityofElement(locators.Open_Filter)
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Website_activity, 0)
        methods.clickElement(locators.Website_Session)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        methods.VisibilityofElement(locators.Open_Filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })

    it.skip('TC_RE_04 - Peoples_Filter clear', () => {
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        cy.wait(Timeout.xl)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_filter1)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_event1)
        methods.clickElementByXPath(locators.Apply_filter)
        methods.VisibilityofElement(locators.Open_Filter)
        cy.wait(Timeout.lg)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.lg)
        methods.clickElement(locators.view_filter)
        methods.clickElementByXPath(locators.Clear_All_Filter)
        methods.clickElement('.justify-center > span')
    })

    it.skip('TC_RE_05 - Peoples_discard changes', () => {

        cy.wait(Timeout.xl)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_filter1)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.not_Set)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_event1)

    })

    it('TC_RE_06, TC_RE_07 - People_Search field ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')

        // Search username
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@')
        methods.EnterXpath(locators.Search1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.rowname, 'sarath_tdfect@factors.ai')
        methods.clickElementByXPath(locators.clear_search)
    })

    it('TC_RE_08, TC_RE_09, TC_RE_10, TC_RE_11 - People_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElementByXPath(locators.New_Segment);

        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Website_activity, 0)
        methods.clickElement(locators.Website_Session)
        methods.clickElementByXPath(locators.Apply_filter)
        methods.VisibilityofElement(locators.Open_Filter)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.notification_popup)

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Saved_segment)
        methods.Titletextcontainsxpath(`//h1[text()='${testName}']`, testName)
        // renaming segment

        methods.clickElementByXPath(`//span[text()="${testName}"]//following::span[1]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.RenameSegment)
        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        methods.clickElementByXPath(locators.save1)
        methods.Titletextcontainsxpath(`//h1[text()='${combination}']`, combination)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        //deleting the segment

        methods.clickElementByXPath(`//span[text()='${combination}']//following::span[1]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Delete_segment)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.notification_popup1)

    })

    it('TC_RE_12, TC_RE_13 - People_Brid views ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.rowname)
        methods.VisibilityofElementXpath(locators.View_visible)

    })

    it('TC_RE_14 - People_Birdviews expand ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElementByXPath(locators.rowname)
        methods.VisibilityofElementXpath(locators.View_visible)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand)
    })

    it('TC_RE_15 - People_Birdviews account activity ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElementByXPath(locators.rowname)
        methods.VisibilityofElementXpath(locators.View_visible)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Time_stamp)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Hourly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Weekly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Monthly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Daily)
        methods.AssertNotEmpty(locators.timestamp_validation)
    })
})