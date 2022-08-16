Feature: Login your account in store

    Scenario: Make a login with a valid user
        Given acces the sign in page
        When I put my valid access data
        And click in login
        Then i can see my secret page

    Scenario: Attempt to login with invalid username
        Given acces the sign in page
        When I put invalid user with correct password
        And click in login
        Then i see the mensage of error

    Scenario: Attempt to login with invalid password
        Given acces the sign in page
        When I put correct user with incorrect password
        And click in login
        Then i see the mensage of error

    Scenario: login empty
        Given acces the sign in page
        When i fill the password and login empty
        And click in login
        Then i see the mensage of login empty

    Scenario: password empty
        Given acces the sign in page
        When i fill the login and password empty
        And click in login
        Then i see the mensage of password empty