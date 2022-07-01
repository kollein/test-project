/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath')

/* eslint-disable class-methods-use-this */
import BasePage from "./basePage"

class GooglePage extends BasePage {
  get searchBox() {
    return 'input[name=q]';
  }

  get searchButton() {
    return 'input[name=btnK]';
  }

  get resultNo() {
    return '#result-stats';
  }

  search(text) {
    this.setText(this.searchBox, text);
    this.clickOnElment(this.searchButton);
  }

  seeResultNo() {
    I.seeElement(this.resultNo);
  }
}
export default GooglePage;
