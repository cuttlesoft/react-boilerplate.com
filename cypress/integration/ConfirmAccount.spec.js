/// <reference types="cypress" />

describe('ConfirmAccount', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.server()
    })

    it('displays an error message with an invalid token', () => {
      // Mock the `login` API endpoint with an unsuccessful response
      cy.route({
        method: 'GET',
        url: `${Cypress.env('API_BASE_URL')}/confirm/?token=abc123&uid=123abc`,
        status: 401,
        response: 'fixture:confirm-invalid-token.json',
      })

      cy.visit('/confirm-account?token=abc123&uid=123abc')

      cy.url()
        .should('include', '/confirm-account')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })

      cy.findByText('Error confirming account')
    })

    it('displays an error if logged in', () => {
      cy.login()
      cy.visit('/confirm-account?token=abc123&uid=123abc')

      cy.findByText('Cannot confirm account')
      cy.findByText('You cannot confirm an account while you are logged in.')
      cy.findByText('Please log out and try again.')
    })

    it('redirects to login with a valid token', () => {
      // Mock the `login` API endpoint with an unsuccessful response
      cy.route({
        method: 'GET',
        url: `${Cypress.env('API_BASE_URL')}/confirm/?token=abc123&uid=123abc`,
        status: 200,
        response: 'fixture:confirm-valid-token.json',
      })

      cy.visit('/confirm-account?token=abc123&uid=123abc')

      cy.url()
        .should('include', '/login?confirmed=true')
        .then(() => {
          cy.findByText('Your email address has been confirmed. You may now log in.')
          cy.document().toMatchImageSnapshot()
        })
    })
  })
})
