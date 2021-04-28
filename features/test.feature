# features/insperis-lively
Feature: Test feature for the login
    Scenario: Login scenario
        Given I am on the LoginPage
        When I enter my credentials
        Then I log in
        Then Am on the HomePage