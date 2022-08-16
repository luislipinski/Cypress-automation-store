/// <reference types="Cypress" />

import cartPageElements from "../elements/CartPageElements.json"

class CartPage {
    itenCart() {
        cy.get(cartPageElements.tableCart).should('be.visible')
    }
}

export default CartPage;