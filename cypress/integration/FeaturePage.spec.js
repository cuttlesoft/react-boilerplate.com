/// <reference types="cypress" />

describe('Feature page', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/features')
    })

    it('displays the Feature page', () => {
      cy.url()
        .should('include', '/features')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Features')
    })
  })
})
