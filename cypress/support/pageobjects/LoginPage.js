/// <reference types="Cypress" />

import loginPageElements from "../elements/LoginPageElements.json"



class LoginPage {
    locateTextCreateAccount() {
        cy.get(loginPageElements.textCreateAnAccount).should("have.text", "Create an account")
    }

    fillTheemailInForm(email) {
        cy.get(loginPageElements.fieldEmail).click().type(email)
        
    }

    submitButtonCreateAnAccount() {
        cy.get(loginPageElements.buttonCreateAnAccount).click()

    }

    invalidEmail(mensage) {
        cy.get(loginPageElements.error.invalidEmail).should('have.text', mensage)
    }
}

export default LoginPage;