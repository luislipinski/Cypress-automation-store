/// <reference types="Cypress" />

import homePageElements from '../elements/HomePageElements'

const url = Cypress.config("baseUrl")

class HomePage {
    accessTheStore() {
        cy.visit(url)
        cy.get(homePageElements.imgLogo).should("be.visible")
    }

    accessLoginPage() {
        cy.get(homePageElements.signInButton).should("be.visible").click()
    }

    itenOfStore(item) {
        cy.get(homePageElements.imgIten).eq(item).trigger('mouseover')
        cy.get(homePageElements.btnAddToCart).eq(item).click()
    }

    validateModalAddCart() {
        cy.get(homePageElements.validateModalAddCart).should('be.visible')
    }

    procedToCheckout() {
        cy.get(homePageElements.btnProcedCheckout).click()
    }


}

export default HomePage;