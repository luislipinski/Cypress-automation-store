/* global Given, Then, When */

import HomePage from "../pageobjects/HomePage"
import CartPage from "../pageobjects/CartPage"
const homePage = new HomePage
const cartPage = new CartPage

When("i click in add to cart", () => {
    homePage.itenOfStore(3);
    homePage.validateModalAddCart();
    homePage.procedToCheckout();
})

Then("i can see my item in my cart", () => {
    cartPage.itenCart();
})