import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Enrichment Rules Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Enrichment Rules', () => {

        const filePath = 'Sample_file_for_page_URL_rules.csv';

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Integrations)
        methods.clickElementByXPath(locators.Acc_Iden_enrich)
        methods.clickElementByXPath(locators.Enrichment_Rules)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Set_custom_rules)
        cy.wait(Timeout.xs)

        cy.document().then((doc) => {
            const Delete_Btn = doc.evaluate(locators.close_new, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (Delete_Btn) {
                cy.log("**Already rules are set**");
                methods.clickElementByXPath(locators.close_new)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.delete)
                methods.GetText(locators.notification_popup, "SuccessSuccessfully updated settings")
                cy.wait(Timeout.xs)
            }else {
                cy.log("**No rules has been set**");
            }
        })

        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Pages)
        methods.clickElementByXPath(locators.Upload_List)
        methods.VisibilityofElementXpath(locators.CSVUploadModal_popup)
        methods.clickElementByXPath(locators.File)
        cy.wait(Timeout.sm)
        methods.AttachFile(locators.File_Upload, filePath)
        cy.wait(Timeout.xs)
        methods.ElementToBeClickableXpath(locators.UploadandContinue)
        methods.clickElementByXPath(locators.UploadandContinue)
        methods.VisibilityofElementXpath(locators.Enrichment_page_validation)
        cy.wait(Timeout.xs)
        methods.scrollWithXpath(locators.Savechanges1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Savechanges1)
        cy.wait(Timeout.sm)
        methods.GetText(locators.notification_popup, "SuccessSuccessfully updated settings")
        methods.VisibilityofElementXpath(locators.Enrichment_Uploaded_Verify)
        methods.scrollWithXpath(locators.close_new)
        methods.clickElementByXPath(locators.close_new)
        methods.scrollWithXpath(locators.delete)
        methods.clickElementByXPath(locators.delete)
        methods.GetText(locators.notification_popup, "SuccessSuccessfully updated settings")
        cy.wait(Timeout.xs)
    })
})
