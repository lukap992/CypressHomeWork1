
describe("gallery", () => {
    it('login', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();


    });
    it('Register', () => {
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
    it('Try to login by leaving email filed empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });
    it('Try to login by leaving password field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@map.com");
        cy.get("#password").type("");
        cy.get(".btn-custom").click();
    });

    it('Try to log in by providing invalid email', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@992map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
    });
    it('Try to log in by providing inccoret password', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("lukap@992map.com");
        cy.get("#password").type("luka12345");
        cy.get(".btn-custom").click();
    });
    it('Try to log in by leaving email and password field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("");
        cy.get("#password").type("");
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
        cy.get("#first-name").type("");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });
    it('Try to register the account with invalid email', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj@99map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').check();
        cy.get("[type='submit']").click();
    });
    it('Try to register the account with two diffrent passwords in mandatory password fields', () => {
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
    it('Try to register the account with unchecking the checkbox  ', () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test123");
        cy.get("#email").type("luka.persaj99@map.com");
        cy.get("#password").type("luka1234");
        cy.get("#password-confirmation").type("luka1234");
        cy.get('[type="checkbox"]').uncheck();
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