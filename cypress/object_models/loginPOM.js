
class LoginPage {
    get emailInput(){
        return cy.get('#email')
    }
    get loginPageHeading(){
        return cy.get("h1");
    }
    get passwordInput(){
        return cy.get('#password');
    }
    get submitButton(){
        return cy.get("button");
    }
    get errorMessage(){
        return cy.get(".alert-danger");
    }

    login(email,password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
    loginWithEmptyEmail(password){
        this.passwordInput.type(password)
        this.submitButton.click()
    }
    loginWithEmptyPassword(email){
        this.emailInput.type(email)
        this.submitButton.click()
    }
   
}
export const loginPage = new LoginPage()