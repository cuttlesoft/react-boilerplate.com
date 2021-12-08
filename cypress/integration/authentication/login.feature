Feature: Visit Login Page
    @e2e-test
    Scenario: Renders Login Page
        When I visit Login Page
        Then The login page renders

# @e2e-test
# Scenario: Redirects from Dashboard
#     When I visit the dashboard (unauthenticated)
#     Then I get redirected to the login page