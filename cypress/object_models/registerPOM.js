class RegisterPage{
    get firstNameInput(){
        return cy.get("#first-name")
    }
    get lastNameInput(){
        return cy.get("#last-name")
    }
    get emailInput(){
        return cy.get('#email')
    }
    get passwordFiled(){
        return cy.get("#password")
    }
    get passwordConfirmationI(){
        return cy.get("#password-confirmation")
    }
    get tosCheckBox(){
        return cy.get(":checkbox")
    }
    get submitButton(){
        return cy.get("button")
    }
    register(firstName, lastName, email, passwordInput, passwordConfirmation, checkbox ){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordFiled.type(passwordInput)
        this.passwordConfirmationI.type(passwordConfirmation)
        this.tosCheckBox.check(checkbox)
        this.submitButton.click()
    }
}
export const registerPage = new RegisterPage()