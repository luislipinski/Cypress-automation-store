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

    validateShipping() {
        cy.get(checkoutPageElements.shipping).should('be.visible')
    }

    acceptTermsOfService() {
        cy.get(checkoutPageElements.checkBoxTermsOfService).click()
    }

    btnProcedToCheckout() {
        cy.get(checkoutPageElements.btnProcedToCheckout).click()
    }

    validatePayment(productName, unitPrice, qty, totalProduct, totalAllProduct) {
        cy.get(checkoutPageElements.cartSummary.nameProduct).contains(productName)
        cy.get(checkoutPageElements.cartSummary.priceProduct).contains(unitPrice)
        cy.get(checkoutPageElements.cartSummary.qty).contains(qty)
        cy.get(checkoutPageElements.cartSummary.priceTotalProduct).contains(totalProduct)
        cy.get(checkoutPageElements.cartSummary.priceTotalAllProducts).contains(totalAllProduct)
    }

    payBank(){
        cy.get(checkoutPageElements.btnPayBank).click()
    }

    payCheck() {
        cy.get(checkoutPageElements.btnPayCheck).click()
    }

    bankWirePayment() {
        cy.get(checkoutPageElements.bankWirePayment.textChoiceBankWirePayment).contains('You have chosen to pay by bank wire. Here is a short summary of your order:')
    }

    btnConfirmOrder() {
        cy.get(checkoutPageElements.btnConfirmOrder).click()
    }

    validateEndCheckout() {
        cy.get(checkoutPageElements.validateEndCheckout).should('have.text', 'Your order on My Store is complete.')
    }
}

export default CheckoutPage;