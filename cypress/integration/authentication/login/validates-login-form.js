// /// <reference types="cypress" />

// import { When, Then } from 'cypress-cucumber-preprocessor/steps'

// const EMAIL = 'engineering@cuttlesoft.com'
// const PASSWORD = 'password123'

// When(/^I fill out the login form$/, () => {
//   cy.visit('/dashboard')
// })

// Then(/^I get redirected to the login page$/, () => {
//   // Ensure that two Login items are shown, one for the header and one for the button
//   cy.findAllByText('Login').then(requiredText => {
//     expect(requiredText.length).to.equal(2)
//   })

//   cy.url().should('include', 'login')
// })

// describe('Login', () => {
//   context('Form validation', () => {
//     beforeEach(() => {
//       cy.visit('/login')
//     })

//     it('requires all fields', () => {
//       cy.findByRole('button', { name: /Login/i })
//         .should('exist')
//         .click()

//       // Ensure that two errors are shown, one for email and one for password
//       cy.findAllByText('Required').then(requiredText => {
//         expect(requiredText.length).to.equal(2)
//       })
//     })

//     it('validates the email field', () => {
//       // Enter an invalid email
//       cy.get('input[name=email]')
//         .type('engineering')
//         .blur()

//       // Ensure that the error is shown
//       cy.findByText('Please enter a valid email address').should('be.visible')
//     })

//     it('validates the password field', () => {
//       // Enter an invalid password
//       cy.get('input[name=password]')
//         .type('a')
//         .blur()

//       // Ensure that the error is shown
//       cy.findByText('Please enter more than 8 characters').should('be.visible')
//     })

//     it('validates the email field and password field at the same time', () => {
//       // Enter an invalid email
//       cy.get('input[name=email]')
//         .type('engineering')
//         .blur()

//       // Enter an invalid password
//       cy.get('input[name=password]')
//         .type('a')
//         .blur()

//       // Ensure that the error is shown
//       cy.findByText('Please enter a valid email address').should('be.visible')

//       // Ensure that the error is shown
//       cy.findByText('Please enter more than 8 characters').should('be.visible')
//     })
//   })

//   context('Form submission', () => {
//     beforeEach(() => {
//       cy.visit('/login')
//       cy.server()
//     })

//     it('displays errors on login with invalid credentials', () => {
//       // Mock the `login` API endpoint with an unsuccessful response
//       cy.route({
//         method: 'POST',
//         url: `${Cypress.env('API_BASE_URL')}/login/`,
//         status: 400,
//         response: 'fixture:login-invalid-credentials.json',
//       })

//       // Attempt to login with invalid credentials, via enter-key submit
//       cy.get('input[name=email]').type(EMAIL)
//       cy.get('input[name=password]').type('password123{enter}')

//       // Ensure that the error is shown
//       cy.findByText('Unable to log in with provided credentials.').should('be.visible')

//       // Ensure that the URL has not changed
//       cy.url().should('include', '/login')
//     })

//     it('logs in and redirects to dashboard with valid credentials', () => {
//       // Mock the `login` API endpoint with a successful response
//       cy.route({
//         method: 'POST',
//         url: `${Cypress.env('API_BASE_URL')}/login/`,
//         status: 200,
//         response: 'fixture:login-valid-credentials.json',
//       })

//       // Input credentials and submit the form, via form submit
//       cy.get('input[name=email]').type(EMAIL)
//       cy.get('input[name=password]').type(PASSWORD)
//       cy.get('form').submit()

//       // After logging in, we're automatically redirected to the dashboard
//       cy.url().should('include', '/dashboard')
//       cy.findByText('Dashboard')
//     })
//   })

//   context('Redirect messages when navigating from an email link', () => {
//     it('displays the confirmed message', () => {
//       cy.visit('/login?confirmed=true')

//       // Ensure that the error is shown
//       cy.findByText('Your email address has been confirmed. You may now log in.').should(
//         'be.visible',
//       )
//     })

//     it('displays the password changed message', () => {
//       cy.visit('/login?reset=true')

//       // Ensure that the error is shown
//       cy.findByText('Your password has been changed. You may now log in.').should('be.visible')
//     })

//     it('displays the account created message', () => {
//       cy.visit('/login?created=true')

//       // Ensure that the error is shown
//       cy.findByText('Your account has been created. You may now log in.').should('be.visible')
//     })
//   })

//   context('Links to other pages', () => {
//     beforeEach(() => {
//       cy.visit('/login')
//     })

//     it('links to the register page', () => {
//       cy.findByText('or Create An Account').click()

//       cy.url().should('include', '/register')
//       cy.findByText('Create an account')
//     })

//     it('links to the forgot password page', () => {
//       cy.findByText('Forgot Password?').click()

//       cy.url().should('include', '/password-reset-request')
//       cy.findByText('Forgot your password?')
//     })

//     it('links to the index page', () => {
//       cy.findByText('React Boilerplate').click()

//       cy.url().should('be', '')
//       cy.findByText('Start your next react project in seconds')
//     })
//   })
// })
