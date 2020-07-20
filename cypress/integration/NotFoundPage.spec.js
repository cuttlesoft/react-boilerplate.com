/// <reference types="cypress" />

describe('NotFoundPage', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.visit('/non-existent-page')
    })

    it('displays the NotFound page', () => {
      cy.url()
        .should('include', '/non-existent-page')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })

      cy.findByText('😢')
    })
  })
})
