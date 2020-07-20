/// <reference types="cypress" />

describe('HomePage', () => {
  context('Page renders', () => {
    it('displays the Home page when unauthenticated', () => {
      cy.visit('/')

      cy.document().toMatchImageSnapshot()
      cy.findByText('React Boilerplate')
    })

    it('displays the Home page when authenticated', () => {
      cy.login()
      cy.visit('/')

      cy.document().toMatchImageSnapshot()
      cy.findByText('React Boilerplate')
    })
  })
})
