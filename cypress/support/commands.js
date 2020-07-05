// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
import 'cypress-plugin-snapshots/commands'

/**
 * Command - Login
 *
 * Login a user with a given email and password (or use the default values).
 * - Mock the `login` API endpoint with a successful response
 * - Navigate to the login page
 * - Input credentials and submit the form
 * - After logging in, we're automatically redirected to the dashboard
 */
Cypress.Commands.add('login', (email = 'engineering@cuttlesoft.com', password = 'password123') => {
  // Mock the `login` API endpoint with a successful response
  cy.server()
  cy.route({
    method: 'POST',
    url: `${Cypress.env('API_BASE_URL')}/login/`,
    status: 200,
    response: 'fixture:login-valid-credentials.json',
  })

  // Navigate to the login page
  cy.visit('/login')

  // Input credentials and submit the form
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
  cy.get('form').submit()

  // After logging in, we're automatically redirected to the dashboard
  cy.url().should('include', '/dashboard')
  cy.get('h2').should('contain', 'Dashboard')
})
