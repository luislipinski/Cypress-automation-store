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
    loginPage.fillTheLogin("valido");
})

When("I put invalid user with correct password", () => {
    loginPage.fillTheLogin("emailInvalido");
})

When("I put correct user with incorrect password", () => {
    loginPage.fillTheLogin("passwordInvalido");
})

When("i fill the password and login empty", () => {
    loginPage.fillTheLogin("loginEmpty");
})

When("i fill the login and password empty", () => {
    loginPage.fillTheLogin("passwordEmpty");
})

And("click in login", () => {
    loginPage.submitLogin();
})

Then("i can see my secret page", () => {
    userSecretPage.validationSecretPage();
})

Then("i see the mensage of error", () => {
    loginPage.errorLogin('Authentication failed.');
})

Then("i see the mensage of login empty", () => {
    loginPage.errorLogin('An email address required.');
})

Then("i see the mensage of password empty", () => {
    loginPage.errorLogin('Password is required.');
})