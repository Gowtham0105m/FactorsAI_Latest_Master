import userDetails2 from '../../fixtures/userDetails2.json';
import envDetails from '../../fixtures/envDetails.json';
import { extraTimeOut,Timeout } from '../Utils';

const Login2 = () => {

  // open login page url
  cy.visit(`${envDetails.backendApiUrl}/login`)

  //Login form elements - visible + fill
  cy.wait(Timeout.md)
  cy.get('#login_form_username',{ timeout: extraTimeOut }).should('be.visible').type(userDetails2.email).should('have.value', userDetails2.email)
  cy.wait(Timeout.sm)
  cy.get('#login_form_password',{ timeout: extraTimeOut }).should('be.visible').type(userDetails2.password).should('have.value', userDetails2.password)
  cy.wait(Timeout.sm)
  //click on login button
  cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()

  cy.wait(Timeout.xs) //wait till the api loads 

}


export default Login2