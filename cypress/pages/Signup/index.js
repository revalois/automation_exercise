// Ações de interação com a página

const signUpElement = require('./elements').SIGNIN_ELEMENTS;
const formElement = require('./elements').FORM_ELEMENTS;
const homeElement = require('../home_elements').HOME_ELEMENTS;

class SignIn {
  goToSigninPage() {
    cy.get(homeElement.signupLogin).click();
  }

  accessSignInForm() {
    cy.get(signUpElement.name).type('user1');
    cy.get(signUpElement.email).type('email@test1.com');
    cy.get(signUpElement.signupButton).click();
  }

  fillSignInForm() {
    cy.get(formElement.gender).click();
    cy.get(formElement.password).type('password');
    cy.get(formElement.day).select('1');
    cy.get(formElement.day).select('1');
    cy.get(formElement.month).select('June');
    cy.get(formElement.year).select('1993');
    cy.get(formElement.first_name).type('John');
    cy.get(formElement.last_name).type('Smith');
    cy.get(formElement.address).type('Street 1, 100');
    cy.get(formElement.country).select('Canada');
    cy.get(formElement.state).type('Ontario');
    cy.get(formElement.city).type('Toronto');
    cy.get(formElement.zipcode).type('123456');
    cy.get(formElement.mobile_number).type('+1123456789');
    cy.get(formElement.create_account).click();
  }
}

export default new SignIn();
