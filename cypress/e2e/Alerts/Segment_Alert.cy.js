import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, Timeout } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Segment Alert Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Segment Alert - Enter the segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Segment Alert ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
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
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot)
        methods.MouseoverAndClick(locators.InhubspotThreeDot)
        methods.clickElementByXPath(locators.SetAlert)
        methods.scrollWithXpath(locators.Create_new_alert_title)
        methods.VisibilityofElementXpath(locators.Create_new_alert_title)

        cy.xpath(`(//h4[text()="Segment name"]//following::span[2]//div)[2]`).invoke('text').then((SegmentName) => {
            if (SegmentName === "In Hubspot") {
                cy.log(`**Excepted segment name : ${SegmentName} matches with Actual segment name : In Hubspot**`);
            } else {
                cy.log('**Excepted segment name : ${SegmentName} not matches with Actual segment name : In Hubspot**');
            }
        })

        methods.typeElement(locators.Alert_name, testName)
        methods.typeElement(locators.Message, "Testing")
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company domain')
        methods.clickElement0(locators.Company_domain, 0)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.alertteststaging)
        methods.clickElementByXPath(locators.Mention_member)
        methods.typeElementByXPath(locators.Mention_member, 'sara')
        methods.clickElementByXPath(locators.sarath)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })

    it('Segment Alert - Exit the segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo Segment Alert ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
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
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot)
        methods.MouseoverAndClick(locators.InhubspotThreeDot)
        methods.clickElementByXPath(locators.SetAlert)
        methods.scrollWithXpath(locators.Create_new_alert_title)
        methods.VisibilityofElementXpath(locators.Create_new_alert_title)

        cy.xpath(`(//h4[text()="Segment name"]//following::span[2]//div)[2]`).invoke('text').then((SegmentName) => {
            if (SegmentName === "In Hubspot") {
                cy.log(`**Excepted segment name : ${SegmentName} matches with Actual segment name : In Hubspot**`);
            } else {
                cy.log('**Excepted segment name : ${SegmentName} not matches with Actual segment name : In Hubspot**');
            }
        })

        methods.clickElement0(locators.Search, 0)
        methods.clickElement(locators.Exitthesegment)
        methods.typeElement(locators.Alert_name, testName)
        methods.typeElement(locators.Message, "Testing")
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company domain')
        methods.clickElement0(locators.Company_domain, 0)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.alertteststaging)
        methods.clickElementByXPath(locators.Mention_member)
        methods.typeElementByXPath(locators.Mention_member, 'sara')
        methods.clickElementByXPath(locators.sarath)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })

    it('Segment Alert - People', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo People Segment Alert ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
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
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.scrollWithXpath(locators.In_Hubspot)
        methods.MouseoverAndClick(locators.InhubspotThreeDot)
        methods.clickElementByXPath(locators.SetAlert)
        methods.scrollWithXpath(locators.Create_new_alert_title)
        methods.VisibilityofElementXpath(locators.Create_new_alert_title)

        cy.xpath(`(//h4[text()="Segment name"]//following::span[2]//div)[2]`).invoke('text').then((SegmentName) => {
            if (SegmentName === "In Hubspot") {
                cy.log(`**Excepted segment name : ${SegmentName} matches with Actual segment name : In Hubspot**`);
            } else {
                cy.log('**Excepted segment name : ${SegmentName} not matches with Actual segment name : In Hubspot**');
            }
        })

        methods.clickElementByXPath(locators.Alert_People)
        methods.VisibilityofElementXpath(locators.confirm_Publish_Box)
        methods.clickElementByXPath(locators.Yes_proceed)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Alert_name, testName)
        methods.typeElement(locators.Message, "Testing")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company domain')
        methods.clickElement0(locators.Company_domain, 0)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(locators.Enable_button)
        methods.clickElementByXPath(locators.Enable_button)
        cy.wait(Timeout.xs)
        // methods.scrollWithXpath(locators.PricepageText)
        // methods.typeElementByXPath(locators.PricepageText, "Testname")
        // methods.typeElementByXPath(locators.AlertMessage, "Testing")
        // cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Channel1)
        methods.typeElementByXPath(locators.SelectClick, 'stagi')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.alertteststaging)
        methods.clickElementByXPath(locators.Mention_member)
        methods.typeElementByXPath(locators.Mention_member, 'sara')
        methods.clickElementByXPath(locators.sarath)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[2]`)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })
})