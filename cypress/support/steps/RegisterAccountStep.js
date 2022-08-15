/* global Given, Then, When */


import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import RegisterAccountPage from '../pageobjects/RegisterAccountPage'
import UserSecretPage from '../pageobjects/UserSecretPage'
import registerAccountData from '../../fixtures/data/RegisterAccountData.json'
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
    loginPage.submitButtonCreateAnAccount();
})

When("acces the sign in page", () => {
    homePage.accessLoginPage();
    loginPage.locateTextCreateAccount();
})

And("click in create an acount with email address enpty", () => {
    loginPage.submitButtonCreateAnAccount();
})

And("fill the email exist", () => {
    loginPage.fillTheemailInForm(registerAccountData.data.personalInfo.email);
})

And("submit the Create an account", () => {
    loginPage.submitButtonCreateAnAccount()
})

Then("fill the forms and submit", () => {
    registerAccountPage.fillTheForm()
    userSecretPage.validationSecretPage()
})

Then("valid the error mesage", () => {
    loginPage.invalidEmail('Invalid email address.')
})

Then("valid the error mesage email exist", () => {
    loginPage.invalidEmail('An account using this email address has already been registered. Please enter a valid password or request a new one. ')
})
   