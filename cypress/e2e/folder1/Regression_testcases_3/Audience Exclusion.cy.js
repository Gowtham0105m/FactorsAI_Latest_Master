import Login1 from '../../PageObjects/Login1.js';
import methods from '../../../support/Common_Method.js';
import { deviceViewport, extraTimeOut, Timeout } from '../../Utils.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Audience Exclusion login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();


    })

    it.skip('Audience Exclusion', () => {

        const filePath = 'Sample_file_for_page_URL_rules.csv';

        const nowTime = dayjs().format('H:m:s');
        const Audience_Exclusion = `Audience Exclusion ${nowTime}`;

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
        methods.clickElementByXPath(locators.Audience_Exclusion)
        cy.wait(Timeout.xmd);
        methods.VisibilityofElementXpathIndexInput(locators.Audience_Exclusion, 2)
        cy.xpath('(//tbody/tr/td)[1]').invoke('text').then((text) => {
            cy.wrap(text.trim()).as('Text1');
        });
        methods.clickElementByXPath(locators.Add_Rule)
        cy.wait(Timeout.md);
        methods.VisibilityofElementXpath(locators.Create_Exclusion_Rule)
        methods.clickElementByXPath(locators.ad_account)
        methods.clickElement(locators.LinkedInAdAccount)
        methods.clickElementByXPath(locators.select_Campaigns)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.please_select_campaigns)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.select_value1_campaigns)
        methods.clickElement(locators.Edit_Button)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(`//textarea[text()="Untitled exclusion rule"]`, Text1);
            methods.EnterXpath(`//textarea[text()="${Text1}"]`)
        });

        methods.clickElementByXPath(locators.Bulk_Upload)
        methods.VisibilityofElementXpath(locators.CSVUploadModal_popup)
        methods.clickElementByXPath(locators.File)
        cy.wait(Timeout.sm)
        methods.AttachFile(locators.File_Upload, filePath)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.UploadandContinue)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.Add)

        cy.xpath('//*[local-name()="svg" and @data-icon="xmark"]')
            .then(($elements) => {

                const count = $elements.length;
                cy.log(`**Company Exclusion count : ${count}**`);

                for (let j = 0; j < count; j++) {

                    methods.clickElementIndexXpath(locators.Remove_Digest_Mail, 0);
                    cy.wait(300);

                }
            });
        methods.NotExistxpath(locators.Remove_Digest_Mail)
        methods.scrollWithXpath(locators.Exclude_by_Attributes)
        methods.clickElementByXPath(locators.Add_Segment)
        methods.typeElement(locators.search_1, 'In Hubspot')
        methods.clickElementByXPath(locators.InHubspot)
        methods.ClickandTypeXpath(locators.please_select_job_titles, 'automation engineer')
        methods.clickElement(locators.automation_engineer)
        methods.ClickandTypeXpath(locators.Please_select_seniorities_to_exclude, 'unpaid')
        methods.clickElement(locators.Unpaid)
        methods.ClickandTypeXpath(locators.Please_select_Job_function_to_exclude, 'engineering')
        methods.clickElement(locators.Engineering)
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.assertElementContainsText(locators.notification_popup2, "Failed!duplicate name")
        methods.clickElement(locators.Edit_Button)
        cy.get('@Text1').then((Text1) => {
            methods.ClearAndTypeWithXpath(`//textarea[text()="${Text1}"]`, Audience_Exclusion);
            methods.EnterXpath(`//textarea[text()="${Audience_Exclusion}"]`);
        });
        methods.clickElementByXPath(locators.Confirm_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessGlobal exclusion rule created successfully.")
        methods.clickElementByXPath(locators.active_Toggle1)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule paused successfully.")
        methods.clickElementByXPath(locators.adpilot_arrow_left)
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpath(`//*[text()='${Audience_Exclusion}']`)
        methods.assertElementContainsText1(`//*[text()="${Audience_Exclusion}"]//following::span[6]`, "Paused")
        cy.wait(Timeout.xs)
        methods.VisibilityofElementXpathIndexInput(locators.Audience_Exclusion, 2)
        methods.clickElementByXPath(`//*[text()="${Audience_Exclusion}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Edit_Rule)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Enable_button)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule resumed successfully.")
        methods.clickElementByXPath(locators.adpilot_arrow_left)
        methods.VisibilityofElementXpath(`//*[text()='${Audience_Exclusion}']`)
        methods.assertElementContainsText1(`//*[text()="${Audience_Exclusion}"]//following::span[6]`, "Published")
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(`//*[text()="${Audience_Exclusion}"]`)
        methods.clickElementByXPath(`//*[text()="${Audience_Exclusion}"]//following::button[1]`)
        methods.clickElementByXPath(locators.Remove_rule)
        methods.VisibilityofElement(locators.Templete_Popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule deleted successfully!")

    })

})