/// <reference types="Cypress" />

import checkoutPageElements from '../elements/CheckoutPageElements.json'
import registesAccountData from '../../fixtures/data/RegisterAccountData.json'

class CheckoutPage {
    validateAdress() {
        cy.get(checkoutPageElements.adress.validateAdress).should('have.text', 'Your delivery address')
        cy.get(checkoutPageElements.adress.nameComplete).should('have.text', registesAccountData.data.personalInfo.firstName + ' ' + registesAccountData.data.personalInfo.lastName)
        cy.get(checkoutPageElements.adress.company).should('have.text', registesAccountData.data.yourAdress.company)
        cy.get(checkoutPageElements.adress.adressComplete).should('have.text', registesAccountData.data.yourAdress.address + ' ' + registesAccountData.data.yourAdress.complement)
        cy.get(checkoutPageElements.adress.cityStatePostCode).should('have.text', registesAccountData.data.yourAdress.city + ', Washington ' + registesAccountData.data.yourAdress.postalCode)
        cy.get(checkoutPageElements.adress.contact).should('have.text', registesAccountData.data.yourAdress.homePhone)
        cy.get(checkoutPageElements.btnProcedToCheckout).click()
    }
}

export default CheckoutPage;