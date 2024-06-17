const loginElement = require('./elements').LOGIN_ELEMENTS;
const homeElement = require('../home_elements').HOME_ELEMENTS;

class Login {
  login() {
    cy.get(homeElement.signupLogin).click();
    cy.get(loginElement.login_email).type('email@test1.com');
    cy.get(loginElement.login_password).type('password');
    cy.get(loginElement.loginButton).click();
  }

  logout() {
    cy.get(homeElement.signupLogin).click();
    cy.get(homeElement.home).click();
  }
}

export default new Login();
