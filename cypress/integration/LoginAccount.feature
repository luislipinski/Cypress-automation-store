Feature: Login your account in store

    Scenario: Make a login with a valid user
        Given acces the sign in page
        When I put my valid access data
        And click in login
        Then i can see my secret page