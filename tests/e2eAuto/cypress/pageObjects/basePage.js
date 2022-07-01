/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */

/** Wait constants */
// eslint-disable-next-line no-unused-vars
const SHORT_WAITING_TIME = 20;
// eslint-disable-next-line no-unused-vars
const LONG_WAITING_TIME = 30;

class BasePage {

  /**
   *
   * @param {String} element
   */
  // eslint-disable-next-line class-methods-use-this
  clickOnElment(element) {
    cy.xpath(element, {timeout: 10000}).should('be.visible').scrollIntoView().click()
  }
  /**
   *
   * @param {String} element
   * @param {String} text
   */
  setText(element, text) {
    cy.xpath(element, {timeout: 10000}).should('be.visible').scrollIntoView().type(text)
  }
  /**
   *
   * @param {String} element
   * @param {number} offsetX
   * @param {String} offsetY
   */
  moveMouseTo(element, offsetX, offsetY) {
    cy.xpath(element, {timeout: 10000}).should('be.visible').scrollIntoView().trigger('mouseover', offsetX, offsetY)
  }
  
  async checkTextOnElement(element, text){
    cy.xpath(element, {timeout: 10000}).should('be.visible').scrollIntoView().should('have.text', text)
  }

  /**
   *
   * @param {String} url
   */
  navigateToPage(page) {
    cy.visit('http://localhost:8080/#/'+ page);
  }
}

export default BasePage;
