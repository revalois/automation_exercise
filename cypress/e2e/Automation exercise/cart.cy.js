import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Products from '../../pages/Products';

describe('Shopping at Automation exercise', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Signup to the platform', () => {
    Signup.goToSigninPage();
    Signup.accessSignInForm();
    Signup.fillSignInForm();
  });

  it('Login and logout to the platform', () => {
    Login.login();
    Login.logout();
  });

  it.only('Add products to cart', () => {
    Login.login();
    Products.goToProductPage();
    Products.searchProduct();
    Products.addToCart();
  });
});
