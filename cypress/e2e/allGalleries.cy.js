///<reference types="Cypress"/>
import { allGalleries } from "../object_models/allGalleries";
import { loginPage } from "../object_models/loginPOM"

const credentials = {
    userEmail:'lukap@map.com',
    userPassword: 'luka1234'
}
describe("all galleries page test", () => {
    beforeEach("Visit app and login", () => {
        cy.visit("/login")
        loginPage.login(credentials.userEmail, credentials.userPassword)
        cy.url().should("not.include", "/login")
    })
    //it("it loads page susscesfully", ( )=> {
      //  allGalleries.heading
       // .should("be.visible")
       // .and("exist")
       // .and("have.text", "All Galleries");
 
   /// });

    it("check search button", () => {
        allGalleries.searchInput.type("marko");
        allGalleries.SearchFilterBtn.click()
        .should("have.text", "Filter")
        .should("be.visible")
    })

    it("test pagination", () => {
        allGalleries.allGalleriesG.should("be.visible").and("have.length", 10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleriesG.should("be.visible").and("have.length", 20);
        allGalleries.loadMoreBtn.click();

        
    })
    it('Click on author gallery redirects to authors page', () =>{
        allGalleries.singleGallery.find("a").eq(2).click();
        
    })
    


    
       
    
})