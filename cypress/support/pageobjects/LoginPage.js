/// <reference types="Cypress" />

import loginPageElements from "../elements/LoginPageElements.json"
import loginAccountData from "../../fixtures/data/LoginAccountData.json"



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

    fillTheLogin() {
        cy.get(loginPageElements.emailLogin).click().type(loginAccountData.email)
        cy.get(loginPageElements.passwordLogin).click().type(loginAccountData.password)
    }

    submitLogin() {
        cy.get(loginPageElements.LoginButton).click()
    }
}

export default LoginPage;