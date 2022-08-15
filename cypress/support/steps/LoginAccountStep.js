/* global Given, Then, When */

import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";
import UserSecretPage from "../pageobjects/UserSecretPage";

const homepage = new HomePage
const loginPage = new LoginPage
const userSecretPage = new UserSecretPage

Given("acces the sign in page", () =>{
    homepage.accessTheStore();
    homepage.accessLoginPage();
    loginPage.locateTextCreateAccount();
})

When("I put my valid access data", () => {
    loginPage.fillTheLogin();
})

And("click in login", () => {
    loginPage.submitLogin();
})

Then("i can see my secret page", () => {
    userSecretPage.validationSecretPage();
})