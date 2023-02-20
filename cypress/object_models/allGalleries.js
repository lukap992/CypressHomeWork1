
class AllGalleries{
    get heading(){
        return cy.get("h1")
    }
    get searchInput(){
        return cy.get(".form-control")
    }
    get SearchFilterBtn(){
        return cy.get("button").first()
    }
    get loadMoreBtn(){
        return cy.get("button").last()
    }
    get singleGallery(){
        return cy.get(".cell")
    }
    get authorGalleryPage(){
        return cy.get(".box-title")
    }
    get singleGalleryTitle(){
        return this.singleGallery.find("h2");
    }
    get allGalleriesG(){
        return cy.get(".grid").children();

    }
    search(searchTerm){
        this.searchInput.type(searchTerm)
        this.SearchFilterBtn.click()
    }
    
}
export const allGalleries = new AllGalleries()