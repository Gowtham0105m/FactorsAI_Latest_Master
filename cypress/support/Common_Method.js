import envDetails from '../fixtures/envDetails.json';
import { extraTimeOut, Timeout } from '../e2e/Utils';

class methods {

    assertElementContainsText(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).should('contain', text);
    }

    assertElementContainsText2(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).should('be.visible').should('contain', text);
    }

    assertElementContainsText1(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('be.visible').should('contain', text);
    }

    VisibilityofElementXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('be.visible');
    }

    NotVisibilityofElementXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('not.be.visible');
    }

    VisibleofElement(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('to.visible');
    }

    clickElement0(selector, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).click({ force: true });
    }

    clickElementIndexXpath(xpath, int) {
        cy.xpath(xpath, { timeout: extraTimeOut }).eq(int).click({ force: true });
    }

    clickElement(selector) {
        cy.get(selector, { timeout: extraTimeOut }).click({ force: true });
    }

    scroll(selector) {
        cy.get(selector, { timeout: extraTimeOut }).scrollIntoView();
    }

    scrollWithXpath(Xpath) {
        cy.xpath(Xpath, { timeout: extraTimeOut }).scrollIntoView();
    }

    navigateToUrlPeople() {
        cy.visit(`${envDetails.backendApiUrl}/profiles/people`);
    }

    launchUrl() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/`);
    }

    navigateToUrl(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}${url}`);
    }

    navigateToUrljour(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/${url}`);
    }

    UrlValidation(text) {
        cy.url().should('contain', `${envDetails.backendApiUrl}${text}`);
    }

    UrlValidationset(text) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/settings/${text}`);
    }

    UrlValidationAccide() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/reports/visitor_report`);
    }

    UrlValidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    UrlvalidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    Titletextcontains(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).contains(text);
    }

    Titletextcontains1(selector, int, text) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).contains(text);
    }

    Titletextcontainsxpath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).contains(text);
    }

    AssertNotEmpty(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('not.be.empty');
    }

    AssertNotEmptyWithXpath(Xpath) {
        cy.xpath(Xpath, { timeout: extraTimeOut }).should('not.be.empty');
    }

    Enter(selector) {
        cy.get(selector, { timeout: extraTimeOut }).type('{enter}');
    }

    EnterXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).type('{enter}');
    }

    clickElementByXPath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).click({ force: true });
    }

    typeElementByXPath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).type(text);
    }

    typeElement(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).type(text, { force: true });
    }

    typeElementwithIndex(selector, text, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).type(text, { force: true });
    }

    typeElementByXPathwithIndex(xpath, text, int) {
        cy.xpath(xpath, { timeout: extraTimeOut }).eq(int).type(text, { force: true });
    }

    ClickandType(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).click({ force: true }).type(text);
    }

    ClickandTypeXpath(Xpath, text) {
        cy.xpath(Xpath, { timeout: extraTimeOut }).click({ force: true }).type(text);
    }

    assertElementContainsTextxpath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('contain', text);
    }

    VisibilityofElement(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('be.visible');
    }

    VisibilityofElementIndex(selector) {
        cy.get(selector, { timeout: extraTimeOut }).eq(0).should('be.visible');
    }

    VisibilityofElementIndexInput(selector, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).should('be.visible');
    }

    VisibilityofElementXpathIndexInput(xpath, int) {
        cy.xpath(xpath, { timeout: extraTimeOut }).eq(int).should('be.visible');
    }

    VisibilityofElement1(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).should('have.text', text);
    }

    VisibilityofElement2(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('have.text', text);
    }

    Mouseover(selector) {
        cy.get(selector, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    }

    MouseoverWithXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    }

    MouseoverWithXpathindex(xpath, int) {
        cy.xpath(xpath, { timeout: extraTimeOut }).eq(int).trigger('mouseover', { force: true });
    }

    MouseoverAndClick(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).trigger('mouseover', { force: true }).click({ force: true });
    }

    ElementVisibleandClick(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('be.visible').click({ force: true });
    }

    ElementVisibleandClickXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('be.visible').click({ force: true });
    }

    AttachFile(selector, filePath) {
        cy.get(selector).attachFile(filePath);
    }

    Clickwithindexandvalidation(selector, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).should('be.visible').click({ force: true });
    }

    ClearAndTypeWithXpath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).clear().type(text)
    }

    ClearAndType(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).clear().type(text);
    }

    PricingURL() {
        cy.visit(`${envDetails.backendApiUrl}/settings/pricing?state=succeeded`);
    }

    Clear(selector) {
        cy.get(selector, { timeout: extraTimeOut }).clear()
    }

    ElementToBeClickable(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('not.be.disabled')
    }

    ElementToBeClickableXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('not.be.disabled')
    }

    ElementNotClickableXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('be.disabled')
    }

    ScrollAndClick(selector) {
        cy.get(selector, { timeout: extraTimeOut }).scrollIntoView().click({ force: true })
    }

    ScrollAndClickxpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).scrollIntoView().click({ force: true })
    }

    GetAttribute(selector, attributeName, expectedText) {
        cy.get(selector, { timeout: extraTimeOut })
            .invoke('attr', attributeName)
            .then((actualValue) => {
                const actualValueTrimmed = actualValue.trim();
                cy.log(`Actual Value : ${actualValueTrimmed}`);

                expect(actualValueTrimmed).to.equal(expectedText);
            });
    }

    GetText(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).invoke('text').then((ActualValue) => {
            const ActualValue1 = ActualValue.trim();
            cy.log(`Actual Value : ${ActualValue1}`)

            expect(ActualValue1).to.equal(text);
        })
    }

    GetTextXpath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).invoke('text').then((ActualValue) => {
            const ActualValue1 = ActualValue.trim();
            cy.log(`ActualValue : ${ActualValue1}`)
            console.log(`ActualValue : ${ActualValue1}`)

            expect(ActualValue1).to.equal(text);
        })
    }

    Exist(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('exist');
    }

    NotExist(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('not.exist');
    }

    NotExistxpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('not.exist');
    }

    ElementXpathAttrCheck(xpath, attrName) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('have.attr', attrName);
    }

    ElementXpathAttrCheckNot(xpath, attrName) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('not.have.attr', attrName);
    }

}

export default new methods();