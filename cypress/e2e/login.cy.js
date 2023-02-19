import {navigation} from '../object_models/navigacija.js'
import {loginPage} from '../object_models/loginPOM.js'


describe("login", () => {
    beforeEach(() =>{
        cy.visit("")
        navigation.clickLoginButton()
    })
    const userCredentials = {
        userEmail:'lukap@map.com',
        userPassword: 'luka1234',
    }
    const userCredentials1 = {
        userEmail:'/',
        userPassword: 'luka1234',
    }
    const userCredentials2 = {
        userEmail:'lukap@map.com',
        userPassword: '/',
    }
    const userCredentials3 = {
        userEmail:'lukapmap.com',
        userPassword: 'luka1234',
    }
    const userCredentials4 = {
        userEmail:'lukap@.com',
        userPassword: 'luka1234',
    }
    const userCredentials5 = {
        userEmail:'lukap@mapcom',
        userPassword: 'luka1234',
    }
    const userCredentials6 = {
        userEmail:'lukap@mapcom',
        userPassword: 'luka1234',
    }
    const userCredentials7 = {
        userEmail:'lukap@map.com',
        userPassword: 'luka12345',
    }
    const userCredentials8 = {
        userEmail:'/',
        userPassword: '/',
    }
    const userCredentials9 = {
        userEmail:'lukap123@map.com',
        userPassword: 'luka1234',
    }
    it('login with valid credentials', () => {
        loginPage.login(userCredentials.userEmail, userCredentials.userPassword)

    });


    it('Try to login by leaving email field empty', () => {
        loginPage.login(userCredentials1.userEmail, userCredentials1.userPassword)
    });

    it('Try to login by leaving password field empty', () => {
       loginPage.login(userCredentials2.userEmail, userCredentials2.userPassword)
    });

    it('Try to log in by providing invalid email without @', () => {
        loginPage.login(userCredentials3.userEmail, userCredentials3.userPassword)
    });

    it('Try to log in by providing invalid email without domen', () => {
        loginPage.login(userCredentials4.userEmail, userCredentials4.userPassword)
    });

    it('Try to log in by providing invalid email without point', () => {
        loginPage.login(userCredentials5.userEmail, userCredentials5.userPassword)
    });

    it('Try to log in by providing invalid email with space', () => {
        loginPage.login(userCredentials6.userEmail, userCredentials6.userPassword)
    });

    it('Try to log in by providing inccorect password', () => {
        loginPage.login(userCredentials7.userEmail, userCredentials7.userPassword)
    });
        
    it('Try to log in by leaving email and password field empty', () => {
        loginPage.login(userCredentials8.userEmail, userCredentials8.userPassword)
    });

    it('Try to log in by providing bad email and correct password', () => {
        loginPage.login(userCredentials9.userEmail, userCredentials9.userPassword)
    });

})