import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('People view Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('People view', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.navigateToUrlPeople()
        methods.UrlValidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElementByXPath(locators.rowname)
        methods.VisibilityofElementXpath(locators.View_visible)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)
        methods.VisibilityofElementXpath(locators.View_visible)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)
        methods.VisibilityofElementXpath(locators.View_visible)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        methods.typeElement(locators.Select_Events_to_Show, "web")
        methods.clickElementByXPath(locators.WebsiteSessionEvent)
        methods.AssertNotEmptyWithXpath(locators.people_firstvalue)
        methods.clickElementByXPath(locators.WebsiteSessionEvent)

        // user millistone

        methods.clickElementByXPath(locators.Milestones_peopleView)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Milestones_option, 3)
        methods.clickElementIndexXpath(locators.Milestones_option, 4)
        methods.clickElementIndexXpath(locators.Milestones_option, 5)
        methods.VisibilityofElement(locators.notification_popup2)
        methods.clickElementByXPath(locators.Apply2)
        methods.VisibilityofElementXpath(locators.View_visible)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Milestones_option, 3)
        methods.clickElementIndexXpath(locators.Milestones_option, 4)
        methods.clickElementByXPath(locators.Apply2)
        methods.VisibilityofElementXpath(locators.View_visible)
        methods.clickElementByXPath(locators.Birdview_option)

        // left side filter

        cy.xpath(`(//h4[text()="factors.ai"]//following::div[contains(@class,"leftpane-prop")]//h4[1])[last()]`)
            .invoke('text')
            .then((Property) => {
                const property = Property.replace(/\.\.\.$/, '').trim();
                cy.log(`**Property name: ${property}**`);
                methods.MouseoverAndClick(`//h4[text()="${Property}"]//following::button[1]`)
                cy.wait(Timeout.xs)
                methods.clickElementByXPath(locators.Add_Property1);
                methods.typeElement(locators.select_property, property);
                methods.clickElementByXPath(`(//div[contains(@title,"${property}")])[1]`)
                cy.wait(Timeout.sm);

                let matchFound = false;
                cy.xpath(`//h4[text()="factors.ai"]//following::div[contains(@class,"leftpane-prop")]//h4[1]`)
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
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.Time_line_Validation)

    })
})