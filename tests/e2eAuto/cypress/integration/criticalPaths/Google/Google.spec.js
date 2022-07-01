////<reference path= '../../../support/index.d.ts'/>
/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')

import { Given, Then, Before, When, After } from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../../../pageObjects/googlePage';

let myBeforeCount = 0;

const googlePage = new GooglePage();

Before(() => {
    expect(myBeforeCount).to.be.lessThan(2);
    myBeforeCount += 1;
});

Given('I am on page', () =>{
  cy.visit('https://www.google.com/')
})

When('I search a text {string} on Google', (text) => {
  googlePage.search(text);
});
Then('I see the search result list page', () => {
  googlePage.seeResultNo();
});