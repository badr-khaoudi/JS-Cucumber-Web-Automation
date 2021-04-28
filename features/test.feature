# features/google-search.feature
Feature: Google search
    Scenario: Googling remarkablemark.
        Given I am on the LoginPage
        When I enter my credentials
        Then I log in
        Then Am on the HomePage