/// <reference types="Cypress" />

import cartPageElements from "../elements/CartPageElements.json"

class CartPage {
    itenCart() {
        cy.get(cartPageElements.tableCart).should('be.visible')
    }

    emptyCart() {
        cy.get(cartPageElements.cartEmpty).should('have.text', 'Your shopping cart is empty.')
    }

    procedToCheckout() {
        cy.get(cartPageElements.btnProcedToCheckout).click()
    }
}

export default CartPage;