Feature: Test purchase

    Scenario: add an iten in my cart
        Given Acces the home page
        When i click in add to cart
        Then i can see my item in cart

    Scenario: valid empty card
        Given Acces the home page
        When i access my cart without add item
        Then i can see my card empty

    Scenario: add an iten in my cart in page of product
        Given i access the page of a product
        When i add this iten in my cart
        Then i can see my item in cart

    Scenario: mensagem erro whent don't accept privacy polici
        Given I try purchase a product
        When i don't accept the terms of privacy polici
        Then i see the error mensagem

    Scenario:Make a purchase of a product
        Given I want to buy a product
        When i make the purchase
        Then I get the information that the purchase was made


