import { navigation} from "../object_models/navigacija.js"
import { registerPage } from "../object_models/registerPOM.js"

describe('Register test', () => {
    beforeEach(() =>{
        cy.visit("/")
        navigation.clickRegisterButton()
    })

    const registerCredentials = {
        firstName: "luka",
        lastName: 'Persaj',
        email: "luka.persaj991@map.com",
        password: "luka1234",
        passwordConfirmation: "luka1234"
    }
    const registerCredentials1 = {
        lastName: "persaj",
        email: "luka.persaj991@map.com",
        password: "luka1234",
        passwordConfirmation: "luka1234"
    }
    const registerCredentials2 = {
        firstName: "luka",
        email: "luka.persaj991@map.com",
        password: "luka1234",
        passwordConfirmation: "luka1234"
    }
    const registerCredentials3 = {
        firstName: "luka",
        lastName: "persaj",
        email: "luka.persaj991map.com",
        password: "luka1234",
        passwordConfirmation: "luka1234"
    }
    
    const registerCredentials5 = {
        firstName: "luka",
        lastName: "persaj",
        email: "lukapersaj991@mapcom",
        password: "luka1234",
        passwordConfirmation: "luka1234"
    }
    const registerCredentials6 = {
        firstName: "Luka",
        lastName: "Persaj",
        email: "luka.persaj99@map.com",
        password: "luka1234",
        passwordConfirmation: "luka12345"
    }
    const registerCredentials7 = {
        firstName: "Luka",
        lastName: "Persaj",
        email: "luka.persaj99@map.com"
    }

    it('Register with valid data', () => {
        registerPage.register(registerCredentials.firstName, registerCredentials.lastName, registerCredentials.email, registerCredentials.password, registerCredentials.passwordConfirmation)
        cy.url().should("include", "/register")
    });

    it('Try to register an account by leaving first name field empty', () => {
       registerPage.registerWithoutFirstName(registerCredentials1.lastName, registerCredentials1.email, registerCredentials1.password, registerCredentials1.passwordConfirmation)
    });

    it('Try to register an account by leaving last name field empty', () => {
        registerPage.registerWithoutLastName(registerCredentials2.firstName, registerCredentials2.email, registerCredentials2.password, registerCredentials2.passwordConfirmation)
    });

    it('Try to register an account by not providing @ in email field', () => {
        registerPage.register(registerCredentials3.firstName, registerCredentials3.lastName, registerCredentials3.email, registerCredentials3.password, registerCredentials3.passwordConfirmation)
    });


    it('Try to register an account by not providing the points into the email field', () => {
       registerPage.register(registerCredentials5.firstName, registerCredentials5.lastName, registerCredentials5.email, registerCredentials5.password, registerCredentials5.passwordConfirmation)
    });

    it('Try to register an account with password confirmation not matching', () => {
       registerPage.register(registerCredentials6.firstName, registerCredentials6.lastName, registerCredentials6.email, registerCredentials6.password, registerCredentials6.passwordConfirmation)
    });

    it.only('Try registering an account by leaving password fields empty', () => {
       registerPage.registerWithoutPasswordFields(registerCredentials7.firstName, registerCredentials7.lastName, registerCredentials7.email)
    });
   
})