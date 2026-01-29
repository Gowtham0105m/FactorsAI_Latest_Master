import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Intent Upload Login', ()=>{

    beforeEach(() => {

        cy.viewport(deviceViewport);
    
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        //login before run test
        Login1();
    
      })
    
    it('Intent Upload',()=>{

        const filePath = 'Automation_Data.csv';

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
       methods.clickElementByXPath(locators.Data_Management)
        methods.clickElementByXPath(locators.Account_Configurations_1)
        methods.VisibilityofElement(locators.Page_title, 'Account Configurations')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Intent_upload)
        methods.VisibilityofElementXpath(locators.IntentPageLoaded)
        methods.clickElementByXPath(locators.UploadIntentdata)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.SegmentTitle, "Upload third-party intent data")
        methods.AttachFile(locators.File_Upload, filePath)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.AlertMsg)
        methods.clickElementByXPath(locators.Import)
        methods.VisibilityofElementXpath(locators.Error_Msg)
        methods.clickElementByXPath(locators.Date_Option)
        methods.clickElement(locators.IntentDate)
        methods.clickElementByXPath(locators.Source_Option)
        methods.clickElement0(locators.IntentCategory, 1)
        methods.clickElementByXPath(locators.Domain_Option)
        methods.clickElement0(locators.Website1, 2)
        methods.clickElementByXPath(locators.Selectadditionalproperties)
        methods.clickElement0(locators.Visittype, 3)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Import)
        methods.assertElementContainsText(locators.Import_Confirmation, "Import data from the CSV?")
        methods.clickElementIndexXpath(locators.Import, 1)
        methods.assertElementContainsText(locators.Popup_Message, "Intent data uploaded successfully")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.OperationLog)
        methods.clickElementByXPath(locators.Logs)
        methods.VisibilityofElementXpath(locators.OperationLog_Popup)
        methods.assertElementContainsTextxpath(locators.Status_Verify, 'Uploaded')
        methods.assertElementContainsTextxpath(locators.Uploaded_By, 'Sarath')
        methods.clickElementByXPath(locators.Intent_Download)
        cy.wait(Timeout.sm)
        
    })
})