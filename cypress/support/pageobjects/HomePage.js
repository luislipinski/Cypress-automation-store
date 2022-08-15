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

}

export default HomePage;