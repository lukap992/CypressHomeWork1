///<reference types="Cypress"/>
import {loginPage} from '../object_models/loginPOM.js'
import { createGallery} from "../object_models/createGallery"
import { allGalleries } from '../object_models/allGalleries.js'
import { navigation } from '../object_models/Navigacija.js'

const credentials1 = {
    title: "slk",
    description: "slk",
    imageUrl: "https://tinypng.com/images/social/website.jpg"
}
const credentials2 = {
    title: "/",
    description: "test",
    imageUrl: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
}
const credentials3 = {
    title: "naslov",
    description: "/",
    imageUrl: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
}
const credentials4 = {
    title: "Create gallery by cypress POM",
    description: "Assertation",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/560px-Bananas.svg.png"
}
const credentials5 = {
    title: "/",
    description: "/",
    imageUrl: "/"
}

const credentials6 = {
    title: "IMAGE",
    description: "POM",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f5fff3f48fbf219112829fa/1668353924596-29B6V2T3UVGGST9PVXAO/6975874.jpg?format=1000w"
}
const credentials7 = {
    title: "l",
    description: "aezakmi",
    imageUrl: "http://vokainformatika.weebly.com/uploads/5/9/5/4/59544817/5471847.jpg?230"
}
const credentials8 = {
    title: "Create gallery by cypress POM",
    description: "Assertation",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/560px-Bananas.svg.png",
    secondUrl: "http://vokainformatika.weebly.com/uploads/5/9/5/4/59544817/5471847.jpg?230"
}
const credentials9 = {
    imageUrl: "http://vokainformatika.weebly.com/uploads/5/9/5/4/59544817/5471847.jpg?230"
}
const credentials = {
    userEmail: "lukap@map.com",
    userPassword: "luka1234"

}

describe("visit app and login", () => {
    beforeEach(() => {
        cy.visit('/login')
        loginPage.login(credentials.userEmail, credentials.userPassword)
        cy.url().should("not.include", "/login")
        

    });

    it("create gallery with valid credentials", ()=> {
        navigation.clickCreateGalleryBtn()
        createGallery.gallery(credentials1.title, credentials1.description, credentials1.imageUrl)
    });
    it("Try to create gallery by leaving title field empty", () => {
        navigation.clickCreateGalleryBtn()
        cy.url().should("include", "create")
        createGallery.gallery(credentials2.title, credentials2.description, credentials2.imageUrl)
     });

    it("try to create gallery by leaving description field empty", () => {
        navigation.clickCreateGalleryBtn()
        cy.url().should("include", "create")
        createGallery.gallery(credentials3.title, credentials3.description, credentials3.imageUrl)

    });
    it('Try to create gallery by providing SVG format for image', () => {
        navigation.clickCreateGalleryBtn()
        cy.url().should("include", "create")
        createGallery.gallery(credentials4.title, credentials4.description, credentials4.imageUrl)        
    });

    it("Try to create a gallery by leaving mandatory fields empty", () => {
        navigation.clickCreateGalleryBtn()
        cy.url().should("include", "create")
        createGallery.gallery(credentials5.title, credentials5.description, credentials5.imageUrl)
    })
    it("Try to create gallery by entering capital letters into title", () => {
        navigation.clickCreateGalleryBtn()
        cy.url().should("include", "create")
        cy.url().should("not.contain", "/login")
        createGallery.gallery(credentials6.title, credentials6.description, credentials6.imageUrl)
    })
    it('Try to create a gallery by providing only one letter in the title field', () => {
        navigation.clickCreateGalleryBtn()
        createGallery.gallery(credentials7.title, credentials7.description, credentials7.imageUrl)
    })
    it.only("Try to create a gallery by adding two images at the same time with valid data.", () => {
        navigation.clickCreateGalleryBtn()
        createGallery.addImageBtn.click()
        createGallery.gallery1(credentials8.title, credentials8.description, credentials8.imageUrl, credentials8.secondUrl)
        cy.should('have.text', "Submit")
        cy.url().should("not.contain", "/create")
        cy.url().should("not.contain", "/login")
 

    });
      
    
    
    
   

   
})