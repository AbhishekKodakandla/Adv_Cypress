# Bing search functionality feature file

Feature: Search functionality on Bing.com

    @sanity
    Scenario: Search for a cypress on Bing.com
    Given user is on the Bing homepage
    When user enter "Cypress" in the search bar and click on enter
    Then user should view search results related to "Cypress"

