/* global Given, Then, When */

import HomePage from "../pageobjects/HomePage"
import CartPage from "../pageobjects/CartPage"
import ItemPage from "../pageobjects/ItemPage"
import LoginPage from "../pageobjects/LoginPage"
import CheckoutPage from "../pageobjects/CheckoutPage"
const homePage = new HomePage
const cartPage = new CartPage
const itemPage = new ItemPage
const loginPage = new LoginPage
const checkoutPage = new CheckoutPage

Given("i access the page of a product", () => {
    homePage.accessTheProduct(5)
})

Given("I want to buy a product", () => {
    homePage.accessTheStore();
    homePage.itenOfStore(2);
    homePage.validateModalAddCart();
    homePage.procedToCheckout();
    cartPage.itenCart();    
})

When("i click in add to cart", () => {
    homePage.itenOfStore(3);
    homePage.validateModalAddCart();
    homePage.procedToCheckout();
})

When("i add this iten in my cart", () => {
    itemPage.validPageProduct();
    itemPage.addToCart();
    homePage.validateModalAddCart();
    homePage.procedToCheckout();
})

When("i access my cart without add item", () => {
    homePage.accessTheCart();
})

When("i make the purchase", () => {
    cartPage.procedToCheckout();
    loginPage.fillTheLogin("valido");
    loginPage.submitLogin();
    checkoutPage.validateAdress();
    checkoutPage.validateShipping();
    checkoutPage.acceptTermsOfService();
    checkoutPage.btnProcedToCheckout();
    checkoutPage.validatePayment('Printed Dress', '$26.00', 1, '$26.00', '$28.00');
    checkoutPage.payBank();
    checkoutPage.bankWirePayment();
    checkoutPage.btnConfirmOrder();
})

Then("i can see my item in cart", () => {
    cartPage.itenCart();
})

Then("i can see my card empty", () => {
    cartPage.emptyCart();
})

Then("I get the information that the purchase was made", () => {
    checkoutPage.validateEndCheckout()
})