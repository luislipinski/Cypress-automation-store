/// <reference types="Cypress" />

import registerFormElements from "../elements/RegisterFormElements.json"
import registerAccountData from "../../fixtures/data/RegisterAccountData.json"

class RegisterAccountPage {
    fillTheForm() {
        cy.get(registerFormElements.form.validationTextRegistrationForm).should('be.visible')
        cy.get(registerFormElements.form.titleField).click()
        cy.get(registerFormElements.form.firstNameField).click().type(registerAccountData.data.personalInfo.firstName)
        cy.get(registerFormElements.form.lastNameField).click().type(registerAccountData.data.personalInfo.lastName)
        cy.get(registerFormElements.form.emailField).should('have.value', registerAccountData.data.personalInfo.email)
        cy.get(registerFormElements.form.passwordField).click().type(registerAccountData.data.personalInfo.password)

    }
}

export default RegisterAccountPage;