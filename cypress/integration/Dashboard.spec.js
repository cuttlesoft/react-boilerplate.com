/// <reference types="cypress" />

describe('Dashboard', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/dashboard')
    })

    it('displays the dashboard', () => {
      cy.url()
        .should('include', '/dashboard')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Dashboard')
    })
  })
})
