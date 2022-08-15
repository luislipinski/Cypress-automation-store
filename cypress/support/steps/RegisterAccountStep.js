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
    loginPage.fillTheemailInForm(registerAccountData.data.personalInfo.email);
    loginPage.submitButtonCreateAnAccount();
})
When("Access the forms for create an account", () => {
    homePage.accessLoginPage();
    loginPage.locateTextCreateAccount();
    loginPage.fillTheemailInForm(registerAccountData.errorData.emailErrorForm);
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
    loginPage.fillTheemailInForm(registerAccountData.errorData.emailerror);
})

And("submit the Create an account", () => {
    loginPage.submitButtonCreateAnAccount()
})

And("click in Register for submit the forms", () => {
    registerAccountPage.submitTheRegister()
})

Then("fill the forms and submit", () => {
    registerAccountPage.fillTheForm()
    registerAccountPage.submitTheRegister()
    userSecretPage.validationSecretPage()
})

Then("valid the error mesage", () => {
    loginPage.invalidEmail('Invalid email address.')
})

Then("valid the error mesage email exist", () => {
    loginPage.invalidEmail('An account using this email address has already been registered. Please enter a valid password or request a new one. ')
})

Then("Valid all error mensage", () => {
    registerAccountPage.errorMesage()
})
   