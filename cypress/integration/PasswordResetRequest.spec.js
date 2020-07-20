/// <reference types="cypress" />

describe('PasswordResetRequest', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.visit('/password-reset-request')
    })

    it('displays the PasswordResetRequest page', () => {
      cy.url()
        .should('include', '/password-reset-request')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Forgot your password?')
    })
  })

  context('Form validation', () => {
    beforeEach(() => {
      cy.visit('/password-reset-request')
    })

    it('requires all fields', () => {
      cy.findByRole('button', { name: /Submit/i })
        .should('exist')
        .click()

      // Ensure that two errors are shown, one for email and one for password
      cy.findAllByText('Required').then(requiredText => {
        expect(requiredText.length).to.equal(1)
      })
    })

    it('validates the email field', () => {
      // Enter an invalid email
      cy.get('input[name=email]')
        .type('engineering')
        .blur()

      // Ensure that the error is shown
      cy.findByText('Please enter a valid email address').should('be.visible')
    })
  })
})
