/// <reference types="cypress" />

describe('PasswordReset', () => {
  context('Page renders for each user type', () => {
    it('displays the PasswordReset page for an existing user', () => {
      cy.visit('/password-reset?token=abc123')

      cy.url()
        .should('include', '/password-reset?token=abc123')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Reset your password')
    })

    it('displays the PasswordReset page for a new user', () => {
      cy.visit('/password-reset?token=abc123&new_user=true')

      cy.url()
        .should('include', '/password-reset?token=abc123&new_user=true')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Complete Your Registration')
    })
  })

  context("Validates the user's token", () => {
    beforeEach(() => {
      cy.server()
    })

    it('displays an error message with an invalid token', () => {
      // Mock the `reset-password/validate_token/` API endpoint with an unsuccessful response
      cy.route({
        method: 'POST',
        url: `${Cypress.env('API_BASE_URL')}/reset-password/validate_token/`,
        status: 400,
        response: 'fixture:reset-invalid-token.json',
      })

      cy.visit('/password-reset?token=abc123')

      cy.url()
        .should('include', '/password-reset?token=abc123')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })

      cy.findByText('Token is invalid. Please check the URL or request a new link')
    })

    it('displays the form with a valid token', () => {
      // Mock the `reset-password/validate_token/` API endpoint with an unsuccessful response
      cy.route({
        method: 'POST',
        url: `${Cypress.env('API_BASE_URL')}/reset-password/validate_token/`,
        status: 200,
        response: 'fixture:reset-valid-token.json',
      })

      cy.visit('/password-reset?token=abc123')

      cy.url()
        .should('include', '/password-reset?token=abc123')
        .then(() => {
          cy.findByText('Submit')
          cy.document().toMatchImageSnapshot()
        })
    })
  })

  context('Validates the form and allows the user to reset their password', () => {
    beforeEach(() => {
      cy.server()

      // Mock the `reset-password/validate_token/` API endpoint with an unsuccessful response
      cy.route({
        method: 'POST',
        url: `${Cypress.env('API_BASE_URL')}/reset-password/validate_token/`,
        status: 200,
        response: 'fixture:reset-valid-token.json',
      })

      cy.visit('/password-reset?token=abc123')
    })

    it('requires all fields', () => {
      cy.findByRole('button', {
        name: /Submit/i,
      })
        .should('exist')
        .click()

      // Ensure that two errors are shown, one for password and one for password confirmation
      cy.findAllByText('Required').then(requiredText => {
        expect(requiredText.length).to.equal(2)
      })
    })

    it('validates the password field', () => {
      // Enter an invalid password
      cy.get('input[name=password]').type('a').blur()

      // Ensure that the error is shown
      cy.findByText('Please enter more than 8 characters').should('be.visible')
    })
  })
})
