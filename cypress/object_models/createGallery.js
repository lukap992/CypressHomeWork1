
class CreateGallery{
    get addImageBtn(){
        return cy.get("button").eq(-3)
    }
    get imageTitle(){
        return cy.get("#title")
    }
    get imageDescription(){
        return cy.get("#description")
    }
    get imageUrl(){
        return cy.get(".input-group").eq(0)
    }
    get secondUrl(){
        return cy.get(".input-group").eq(1)
    }
    get imageUpButton(){
        return this.imageUrl.find("button").first()
    }
    get imageDownButton(){
        return this.imageUrl.find("button").second()
    }
    get buttonSbm(){
        return cy.get(".btn-custom").eq(0)
    }
    gallery(imageT,imageD, imageUrl){
        this.imageTitle.type(imageT)
        this.imageDescription.type(imageD)
        this.imageUrl.type(imageUrl)
        this.buttonSbm.click()

    }
    gallery1(imageTitle, description, image, secondImage){
        this.imageTitle.type(imageTitle)
        this.imageDescription.type(description)
        this.imageUrl.type(image)
        this.secondUrl.type(secondImage)
        this.buttonSbm.click()
    }
    
   
}
export const createGallery = new CreateGallery()
