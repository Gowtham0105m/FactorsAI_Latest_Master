import Login1 from '../../PageObjects/Login1';
import methods from '../../../support/Common_Method.js';
import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Google Audience Sync GA4 login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();


    })

    it('Google Audience Sync GA4', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Google audience sync GA4 ${nowTime}`;
        const Google_Audience_GA4 = `New Google audience sync GA4 Pause_${nowTime}`;

        cy.wait(Timeout.xmd)
        methods.scrollWithXpath(locators.Title_page)
        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md);
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
        methods.MouseoverWithXpath(locators.Adpilot)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Audience_Sync_GA4)
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.GA4_Audience_Sync)
        cy.xpath('(//tbody/tr/td)[1]').invoke('text').then((text) => {
            cy.wrap(text.trim()).as('Text1');
        });
        methods.clickElementByXPath(locators.SyncNewAudience)
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.Factors)
        methods.clickElementByXPath(locators.Factors_Segment_To_Sync)
        methods.clickElementByXPath(locators.Engaged_linkedin)
        methods.clickElementByXPath(locators.Create_Google_Audience)
        cy.wait(Timeout.sm);
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.ClearAndType(`[value="Factors"]`, testName)
        methods.Enter(`[value="${testName}"]`)
        methods.clickElementByXPath(locators.Create_Audience)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessGoogle Audience GA4 Successfully Created!")
        cy.wait(Timeout.sm)
        methods.assertElementContainsText1(`//*[text()="${testName}"]//following::span[5]`, "Published")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//*[text()="${testName}"]//following::button[1]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.View)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Google_Audience_GA4_Sync_Status)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.active_Toggle1)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.pause)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "SuccessGoogle Audience Successfully Updated!")
        methods.clickElementByXPath(locators.adpilot_arrow_left)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText1(`//*[text()="${testName}"]//following::span[5]`, "Paused")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.GA4_Audience_Sync)
        cy.wait(Timeout.xs)
        cy.xpath(`//*[text()="${testName}"]`, { timeout: extraTimeOut }).click({ force: true })
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Enable_button)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessGoogle Audience Successfully Updated!")
        methods.clickElementByXPath(locators.adpilot_arrow_left)
        methods.assertElementContainsText1(`//*[text()="${testName}"]//following::span[5]`, "Published")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//*[text()="${testName}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_Google_Audience)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "SuccessGoogle Audience GA4 Successfully Deleted!")
        cy.wait(Timeout.xs)
    })

})