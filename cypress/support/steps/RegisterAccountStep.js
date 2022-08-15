/* global Given, Then, When */


import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import RegisterAccountPage from '../pageobjects/RegisterAccountPage'
const homePage = new HomePage
const loginPage = new LoginPage
const registerAccountPage = new RegisterAccountPage

Given("Acces the home page", () =>{
    homePage.accessTheStore();
})

When("Access the forms for create account", () => {
    homePage.accessLoginPage();
    loginPage.locateTextCreateAccount();
    loginPage.fillTheemailInForm();
    registerAccountPage.fillTheForm();
})
   