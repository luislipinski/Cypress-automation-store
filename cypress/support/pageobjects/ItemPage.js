/// <reference types="Cypress" />

import itemPageElements from "../elements/ItemPageElements.json"

class ItemPageElements{
    validPageProduct() {
        cy.get(itemPageElements.buyBlock).should('be.visible')
    }
    addToCart() {
        cy.get(itemPageElements.addToCart).click()
    }
}

export default ItemPageElements;