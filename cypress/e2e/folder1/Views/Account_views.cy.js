import Login1 from '../../PageObjects/Login1';
import { deviceViewport, Timeout } from '../../Utils.js';
import methods from '../../../support/Common_Method.js';
import locators from '../../../support/Locators.js';

describe('Accounts view Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Accounts view', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // select account & birdview
        cy.wait(Timeout.xmd)
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
        methods.clickElementByXPath(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsTextxpath(locators.account_pageloaded, 'infosys.com')
        methods.MouseoverWithXpath(locators.open_account)
        methods.clickElementByXPath(locators.open_account)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElementXpath(locators.View_visible)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)
        methods.scrollWithXpath(locators.First_value)
        methods.VisibilityofElementXpath(locators.First_value)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        methods.typeElement(locators.Select_Events_to_show, 'Company Created')
        methods.clickElementByXPath(locators.Company_Created1)
        // cy.wait(Timeout.md)
        // methods.VisibilityofElementXpath(locators.Views_tab)
        cy.wait(Timeout.sm)
        methods.AssertNotEmpty(locators.Event_validation)
        methods.clickElementByXPath(locators.Birdview_option)
        methods.typeElement(locators.Select_Events_to_show, 'Company Created')
        methods.clickElementByXPath(locators.Company_Created1)
        cy.wait(Timeout.sm)
        methods.AssertNotEmpty(locators.Event_validation)

        // user property

        methods.clickElementByXPath(locators.Birdview_properties)
        methods.clickElementByXPath(locators.Birdview_properties_option1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        methods.clickElementByXPath(locators.Birdview_properties_option1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)

        // left side filter

        cy.xpath(`(//*[text()="infosys.com"]//following::div[contains(@class,"leftpane-prop")]//h4[1])[last()]`)
            .invoke('text')
            .then((element) => {
                const property = element.replace(/\.\.\.$/, '').trim();
                cy.log(`**Property name: ${property}**`);
                methods.MouseoverAndClick(`(//h4[text()="${element}"]//following::button)[1]`)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Add_Property1);
                methods.typeElement(locators.select_property, property);
                methods.clickElementByXPath(`(//div[contains(@title,"${property}")])[1]`)
                cy.wait(Timeout.sm);

                let matchFound = false;
                cy.xpath(`//h4[text()="infosys.com"]//following::div[contains(@class,"leftpane-prop")]//h4[1]`)
                    .should('exist')
                    .each(($header) => {
                        const headerText = $header.text().trim();
                        if (headerText.includes(property)) {
                            matchFound = true;
                            cy.log(`**Match Found: Header "${headerText}" matches the property "${property}"**`);
                        }
                    })
                    .then(() => {
                        if (!matchFound) {
                            cy.log(`**No Match Found: No header matches the property "${property}"**`);
                        }
                    });
            });

        // account activity

        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Time_stamp)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Hourly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Weekly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Monthly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Daily)
        methods.AssertNotEmpty(locators.timestamp_validation)

        // Timeline

        methods.clickElementByXPath(locators.Time_line)
        methods.VisibilityofElementXpath(locators.Time_line_Validation)

        // Overview

        methods.clickElementByXPath(locators.Over_view)
        cy.wait(Timeout.lgr)
        methods.VisibleofElement(locators.Over_view_validation)

    })

    it('Account Timeline View', () => {

        cy.wait(Timeout.xmd)
        methods.assertElementContainsTextxpath(locators.Title_page, 'All Accounts')
        cy.wait(Timeout.md)
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
        methods.clickElementByXPath(locators.search_button)
        cy.wait(Timeout.xs)
        methods.typeElementByXPath(locators.search_area, 'accenture.com')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsTextxpath(locators.account_pageloaded, 'accenture.com')
        methods.clickElementByXPath(locators.Open_Accenture_Acc)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.Time_line_Validation)
        methods.VisibilityofElementXpath(locators.Timeline_View)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Timeline_View)
        cy.xpath(locators.Timeline_View).should('have.attr', 'aria-selected', 'true');
        cy.wait(Timeout.sm)
        cy.xpath(locators.collapse_expandrow).should('have.attr', 'aria-label', 'Expand row')
        methods.clickElementIndexXpath(locators.Timeline_View_collapseExpand, 0)
        cy.xpath(locators.collapse_expandrow).should('have.attr', 'aria-label', 'Collapse row')
        methods.clickElementIndexXpath(locators.Timeline_View_collapseExpand, 1)
        cy.xpath(locators.collapse_expandrow).should('have.attr', 'aria-label', 'Expand row')
        methods.GetTextXpath('(//div[contains(@id,"panel-timelineV2")]//div)[3]/button[1]', "Monthly")
        methods.clickElementIndexXpath(locators.filterDropdown, 0)
        methods.VisibilityofElementXpath(locators.frequency_dropdown)
        methods.clickElementByXPath(locators.selectFrequecy('Weekly'))
        methods.GetTextXpath('(//div[contains(@id,"panel-timelineV2")]//div)[3]/button[1]', "Weekly")
        methods.clickElementIndexXpath(locators.filterDropdown, 0)
        methods.VisibilityofElementXpath(locators.frequency_dropdown)
        methods.clickElementByXPath(locators.selectFrequecy('Daily'))
        methods.GetTextXpath('(//div[contains(@id,"panel-timelineV2")]//div)[3]/button[1]', "Daily")
        methods.clickElementIndexXpath(locators.filterDropdown, 0)
        methods.VisibilityofElementXpath(locators.frequency_dropdown)
        methods.clickElementByXPath(locators.selectFrequecy('Monthly'))
        methods.GetTextXpath('(//div[contains(@id,"panel-timelineV2")]//div)[3]/button[1]', "Monthly")
        methods.clickElementIndexXpath(locators.filterDropdown, 1)
        methods.VisibilityofElement(locators.Select_Events_to_Show);
        methods.VisibilityofElementXpath(locators.timeline_View_Event_Filter('Third Party Intent Visit'))
        methods.typeElement(locators.Select_Events_to_Show, "page")
        methods.NotExistxpath(locators.timeline_View_Event_Filter('Third Party Intent Visit'))
        methods.VisibilityofElementXpath(locators.timeline_View_Event_Filter('Page View'))
        methods.clickElementByXPath(locators.timeline_View_Event_Filter('Page View'))
        cy.xpath(locators.collapse_expandrow).should('have.attr', 'aria-label', 'Expand row')
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.filterDropdown, 1)
        methods.VisibilityofElement(locators.Select_Events_to_Show);
        methods.VisibilityofElementXpath(locators.timeline_View_Event_Filter('Third Party Intent Visit'))
        methods.typeElement(locators.Select_Events_to_Show, "page")
        methods.NotExistxpath(locators.timeline_View_Event_Filter('Third Party Intent Visit'))
        methods.VisibilityofElementXpath(locators.timeline_View_Event_Filter('Page View'))
        methods.clickElementByXPath(locators.timeline_View_Event_Filter('Page View'))
        cy.xpath(locators.collapse_expandrow).should('have.attr', 'aria-label', 'Expand row')
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.filterDropdown, 2)
        cy.wait(Timeout.sm)
        cy.xpath(`//div[@class="apply_active"]//span[contains(@class,"ui-icon")]`)
            .its('length')
            .then((count) => {

                cy.log(`**Selected filter count: ${count}**`);

                if (count < 6) {
                    for (let i = count; i < 6; i++) {
                        methods.clickElementByXPath(`(//div[@class="apply_active"]//h6)[${i + 1}]`)
                        cy.wait(Timeout.xs)
                    }
                }
            });
        methods.VisibilityofElement(locators.notification_popup2)
        methods.clickElementByXPath(`(//div[@class="apply_active"]//h6)[5]`)
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.filterDropdown, 2)
        methods.clickElementByXPath(locators.timeline_view_Export)
        methods.verifyExportFile('account-timeline');
    })
})