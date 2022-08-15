/* global Given, Then, When */


import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import RegisterAccountPage from '../pageobjects/RegisterAccountPage'
import UserSecretPage from '../pageobjects/UserSecretPage'
const homePage = new HomePage
const loginPage = new LoginPage
const registerAccountPage = new RegisterAccountPage
const userSecretPage = new UserSecretPage

Given("Acces the home page", () =>{
    homePage.accessTheStore();
})

When("Access the forms for create account", () => {
    homePage.accessLoginPage();
    loginPage.locateTextCreateAccount();
    loginPage.fillTheemailInForm();
})

Then("fill the forms and submit", () => {
    registerAccountPage.fillTheForm()
    userSecretPage.validationSecretPage()
})
   