import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout, extraTimeOut } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('Attribution Regression', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Attribution - page load ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)

    })

    it('TC_RE_02 - Attribution - Add filter ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_03 - Attribution - attribution Type ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElement(locators.Offer)
        methods.clickElement(locators.Tactic_Offer)
    })

    it('TC_RE_04 - Attribution - property ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

    })

    it('TC_RE_05 - Attribution - Attribution model ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)
    })

    it('TC_RE_06 - Attribution - date range ', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "hubspot deal record id")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Hubspot_Deal_Opt)
        methods.clickElement(locators.equals_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)

        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElementByXPath(locators.Last_7_days)
    })

    it('TC_RE_07 - Attribution - New Attribution created', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElement(locators.Pipeline)
        cy.wait(Timeout.sm)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        cy.wait(Timeout.md)
        methods.clickElement0(locators.HubspotDeal, 0)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.Search_Input, "Owner Ass")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.HubspotDealDate)
        methods.clickElement(locators.Inthecurrent)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.SelectBtn)
        methods.clickElement(locators.Month)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)
        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElementByXPath(locators.Last_7_days)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.clickElement0(locators.Attri_pageloaded, 0)
    })

    it('Attribution - New flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        let text1, text2, text3, text4;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.HubspotDeals, 0)
        methods.clickElement(locators.Deals)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)
        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElementByXPath(locators.Last_Month)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.clickElement0(locators.Attri_pageloaded, 0)
        methods.scrollWithXpath(locators.chartName)

        cy.xpath('(//*[local-name()="svg" and @id="funnel-grouped-svg-chart"])//following::div[4]', { timeout: extraTimeOut })
            .invoke('text')
            .then((firstText) => {
                text1 = firstText.trim();
                cy.log(`text1 : ${text1}`)
                cy.xpath('(//*[local-name()="svg" and @id="funnel-grouped-svg-chart"])//following::div[7]', { timeout: extraTimeOut })
                    .invoke('text')
                    .then((secondText) => {
                        text2 = secondText.trim();
                        cy.log(`text2 : ${text2}`)
                    });
            });

        methods.clickElementByXPath(locators.Save)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.segment_rename, testName)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.close_2)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.attribution_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElementXpath(locators.Add_Report)
        cy.wait(Timeout.sm)
        methods.scrollWithXpath(`//h4[text()="${testName}"]`)

        cy.xpath(`//h4[text()='${testName}']//following::div[8]`, { timeout: extraTimeOut })
            .invoke('text')
            .then((firstText) => {
                text3 = firstText.trim();
                cy.log(`text3 : ${text3}`)
                cy.xpath(`//h4[text()='${testName}']//following::div[11]`, { timeout: extraTimeOut })
                    .invoke('text')
                    .then((secondText) => {
                        text4 = secondText.trim();
                        cy.log(`text4 : ${text4}`)
                    });
            });
        cy.then(() => {
            expect(text1).to.equal(text3);
            cy.log(`Text1: '${text1}' and Text3: '${text3}' are equal`);

            expect(text2).to.equal(text4);
            cy.log(`Text2: '${text2}' and Text4: '${text4}' are equal`);
        });

        methods.clickElementByXPath(`//h4[text()='${testName}']//following::button[1]`)
        methods.clickElementByXPath(locators.Delete_Widget)
        methods.clickElementByXPath(locators.confirmbtn)
        cy.wait(Timeout.xs)
    })
})