import Login1 from '../../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Account Template Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Account Template', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const folder_name = `Automation Template Folder ${nowTime}`;
        const folder_name1 = `Automation Template Folder 1 ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[text()="All segments"]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (!demoElement || demoElement.offsetParent === null) {
                cy.log("**All Segment not loaded**");
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.People);
                cy.wait(Timeout.xs);
                methods.Mouseover(locators.account_dropdown);
                methods.clickElementByXPath(locators.Account);
                cy.wait(Timeout.xs);
            } else {
                cy.log("**All Segment has been loaded**");
            }
        });
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.ChooseaTemplate)
        cy.wait(Timeout.xs)
        methods.ScrollAndClickxpath(locators.Accounts_active_on_website)
        methods.clickElement0(locators.SQLsandOpps, 0)
        methods.clickElementByXPath(locators.Add_Event)
        methods.typeElement(locators.Select_Event, "visi")
        methods.clickElement0(locators.Third_party_Intent_Visit, 0)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        cy.wait(Timeout.xl)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Come back in around 60 minutes to view the final segment.")
        methods.VisibilityofElementXpath(locators.AllsegmentMenu)
        methods.clickElementByXPath(locators.All_segments)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(`//span[text()='${testName}']//following::span[1]`)
        cy.wait(Timeout.xs)
        methods.MouseoverWithXpath(locators.Movetofolder)
        methods.clickElementByXPath(locators.New_folder)
        methods.ClickandTypeXpath(locators.create_newfolder, folder_name)
        methods.clickElementByXPath(locators.Save)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Segment Moved to New Folder")
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(`//div[text()="${folder_name}"]`)
        cy.wait(Timeout.xs)
        methods.MouseoverAndClick(`//div[text()="${folder_name}"]//following::span[2]`)
        methods.clickElementByXPath(locators.Edit_Folder)
        methods.ClearAndTypeWithXpath(locators.create_newfolder, folder_name1)
        methods.clickElementByXPath(locators.Save)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Renamed")
        cy.wait(Timeout.sm)
        methods.ScrollAndClickxpath(locators.All_segments)
        cy.xpath(`(//div[text()="${folder_name1}"])[1]`, { timeout: extraTimeOut })
            .invoke('text')
            .then((firstText) => {
                const text1 = firstText.trim();

                expect(text1).to.equal(folder_name1);
                console.log(text1)
                console.log(folder_name1)
            })

        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(`//div[text()="${folder_name1}"]//following::span[2]`)
        methods.clickElementByXPath(locators.Delete_Folder);
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.VisibilityofElementXpath(locators.Folder_Delete)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.All_segments)
        methods.scrollWithXpath(`//span[text()='${testName}']`)
        methods.VisibilityofElementXpath(`//span[text()='${testName}']`)
        methods.MouseoverAndClick(`//span[text()='${testName}']//following::span[1]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.NotExist(locators.Loading)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.sm)
    })
})