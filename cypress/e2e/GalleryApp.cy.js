
describe("gallery", () => {
    it('login with valid credentials', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Register with valid data', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to login by leaving email field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to login by leaving password field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@map.com");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing invalid email without @', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap99map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing invalid email without domen', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing invalid email without point', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@mapcom");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing invalid email with space', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("luka p@map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing inccorect password', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@992map.com");
        cy.get("#password").type("luka12345");
        cy.get(".btn-custom").click();
    });
        
    it('Try to log in by leaving email and password field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing incorrect email and correct password', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@9922map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });

    it('Try to register the account by leaving first name field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account by leaving last name field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account with invalid email by not providing @', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account with invalid email by entering the space', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka. persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account by not providing the points into the email field', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("lukapersaj99@mapcom");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account with password confirmation not matching', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");   
        cy.get("#password-confirmation").type("luka12345");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

    it('Try to register the account without checking the checkbox  ', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get("[type='submit']").click();
    });

    it.only('Try registering an account by leaving password fields empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("");
        cy.get("#password-confirmation").type("");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });

})