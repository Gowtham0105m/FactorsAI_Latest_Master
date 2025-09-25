import userDetails1 from '../../fixtures/userDetails1.json';
import envDetails from '../../fixtures/envDetails.json';
import { extraTimeOut,Timeout } from '../Utils';
import methods from '../../support/Common_Method.js'

const Login1 = () => {

  // open login page url
  cy.visit(`${envDetails.backendApiUrl}/login`)
  cy.get('#login',{ timeout: extraTimeOut }).should('be.visible')
  cy.wait(Timeout.xs)
  // methods.CompareScreenShot('LoginPage')
  //Login form elements - visible + fill
  cy.get('#login_form_username',{ timeout: extraTimeOut }).should('be.visible').type(userDetails1.email).should('have.value', userDetails1.email)
  cy.get('#login_form_password',{ timeout: extraTimeOut }).should('be.visible').type(userDetails1.password).should('have.value', userDetails1.password)
  //click on login button
  cy.get('[type="submit"]').should('be.visible').click()
  cy.wait(Timeout.xs) //wait till the api loads 

}


export default Login1

