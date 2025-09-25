import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Interest Group Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Interest Group - Page View', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Page Interest View Demo ${randomNumber}`;
        const testName1 = `Page Interest View Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.VisibilityofElementXpath(locators.Pagedetails)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement(locators.PageUrlIs)
        methods.clickElementByXPath(locators.IGPageViewOption)
        methods.clickElementByXPath(locators.URLoption)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement0(locators.PageUrlContains, 1)
        methods.clickElement(locators.URLInput)
        methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AssignIndependentWeight)
        methods.ClearAndTypeWithXpath(locators.IGScoreField1, 45)
        methods.ClearAndTypeWithXpath(locators.IGScoreField2, 45)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest Group - Hubspot Forms', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Hubspot Testing Forms Demo ${randomNumber}`;
        const testName1 = `Hubspot Testing Forms Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.HubSpotForms)
        methods.VisibilityofElementXpath(locators.Formsubmissiondetails)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement(locators.Formtitleis)
        methods.clickElementByXPath(locators.IGPageViewOption)
        methods.clickElementByXPath(locators.URLoption)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement0(locators.Formtitlecontains, 1)
        methods.clickElement(locators.URLInput)
        methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AssignIndependentWeight)
        methods.ClearAndTypeWithXpath(locators.IGScoreField1, 45)
        methods.ClearAndTypeWithXpath(locators.IGScoreField2, 45)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest Group - Salesforce Campaigns', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Salesforce Interest Campaigns Demo ${randomNumber}`;
        const testName1 = `Salesforce Interest Campaigns Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.SalesforceCampaigns)
        methods.VisibilityofElementXpath(locators.IGCampaignsCampaignDetails)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement(locators.Campaignnameis)
        methods.clickElementByXPath(locators.IGPageViewOption)
        methods.clickElementByXPath(locators.URLoption)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Campaignnamecontains, 1)
        methods.clickElement(locators.URLInput)
        methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AssignIndependentWeight)
        methods.ClearAndTypeWithXpath(locators.IGScoreField1, 45)
        methods.ClearAndTypeWithXpath(locators.IGScoreField2, 45)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest Group - LinkedIn Ads', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `LinkedIn Interest Ads Demo ${randomNumber}`;
        const testName1 = `LinkedIn Interest Ads Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.LinkedInAds)
        methods.VisibilityofElementXpath(locators.IGCampaignsCampaignDetails)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement(locators.Campaignnameis)
        methods.clickElementByXPath(locators.IGPageViewOption)
        methods.clickElementByXPath(locators.URLoption)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Campaignnamecontains, 1)
        methods.clickElement(locators.URLInput)
        methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AssignIndependentWeight)
        methods.ClearAndTypeWithXpath(locators.IGScoreField1, 45)
        methods.ClearAndTypeWithXpath(locators.IGScoreField2, 45)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest Group - G2 Intent', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `G2 Interest Intent Demo ${randomNumber}`;
        const testName1 = `G2 Interest Intent Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.G2Intent)
        methods.VisibilityofElementXpath(locators.G2pagedetails)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement(locators.Pagetitleis)
        methods.clickElementByXPath(locators.IGPageViewOption)
        methods.clickElementByXPath(locators.URLoption)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Pagetitlecontains, 1)
        methods.clickElement(locators.URLInput)
        methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.AssignIndependentWeight)
        methods.ClearAndTypeWithXpath(locators.IGScoreField1, 45)
        methods.ClearAndTypeWithXpath(locators.IGScoreField2, 45)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest Group - Custom Event', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Custom Interest Event Demo ${randomNumber}`;
        const testName1 = `Custom Interest Event Demo New ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });

        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.CustomEvents)
        methods.VisibilityofElementXpath(locators.Eventdetails)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
        methods.clickElementByXPath(locators.Company_Created)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName}"]`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        cy.wait(Timeout.md)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElement(locators.others1)
        methods.typeElement(locators.Select_Event, "Log")
        methods.clickElement(locators.login_option)
        methods.clickElementIndexXpath(locators.Assign_weight1, 1)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Interest Group updated successfullyInterest Group has been saved with changes. Updates will reflect across accounts within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()="${testName1}"]//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)

    })

    it('Interest group Popup verification', () => {
    
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Popup Interest Demo ${randomNumber}`;
        const testName1 = `Popup Interest Demo New ${randomNumber}`;
    
        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Configurations)
        methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.InterestGroups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)
        cy.wait(Timeout.xs)
    
        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Demo")]//following::button[2]`)
                cy.wait(Timeout.sm);
                methods.clickElementByXPath(locators.Yes);
                methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.");
                cy.wait(Timeout.xs);
            } else {
                cy.log('No rules containing "Demo" found. Skipping deletion.');
            }
        });
    
        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.CustomEvents)
        methods.VisibilityofElementXpath(locators.Eventdetails)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
        methods.clickElementByXPath(locators.Company_Created)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//div[text()='${testName}']`)
        methods.clickElementByXPath(locators.AddNewGroup)
        methods.clickElementByXPath(locators.CustomEvents)
        methods.VisibilityofElementXpath(locators.Eventdetails)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
        methods.clickElementByXPath(locators.Company_Created)
        methods.clickElementByXPath(locators.Assign_weight)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "ErrorPlease add a valid name for this Interest Group.")
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.EnterXpath(locators.workflow_name)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "ErrorAn interest group with this name already exists.")
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
        methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, `New Interest Group added successfullyInterest Group saved. Monitoring for this group has now begun across accounts.`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()='${testName1}']//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()='${testName}']`)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElement(locators.others1)
        methods.typeElement(locators.Select_Event, "Log")
        methods.clickElement(locators.login_option)
        methods.clickElementIndexXpath(locators.Assign_weight1, 1)
        methods.clickElementByXPath(locators.BackArrow)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.StayonPage)
        methods.assertElementContainsText1(locators.SegmentTitle, testName)
        methods.clickElementByXPath(locators.BackArrow)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.DiscardandLeave)
        methods.assertElementContainsText(locators.Page_title, "Account Configurations")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()='${testName}']//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)
      })
})