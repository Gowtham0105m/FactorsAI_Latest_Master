import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

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
        const testName = `Interest_Group_Page_View ${randomNumber}`;
        const testName1 = `Interest_Group_Page_View_Edit_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.Select_Values)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.URLoption)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement0(locators.PageUrlContains, 1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 3)
        cy.wait(Timeout.sm)
        methods.typeElementwithIndex(locators.Search, "https://staging-app.factors.ai/explain", 3)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Staging_app_factors)
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
        const testName = `Interest_Group_Hubspot_Forms ${randomNumber}`;
        const testName1 = `Interest_Group_Hubspot_Forms_Edit_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.Select_Values)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.URLoption)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.AddRule)
        methods.clickElement0(locators.Formtitlecontains, 1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 3)
        cy.wait(Timeout.sm)
        methods.typeElementwithIndex(locators.Search, "https://staging-app.factors.ai/explain", 3)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Staging_app_factors)
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
        const testName = `Interest_Group_Salesforce_Campaigns ${randomNumber}`;
        const testName1 = `Interest_Group_Salesforce_Campaigns_Edit_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.Select_Values)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.URLoption)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Campaignnamecontains, 1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 3)
        cy.wait(Timeout.sm)
        methods.typeElementwithIndex(locators.Search, "https://staging-app.factors.ai/explain", 3)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Staging_app_factors)
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
        const testName = `Interest_Group_LinkedIn_Ads ${randomNumber}`;
        const testName1 = `Interest_Group_LinkedIn_Ads_Edit ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.Select_Values)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.URLoption)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Campaignnamecontains, 1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 3)
        cy.wait(Timeout.sm)
        methods.typeElementwithIndex(locators.Search, "https://staging-app.factors.ai/explain", 3)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Staging_app_factors)
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
        const testName = `Interest_Group_G2_Intent ${randomNumber}`;
        const testName1 = `Interest_Group_G2_Intent_Edit ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        cy.wait(Timeout.xmd)
        methods.clickElementByXPath(locators.Select_Values)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.URLoption)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.custom_event_name)
        methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
        methods.clickElementByXPath(locators.Assign_weight)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement0(locators.Pagetitlecontains, 1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Search, 3)
        cy.wait(Timeout.sm)
        methods.typeElementwithIndex(locators.Search, "https://staging-app.factors.ai/explain", 3)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Staging_app_factors)
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
        const testName = `Interest_Group_Custom_Event ${randomNumber}`;
        const testName1 = `Interest_Group_Custom_Event_Edit ${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        const testName = `Interest_Group_Popup_verification ${randomNumber}`;
        const testName1 = `Interest_Group_Popup_verification_Edit_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.assertElementContainsText(locators.Page_title, 'Interest Groups')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Interest_Groups)
        methods.VisibilityofElementXpath(locators.AddNewGroup)
        cy.wait(Timeout.xs)

        cy.document().then((doc) => {
            const demoElement = doc.evaluate(`//div[contains(text(),"Interest_Group")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (demoElement) {
                methods.clickElementByXPath(`//div[contains(text(),"Interest_Group")]//following::button[2]`)
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
        methods.assertElementContainsText(locators.Page_title, "Interest Groups")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`//div[text()='${testName}']//following::button[2]`)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Yes)
        methods.GetText(locators.notification_popup, "Interest Group removed successfullyInterest Group removed from monitoring. Changes will reflect within 24 hours.")
        cy.wait(Timeout.xs)
    })
})