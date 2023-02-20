import {navigation} from '../object_models/navigacija.js'
import {loginPage} from '../object_models/loginPOM.js'
import { faker } from '@faker-js/faker';






describe("login tests", () => {
    before("visit app and login", () =>{
        cy.visit("/")
        navigation.clickLoginButton()
        cy.url().should("include", '/login')
        loginPage.loginPageHeading
        .should("be.visible")
        .and("have.text", "Please login")
    })
    const userCredentials = {
        userEmail:'lukap@map.com',
        userPassword: 'luka1234',
        invalidEmail: faker.internet.email(),
        invalidPassword: faker.lorem.word(),
    };
    const userCredentials1 = {
        userPassword: 'luka1234',
    }
    const userCredentials2 = {
        userEmail:'lukap@map.com'
    };
    const userCredentials3 = {
        invalidEmail:'lukapmap.com',
        userPassword: 'luka1234',
    };
    const userCredentials4 = {
        userEmail:'lukap@.com',
        userPassword: 'luka1234',
    };

    const userCredentials5 = {
        userEmail:'lukap@mapcom',
        userPassword: 'luka1234',
    };
    
    const userCredentials7 = {
        userEmail:'lukap@map.com',
        userPassword: 'luka12345',
    };
    const userCredentials8 = {
        userEmail:'/',
        userPassword: '/',
    };
    const userCredentials9 = {
        userEmail:'lukap123@map.com',
        userPassword: 'luka1234',
    };
    it('login with valid credentials', () => {
        loginPage.login(userCredentials.userEmail, userCredentials.userPassword)

    });


    it('Try to login by leaving email field empty', () => {
        loginPage.loginWithEmptyEmail(userCredentials1.userPassword)
        cy.url().should("include", "/login")

        
        
    });

    it.only('Try to login by leaving password field empty', () => {
       loginPage.loginWithEmptyPassword(userCredentials2.userEmail)
       cy.url().should("include", "/login")
    });

    it('Try to log in by providing invalid email without @', () => {
        loginPage.login(userCredentials3.invalidEmail, userCredentials3.userPassword)
        cy.url().should("include", "/login")
        
     
    })

    it('Try to log in by providing invalid email without domen', () => {
        loginPage.login(userCredentials4.userEmail, userCredentials4.userPassword)
    });

    it('Try to log in by providing invalid email without point', () => {
        loginPage.login(userCredentials5.userEmail, userCredentials5.userPassword)
        loginPage.errorMessage
        .should("be.visible")
        .and("have.text", "Bad Credentials")
        .and("exist")
    });

    it('Try to log in by providing inccorect password', () => {
        loginPage.login(userCredentials7.userEmail, userCredentials7.userPassword)
        loginPage.errorMessage
        .should("be.visible")
        .and("have.text", "Bad Credentials")
        .and("exist")
       
    
    });
        
    it('Try to log in by leaving email and password field empty', () => {
        loginPage.login(userCredentials8.userEmail, userCredentials8.userPassword)

    });

    it('Try to log in by providing bad email and correct password', () => {
        loginPage.login(userCredentials9.userEmail, userCredentials9.userPassword)
        loginPage.errorMessage
        .should("be.visible")
        .and("exist")
        .and("have.text", "Bad Credentials")
    });

})