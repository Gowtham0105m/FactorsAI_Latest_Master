import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Engagements scoring Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Engagements Custom Events', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Custom Events Demo ES ${randomNumber}`;
    const testName1 = `Custom Events Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.assertElementContainsText(locators.Page_title, 'Account Configurations')
    cy.wait(Timeout.sm)

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.CustomEvents)
    methods.clickElementByXPath(locators.select_event)
    methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
    methods.clickElementByXPath(locators.Company_Created)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementByXPath(locators.Assign_weight)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements Page View', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Page View Demo ES ${randomNumber}`;
    const testName1 = `Page View Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.assertElementContainsText(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement(locators.PageUrlIs)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 1)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)
  })

  it.only('Engagements HubSpot Forms', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `HubSpot Forms Demo ES ${randomNumber}`;
    const testName1 = `HubSpot Forms Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.VisibilityofElement(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.HubSpotForms)
    methods.clickElementByXPath(locators.Add_Rule)
    methods.clickElement(locators.Formtitleis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule)
    methods.clickElement0(locators.Formtitlecontains, 1)
    methods.clickElementByXPath(locators.URLInput2)
    methods.typeElementByXPath(locators.URLInput2, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements Salesforce Campaigns', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Salesforce Campaigns Demo ES ${randomNumber}`;
    const testName1 = `Salesforce Campaigns Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.VisibilityofElement(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.SalesforceCampaigns)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement(locators.Campaignnameis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement0(locators.Campaignnamecontains, 1)
    methods.clickElementByXPath(locators.URLInput3)
    methods.typeElementByXPath(locators.URLInput3, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements LinkedIn Ads', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `LinkedIn Ads Demo ES ${randomNumber}`;
    const testName1 = `LinkedIn Ads Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.VisibilityofElement(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.LinkedInAds)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement(locators.Campaignnameis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement0(locators.Campaignnamecontains, 1)
    methods.clickElementByXPath(locators.URLInput3)
    methods.typeElementByXPath(locators.URLInput3, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements G2 Intent', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `G2 Intent Demo ES ${randomNumber}`;
    const testName1 = `G2 Intent Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.VisibilityofElement(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.G2Intent)
    methods.clickElementByXPath(locators.Add_Rule3)
    methods.clickElement(locators.Pagetitleis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule3)
    methods.clickElement0(locators.Pagetitlecontains, 1)
    methods.clickElementByXPath(locators.URLInput4)
    methods.typeElementByXPath(locators.URLInput4, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    cy.wait(Timeout.md)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Assign_weight1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements scoring Popup verification', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Account scoring Demo ES ${randomNumber}`;
    const testName1 = `Account scoring Demo ES New ${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Configurations)
    methods.assertElementContainsText(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 0)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/path-analysis")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Add_signal)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 0)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/path-analysis")
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "ErrorPlease add a valid name for this rule.")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "ErrorA rule with this name already exists. Please provide a different name.")
    cy.wait(Timeout.sm)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(`//textarea[contains(text(),"${testName}")]`, testName1)
    methods.EnterXpath(`//textarea[contains(text(),"${testName1}")]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, `Duplicate RuleA similar rule with name - ${testName} already exists.`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlIs, 1)
    methods.clickElementByXPath(locators.PageViewOption1)
    methods.clickElementByXPath(locators.URLoption1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName1}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']`)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElementByXPath(locators.BackArrow)
    methods.VisibilityofElement(locators.Templete_Popup)
    methods.clickElementByXPath(locators.StayonPage)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.BackArrow)
    methods.VisibilityofElement(locators.Templete_Popup)
    methods.clickElementByXPath(locators.DiscardandLeave)
    methods.assertElementContainsText(locators.Page_title, "Account Configurations")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)
  })

  it('Navigate to engagement score page from All Account page', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Engagement scoring Demo ES ${randomNumber}`;

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
    methods.clickElementByXPath(locators.InHubspot)
    cy.wait(Timeout.md)
    methods.VisibilityofElementXpath(locators.account_pageloaded)
    methods.clickElementByXPath(locators.threedot_icon)
    methods.clickElementByXPath(locators.AccountEngagementRules)
    cy.wait(Timeout.sm)
    methods.assertElementContainsText(locators.Page_title, 'Account Configurations')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo ES")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (demoElement) {
        methods.clickElementByXPath(`//td[contains(@title,"Demo ES")]//following::button[2]`)
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement(locators.PageUrlIs)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 1)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.EnterXpath(locators.workflow_name)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(`//td[text()='${testName}']//following::button[2]`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

})