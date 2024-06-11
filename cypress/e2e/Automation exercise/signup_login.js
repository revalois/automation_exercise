import Signup from '../../support/pages/Signup';

describe('Shopping at Automation exercise', () => {
  it('Signup to the platform', () => {
    Signup.goToSigninPage();
    Signup.accessSignInForm();
    Signup.fillSignInForm(); //
  });

  it('Login', () => {
    // Signup.goToSigninPage();
  });

  it('Add a product to cart', () => {});

  it('Remove product prom the cart', () => {});

  it('Logout', () => {});
});
