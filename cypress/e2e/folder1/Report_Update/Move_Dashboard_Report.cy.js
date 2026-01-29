import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';
import dayjs from 'dayjs';

describe('Move Dashboard Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        Login1();
    })

    it('Move Dashboard Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_Folder_${nowTime}`;

        let reportNames = [];

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.SegmentTitle)
        methods.clickElementByXPath(locators.NewDashboard)
        methods.clickElementByXPath(locators.ChooseaTemplate)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.search_1, "Webs")
        methods.clickElementByXPath(locators.WebsiteVisitorIdentification)
        methods.clickElementByXPath(locators.Showmore)

        cy.xpath('//h4[text()="Included Reports"]//following-sibling::h4')
            .then(($headers) => {
                $headers.each((index, el) => {
                    if (index > 0) {
                        cy.wrap(el)
                            .invoke('text')
                            .then((classList) => {
                                const reportName = classList.trim().replace(/^\d+\.\s*/, '');
                                reportNames.push(reportName);
                                cy.log(`${reportName}`);
                            });
                    }
                });
            });

        methods.clickElementByXPath(locators.CopythisDashboard)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.SegmentTitle, "Website Visitor Identification")
        methods.clickElementByXPath(locators.Report_Action)
        methods.MouseoverWithXpath(locators.Movetofolder)
        methods.clickElementByXPath(locators.New_folder)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.FolderNameField, testName)
        methods.clickElementByXPath(locators.Ok1)
        methods.assertElementContainsText(locators.notification_popup, "SuccessFolder creation successful")
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(`(//div[text()="${testName}"])[1]`)
        methods.VisibilityofElementXpath(`(//div[text()="${testName}"])[1]`)
        methods.clickElementByXPath(locators.Report_Action)
        methods.clickElementByXPath(locators.DeleteDashboard)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDashboard deleted successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(`(//div[text()="${testName}"])[1]//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Folder)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.notification_popup, "SuccessFolder deleted successfully")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)

        cy.then(() => {
            reportNames.forEach((name) => {
                methods.clickElementByXPath(`(//h4[text()="${name}"]//preceding::input[@type="checkbox"][1])[1]`)
            });
        });

        methods.clickElementByXPath(locators.delete)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, "Selected reports were deleted successfully.")
        cy.wait(Timeout.sm)
    })
})