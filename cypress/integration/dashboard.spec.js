/// <reference types="cypress" />

describe('Dashboard', () => {
  context('Displays the dashboard', () => {
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
      cy.get('h2').should('contain', 'Dashboard')
    })
  })
})
