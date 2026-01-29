import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('TouchPoint Email tracking Login', () => {

    beforeEach(() => {


        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TouchPoint_Email tracking', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Email_Tracking)
        methods.Titletextcontains(locators.Page_title, "Email tracking")
        methods.VisibilityofElementXpath(locators.panelemailTracking)
        methods.ElementVisibleandClickXpath(locators.Search_type)
        methods.clickElement(locators.Hubspot1)
        methods.VisibilityofElementXpath(locators.EmailClicks_container)
        methods.clickElementByXPath(locators.Copy_Hubspot_UTM_Parameter)
        methods.VisibilityofElement(locators.notification_popup3)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Email_tracking)
        methods.typeElement(locators.utm_tag, 'Testing')
        methods.clickElement(locators.done)
        methods.assertElementContainsText(locators.Popup_Message, "UTM Tag added!")
        methods.clickElementByXPath(locators.Email_Tracking)
        methods.VisibilityofElementXpath(locators.panelemailTracking)
        methods.clickElementByXPath(locators.Search_type)
        methods.clickElement(locators.Hubspot1)
        methods.assertElementContainsTextxpath(locators.Verified_saved_UTM, '?Testing={{contact.email}}')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.X_close)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.Popup_Message, "UTM Tag removed!")
        methods.VisibilityofElementXpath(locators.panelemailTracking)

    })

})