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
    it("it loads page susscesfully", ( )=> {
        allGalleries.heading
        .should("be.visible")
        .and("exist")
        .and("have.text", "All Galleries");
    });

    it("check search button", () => {
        allGalleries.searchInput.type("marko");
        allGalleries.SearchFilterBtn.click()
        .should("have.text", "Filter")
        .should("be.visible")
        .and("exist")
        .and("have.class", "btn-outline-secondary")
    });

    it.only("test pagination", () => {
        allGalleries.allGalleriesG.should("be.visible").and("have.length", 10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleriesG.should("be.visible").and("have.length", 20);
        allGalleries.loadMoreBtn.click()
        .should("be.visible")
        .and("exist")
    });

    it('click on gallery title redirects to single gallery page"', () =>{
        allGalleries.singleGallery.find("a").eq(0).click()
        .should("be.visible").and("exist");
    });

    it("click on gallery author redirects to authors' page", () => {
        allGalleries.singleGallery.find("a").eq(1).click()
        .should("be.visible").and("exist");
    });

    it('Check whether the publish date is visible', () => {
        allGalleries.singleGallery.find("small").eq(0)
        .should("be.visible")
        .and("exist")
        .and("have.text", "Created at: Feb 19, 2023")
    });
   
})