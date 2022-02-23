/// <reference types="cypress" />

describe('UserProfile', () => {
  context('Page renders', () => {
    beforeEach(() => {
      cy.server()

      // Mock the `/users/:id` API endpoint with a successful response
      cy.route({
        method: 'GET',
        url: `${Cypress.env('API_BASE_URL')}/users/fb6c5bfe-e39f-4b67-954d-3a8aeb9689dd/`,
        status: 200,
        response: 'fixture:get-user-success.json',
      })

      cy.login()
      cy.visit('/profile')
    })

    it('displays the UserProfile page', () => {
      cy.url()
        .should('include', '/profile')
        .then(() => {
          cy.document().toMatchImageSnapshot()
        })
      cy.findByText('Basic Information')
    })
  })

  context('Update Information', () => {
    beforeEach(() => {
      cy.server()

      // Mock the `/users/:id` API endpoint with a successful response
      cy.route({
        method: 'GET',
        url: `${Cypress.env('API_BASE_URL')}/users/fb6c5bfe-e39f-4b67-954d-3a8aeb9689dd/`,
        status: 200,
        response: 'fixture:get-user-success.json',
      })

      cy.login()
      cy.visit('/profile')
    })

    it('allows the user to change their information', () => {
      // Mock the `users/:id/` API endpoint with a successful response
      cy.route({
        method: 'PATCH',
        url: `${Cypress.env('API_BASE_URL')}/users/fb6c5bfe-e39f-4b67-954d-3a8aeb9689dd/`,
        status: 200,
        response: 'fixture:update-user-success.json',
      })

      // Enter a valid name
      cy.get('input[name=firstName]').type('Emily').blur()

      cy.findByTestId('success-firstName')
    })

    it('does not allow invalid data', () => {
      // Mock the `users/:id/` API endpoint with a successful response
      cy.route({
        method: 'PATCH',
        url: `${Cypress.env('API_BASE_URL')}/users/fb6c5bfe-e39f-4b67-954d-3a8aeb9689dd/`,
        status: 400,
        response: 'fixture:update-user-invalid.json',
      })

      // Enter an invalid name
      cy.get('input[name=firstName]').type(
        '{backspace}{backspace}{backspace}{backspace}{backspace} ',
      )

      /** @todo: this isn't triggering the PATCH */
    })
  })
})
