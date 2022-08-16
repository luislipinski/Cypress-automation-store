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

    fillTheLogin(status) {
        switch(status) {
            case "valido":
                cy.get(loginPageElements.emailLogin).click().type(loginAccountData.email)
                cy.get(loginPageElements.passwordLogin).click().type(loginAccountData.password)
                break;
            case "emailInvalido":
                cy.get(loginPageElements.emailLogin).click().type(loginAccountData.error.invalidLogin)
                cy.get(loginPageElements.passwordLogin).click().type(loginAccountData.password)
                break;
            case "passwordInvalido":
                cy.get(loginPageElements.emailLogin).click().type(loginAccountData.email)
                cy.get(loginPageElements.passwordLogin).click().type(loginAccountData.error.invalidPassword)
                break;
            case "loginEmpty":
                cy.get(loginPageElements.passwordLogin).click().type(loginAccountData.password)
                break;
            case "passwordEmpty":
                cy.get(loginPageElements.emailLogin).click().type(loginAccountData.email)
                break;
        }
        
    }

    submitLogin() {
        cy.get(loginPageElements.LoginButton).click()
    }

    errorLogin(mensage) {

        switch(mensage) {
            case 'Authentication failed.':
                cy.get(loginPageElements.error.invalidLogin).should('have.text', mensage)
                break;
            case 'An email address required.':
                cy.get(loginPageElements.error.invalidLogin).should('have.text', mensage)
                break;
            case 'Password is required.':
                cy.get(loginPageElements.error.invalidLogin).should('have.text', mensage)
                break;
        
        }
        
    }
}

export default LoginPage;