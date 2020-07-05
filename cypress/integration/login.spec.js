/// <reference types="cypress" />

// Be sure to run `npm start` to start the server
// before running the tests below.

describe('Logging In', () => {
  const username = 'engineering@cuttlesoft.com'
  const password = 'password123'

  context('Unauthorized', () => {
    it('redirects from /dashboard when not logged in', () => {
      // we must have a valid session cookie to be logged
      // in else we are redirected to /unauthorized
      cy.visit('/dashboard')
      cy.get('h2').should('contain', 'Login')

      cy.url().should('include', 'login')
    })
  })

  context('Form validation', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    it('requires all fields', () => {
      cy.findByRole('button', { name: /Login/i }).click()
      cy.findByRole('button', { name: /Login/i })
        .should('exist')
        .click()

      // Ensure that two errors are shown
      cy.findAllByText('Required').then(requiredText => {
        expect(requiredText.length).to.equal(2)
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

    it('validates the password field', () => {
      // Enter an invalid password
      cy.get('input[name=password]')
        .type('a')
        .blur()

      // Ensure that the error is shown
      cy.findByText('Please enter more than 8 characters').should('be.visible')
    })

    it('validates the email field and password field at the same time', () => {
      // Enter an invalid email
      cy.get('input[name=email]')
        .type('engineering')
        .blur()

      // Enter an invalid password
      cy.get('input[name=password]')
        .type('a')
        .blur()

      // Ensure that the error is shown
      cy.findByText('Please enter a valid email address').should('be.visible')

      // Ensure that the error is shown
      cy.findByText('Please enter more than 8 characters').should('be.visible')
    })
  })

  context('Form submission', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.server()
    })

    it('displays errors on login', () => {
      cy.route({
        method: 'POST',
        url: 'http://0.0.0.0:8000/api/v1/login/',
        status: 400,
        response: 'fixture:login-invalid-credentials.json',
      })

      // incorrect username on purpose
      cy.get('input[name=email]').type(username)
      cy.get('input[name=password]').type('password123{enter}')

      // Ensure that the error is shown
      cy.findByText('Unable to log in with provided credentials.').should('be.visible')

      // and still be on the same URL
      cy.url().should('include', '/login')
    })

    it('logs in and redirects to dashboard with valid credentials', () => {
      cy.route({
        method: 'POST',
        url: 'http://0.0.0.0:8000/api/v1/login/',
        status: 200,
        response: 'fixture:login-valid-credentials.json',
      })

      cy.get('input[name=email]').type(username)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      // we should be redirected to /dashboard
      cy.url().should('include', '/dashboard')
      cy.get('h2').should('contain', 'Dashboard')
    })
  })

  context('Redirect messages when navigating from an email link', () => {
    it('displays the confirmed message', () => {
      cy.visit('/login?confirmed=true')

      // Ensure that the error is shown
      cy.findByText('Your email address has been confirmed. You may now log in.').should(
        'be.visible',
      )
    })

    it('displays the password changed message', () => {
      cy.visit('/login?reset=true')

      // Ensure that the error is shown
      cy.findByText('Your password has been changed. You may now log in.').should('be.visible')
    })

    it('displays the account created message', () => {
      cy.visit('/login?created=true')

      // Ensure that the error is shown
      cy.findByText('Your account has been created. You may now log in.').should('be.visible')
    })
  })

  context('Links to other pages', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
    it('links to the register page', () => {
      cy.findByText('or Create An Account').click()

      cy.url().should('include', '/register')
      cy.get('h2').should('contain', 'Create an account')
    })

    it('links to the forgot password page', () => {
      cy.findByText('Forgot Password?').click()

      cy.url().should('include', '/password-reset-request')
      cy.get('h2').should('contain', 'Forgot your password?')
    })

    it('links to the index page', () => {
      cy.findByText('React Boilerplate').click()

      cy.url().should('be', '')
      cy.get('h2').should('contain', 'Start your next react project in seconds')
    })
  })
})
