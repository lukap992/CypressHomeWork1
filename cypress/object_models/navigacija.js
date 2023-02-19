
class Navigacija {
    get loginButton(){
        return cy.get("a[href='/login']")
    }
    
    get registerButton(){
        return cy.get("a[href='/register']")
    }
    get createGallery(){
        return cy.get("a[href='/create']")
    }

    clickLoginButton(){
        this.loginButton.click()
    }
    clickRegisterButton(){
        this.registerButton.click()
    }
    clickCreateGalleryBtn(){
        this.createGallery.click()
    }
}
export const navigation = new Navigacija()