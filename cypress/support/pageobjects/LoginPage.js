/// <reference types="Cypress" />

import loginPageElements from "../elements/LoginPageElements.json"
import registerAccountData from "../../fixtures/data/RegisterAccountData.json"

class LoginPage {
    locateTextCreateAccount() {
        cy.get(loginPageElements.textCreateAnAccount).should("have.text", "Create an account")
    }

    fillTheemailInForm() {
        cy.get(loginPageElements.fieldEmail).click().type(registerAccountData.data.personalInfo.email)
        cy.get(loginPageElements.buttonCreateAnAccount).click()
    }
}

export default LoginPage;