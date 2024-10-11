class falcondashboard{
     clickon(label){
        try {
            var path="//tbody/tr/td/a//h4[normalize-space(text())='"+label+"']";
            if (cy.xpath(path).should("exist")){
                cy.xpath(path).click();
            }else {
                console.log("unable to find the button :"+locator);
            }
        } catch (error) {
            console.log("unable to loacte the element :"+error);
            
        }
    }
    
     validating_the_dasboard(locator,value){
    
        try {
            var path="//*[contains(@class,'fa fa-"+locator+"')]/../..//child::div/h4 |//h3[@class='"+locator+"']";
            if (cy.xpath(path).should("be.visible")){
                cy.xpath(path).should('contain',value);
                return value;
            }else {
                console.log("unable to find the text :"+locator);
            }
        } catch (error) {
            console.log("unable to find the text :"+error);
            
        }
    }

    launchapplication(url){
    
        try {
           
                cy.visit(url);
              //  cy.title();
                return cy.title();;
            
        } catch (error) {
            console.log("unable to find the text :"+error);
            
        }
    }
    
    
     togglebutton_or_checkbox(locator){
    
        try {
            var path="//*[text()='"+locator+"']/following-sibling::input";
            if (cy.xpath(path).should("exist")){
                cy.xpath(path).check({force:true});
                
            }else {
                console.log("unable to find the checkbox :"+locator);
            }
        } catch (error) {
            console.log("unable to find the checkbox :"+error);
            
        }
    }
}

module.exports= falcondashboard;