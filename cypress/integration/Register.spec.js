/// <reference types="cypress" />

describe('Register', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.visit('/register')
    })

    it('displays the Register page', () => {
      cy.url()
        .should('include', '/register')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Register')
    })
  })

  context('Form validation', () => {
    beforeEach(() => {
      cy.visit('/register')
    })

    it('requires all fields', () => {
      cy.findByRole('button', {
        name: /Register/i,
      })
        .should('exist')
        .click()

      // Ensure that six errors are shown, for each input field
      cy.findAllByText('Required').then(requiredText => {
        expect(requiredText.length).to.equal(6)
      })
    })

    it('validates the email field', () => {
      // Enter an invalid email
      cy.get('input[name=email]').type('engineering').blur()

      // Ensure that the error is shown
      cy.findByText('Please enter a valid email address')
    })

    it('validates the password field', () => {
      // Enter an invalid password
      cy.get('input[name=password]').type('a').blur()

      // Ensure that the error is shown
      cy.findByText('Please enter more than 8 characters')
    })

    it('validates the email field and password field at the same time', () => {
      // Enter an invalid email
      cy.get('input[name=email]').type('engineering').blur()

      // Enter an invalid password
      cy.get('input[name=password]').type('a').blur()

      // Ensure that the error is shown
      cy.findByText('Please enter a valid email address')

      // Ensure that the error is shown
      cy.findByText('Please enter more than 8 characters')
    })

    it('validates requires that the password and password confirmation match', () => {
      // Enter a valid password
      cy.get('input[name=password]').type('cuttleEngineering2020!').blur()

      // Enter a valid password confirmation
      cy.get('input[name=confirm_password]').type('cuttleEngineering2020').blur()

      // Ensure that two errors are shown, one for password and one for password confirmation
      cy.findAllByText('Passwords must match').then(lengthErrors => {
        expect(lengthErrors.length).to.equal(2)
      })
    })
  })
})
