import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('People Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it.only('People', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const Folder = `Automation Folder ${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.CompareScreenShot('Peoples')
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')

        // Search username

        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.rowname, 'sarath_tdfect@factors.ai')

        // add column

        methods.clickElementByXPath(locators.People_download_button)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.Titletextcontainsxpath(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClickXpath(locators.exportCSV)
        methods.NotExist(locators.DownloadCSV_Popup)
        methods.clickElementByXPath(locators.filter_closebtn)

        methods.clickElementByXPath(locators.Add_column)
        methods.VisibilityofElement(locators.table_property)
        methods.clickElementByXPath(locators.CompanyCountryISOCode)
        methods.clickElementByXPath(locators.Apply1)
        methods.VisibilityofElementXpath(locators.rowname)
        cy.wait(Timeout.sm)

        // Add filter

        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.email_1)
        methods.clickElement(locators.equals_1)
        methods.clickElement(locators.true1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.Run_Query)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // Save Segment

        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.New_folder1)
        methods.typeElementByXPath(locators.create_newfolder, Folder)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.assertElementContainsText(locators.Popup_Message, "Folder created")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.save1)
        methods.assertElementContainsText(locators.notification_popup, "Success!Segment Creation Successful")

        // open the saved segment

        methods.ClearAndType(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // renaming segment

        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.RenameSegment)
        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save_3)
        methods.assertElementContainsText(locators.notification_popup, "Segment renamed successfully")
        cy.wait(Timeout.sm)

        //deleting the segment

        methods.clickElementByXPath(`//span[text()='${combination}']//following::span[1]`)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
        methods.Clear(locators.Search_segment)
        methods.clickElementByXPath(`//div[text()='${Folder}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.xs)
    })

    it('People - Update this Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.email_1)
        methods.clickElement(locators.equals_1)
        methods.clickElement(locators.true1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.VisibilityofElement(locators.filter)
        methods.clickElement(locators.filter)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.Run_Query)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.clickElementByXPath(locators.UpdatethisSegment);
        methods.assertElementContainsText(locators.Popup_Message, "Segment updated successfully")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.All_segments)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)

    })

    it('People - Save as New Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo Segment_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.email_1)
        methods.clickElement(locators.equals_1)
        methods.clickElement(locators.true1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.VisibilityofElement(locators.filter)
        methods.clickElement(locators.filter)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.Run_Query)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.clickElementByXPath(locators.SaveasNewSegment);
        methods.ClearAndTypeWithXpath(locators.segment_namefield, testName1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.All_segments)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(`//span[text()='${testName}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(`//span[text()='${testName1}']//following::span[1]`)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)

    })
})