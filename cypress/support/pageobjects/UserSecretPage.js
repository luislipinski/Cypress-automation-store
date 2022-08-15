/// <reference types="Cypress" />

import UserSecretPageElements from "../elements/UserSecretPageElements.json"

class UserSecretPage {
    validationSecretPage() {
        cy.get(UserSecretPageElements.validationSecretPage).should('have.text', 'My account')
    }
}

export default UserSecretPage;