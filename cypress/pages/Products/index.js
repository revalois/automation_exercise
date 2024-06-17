const productElement = require('./elements').ELEMENTS;
const homeElement = require('../home_elements').HOME_ELEMENTS;

class Products {
  goToProductPage() {
    cy.get(homeElement.products).click();
  }

  searchProduct() {
    cy.get(productElement.searchProducts).type('summer white top');
    cy.get(productElement.submitSearch).click();
  }

  addToCart() {
    cy.get(productElement.addToCart).click();
  }
}

export default new Products();
