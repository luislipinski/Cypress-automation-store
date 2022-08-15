Feature: Create account in Store

    # Scenario: Create a account in the site Store
    #     Given Acces the home page
    #     When Access the forms for create account
    #     Then fill the forms and submit

    Scenario: Mensagem error invalid email
        Given Acces the home page
        When acces the sign in page
        And click in create an acount with email address enpty
        Then valid the error mesage

    Scenario: Mensagem when email exist
        Given Acces the home page
        When acces the sign in page
        And fill the email exist
        And submit the Create an account
        Then valid the error mesage email exist