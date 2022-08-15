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
        cy.get(registerFormElements.form.dayOfBirth).select(1)
        cy.get(registerFormElements.form.monthsOfBirth).select(1)
        cy.get(registerFormElements.form.yearsOfBirth).select(31)
        cy.get(registerFormElements.form.checkBoxNewsLetter).click()
        cy.get(registerFormElements.form.checkBoxSpecialOffers).click()

        cy.get(registerFormElements.form.adressFirstNameField).should('have.value', registerAccountData.data.personalInfo.firstName)
        cy.get(registerFormElements.form.adressLastNameField).should('have.value', registerAccountData.data.personalInfo.lastName)
        cy.get(registerFormElements.form.companyField).click().type(registerAccountData.data.yourAdress.company)
        cy.get(registerFormElements.form.adressField).click().type(registerAccountData.data.yourAdress.address)
        cy.get(registerFormElements.form.adressLineTwoField).click().type(registerAccountData.data.yourAdress.complement)
        cy.get(registerFormElements.form.cityField).click().type(registerAccountData.data.yourAdress.city)
        cy.get(registerFormElements.form.state).select(50)
        cy.get(registerFormElements.form.postalCodeField).click().type(registerAccountData.data.yourAdress.postalCode)
        cy.get(registerFormElements.form.homePhoneField).click().type(registerAccountData.data.yourAdress.homePhone)
        cy.get(registerFormElements.form.mobilePhoneField).click().type(registerAccountData.data.yourAdress.homePhone)
        cy.get(registerFormElements.form.adressFutureReferenceField).click().clear().type(registerAccountData.data.personalInfo.email)
        cy.get(registerFormElements.form.registerButton).click()
        
    }
}

export default RegisterAccountPage;