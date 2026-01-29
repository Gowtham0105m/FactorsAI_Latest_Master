describe('SolutionLogin', () => {

    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })

    it('SolutionLoginPage', () => {
        cy.visit('https://staging-app.factors.ai/')
        cy.get('#login_form_username').type('solutions@factors.ai')
        cy.get('#login_form_password').type('Test!2345')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        cy.xpath('//h1').should('be.visible').and('contain.text', 'FactorsAI')
        cy.get('[placeholder="Enter your email address"]').should('be.visible').type('sarath_tdfect@factors.ai')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        cy.wait(5000)
        cy.xpath('//h1[contains(@class,"ant-typography ant-typography")]').should('be.visible').and('contain.text', 'All Accounts')
        cy.get('#fa-at-dropdown--settings').click()
        cy.xpath('//header[contains(@class,"flex items-center")]//following::main').should('be.visible').and('contain.text', 'General')
        cy.xpath('//h4[text()="Touchpoints Definitions"]').click()
        cy.xpath('//td[text()="$term"]').scrollIntoView().click()
        cy.xpath('//div[text()="Channel Groups"]').scrollIntoView().click()
        cy.xpath('//th[text()="Conditions"]').should('be.visible').and('contain.text', 'Conditions')
        cy.xpath('//span[text()="Add New"]').click()
        cy.xpath('//div[text()="Add channel group"]').should('be.visible').and('conatin.text', 'Add channel group')
        cy.get('[placeholder="Channel"]').type('Testing')
        cy.xpath('//span[text()="Add new"]').click()
        cy.get('[placeholder="Search"]').type('Record ID')
        cy.get('[data-title="Hubspot Contact Record ID"]').click()
        cy.get('[data-title="equals"]').click()
        cy.xpath('(//div[@data-title])[1]').click()
        cy.xpath('//span[text()="Apply"]').click()
        cy.xpath('//span[text()="Save"]').click()

    })
})