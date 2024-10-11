///<reference types="cypress"/>

//const logger = require("../../log/youtubelogger");

class ApplicationKeywords{

    /** created by Arivarasan-15/12/2022.
     * methode description: enter the value in input text field.
     * @param {used to loacate the input field in the application} locator 
     * @param {value that is enter in the input fields} value 
     * @returns value in the input field
     */
    inputTypeIn(locator , value){
        try {
            let path = "//label[normalize-space(text())='"+locator+"']//following-sibling::input";
            
              if(cy.xpath(path).should("be.visible")){
                cy.xpath(path).eq(0)
                .click()
                .clear().type(value,{force: true}).type('{enter}').type('{esc}');
                return value;
                //cy.info("typed in to field "+locator+" and the value "+value);
            } else {
                //cy.error("unable to find the text :"+locator);
            }               
           
        } catch (error) {
                //cy.error("unable to find the input value :"+error);
        }

    }
    // based on jetblue requirement
    inputTypeInjet(label,locator,value){
        try {
            let path = "//h4[normalize-space(text())='"+label+"']/../..//label[normalize-space(text())='"+locator+"']//following-sibling::input";
            
              if(cy.xpath(path).should("be.visible")){
                cy.xpath(path).eq(0)
                .click()
                .clear().type(value).type('{enter}').type('{esc}');
                return value;
                //cy.info("typed in to field "+locator+" and the value "+value);
            } else {
                //cy.error("unable to find the text :"+locator);
            }               
           
        } catch (error) {
                //cy.error("unable to find the input value :"+error);
        }

    }


    /** created by Arivarasan-15/12/2022.
     * methode description: click the respection field.
     * @param {used to loacate the click the fields in the application} locator 
     */
    clickon(locator){
        try {
            let path = "//button/..//span[normalize-space(text())='"+locator+"']|//a[@id='"+locator+"']";
            if (cy.xpath(path).should('be.visible')){
                cy.xpath(path).click({force: true});
                //cy.info("Click on the respective field :"+locator);
            }else {
                //cy.error("unable to find the button :"+locator);
            }
        } catch (error) {
              // cy.error("unable to loacte the element :"+error);
            
        }
    }


    selectDropdown(label,value){
            let pathofField = "//button[@type='button']/*[normalize-space(text())='"+label+"']";
            let pathofvalue = "//span[normalize-space(text())='"+value+"']";
            if (cy.xpath(pathofField).should("exist")){
                cy.xpath(pathofField).click({force:true});
                if (cy.xpath(pathofvalue).should("exist")){
                    cy.xpath(pathofvalue).click({force:true});
                    
                } 
                
                //cy.info("Click on the respective field :"+locator);
            }else {
                //cy.error("unable to find the button :"+locator);
            }
    }

    addInpassenger(label,pasengercount){
        try {
           let pathofField = "//button[@type='button']/*[contains(text(),'Adult')]";
            let pathofvalue = "(//*[normalize-space(text())='"+label+"']/../../..//button[contains(@aria-label,'add')])[1]";
            if (cy.xpath(pathofvalue).should("exist")){
                if(pasengercount>=1){
                for(var i=0;i<pasengercount;i++){
                cy.xpath(pathofvalue).click({ force: true });
                }
                cy.xpath(pathofField).click({ force: true });
               }
               
                //cy.info("Click on the respective field :"+locator);
            }else {
                //cy.error("unable to find the button :"+locator);
            }
        } catch (error) {
              // cy.error("unable to loacte the element :"+error);
            
        }
    }

    isElementVisible(xpathLocater) {
        cy.get(xpathLocater).should('be.visible');
    };
    launchapplication(url,expectedtitle){
    
        try {
           
                cy.visit(url);
                cy.title().should('eq',expectedtitle);
            
        } catch (error) {
           // cy.error("unable to find the text :"+error);
            
        }
    }
    /**
     * validate the first row column values in the web tables.
     * 
     * @param {validate specific data in webtable} rowvalue 
     * @param {validate the exact value in webtable column} colvalue 
     */
    webtable_data_validate(rowvalue,colvalue){
        try {

            var path='.table>tbody>tr';
            cy.get(path+">td:nth-child(3)").each(($row,index,$rows)=> {
                // text captured from column1
                const tabledata = $row.text();
                // matching criteria
                if (tabledata.includes(rowvalue)){
                   // next sibling captured
                   cy.get(path+':nth-child(1)>td').each(($col,index,$cols) =>{
                        const coldata= $col.text().trim();
                        if (coldata.includes(colvalue)){
                          expect(coldata).to.eq(colvalue); 
                        }    

                   })
                }
             })
            
        } catch (error) {
            
        }
    }

    

    framesHandling(locator){
        cy.get(locator).then(($ele)=>{
            if($ele.is(':visible')){
            cy.getIframe(locator);
            }
        });
          
    }

    generateDate(noofdays) {
        const UTCdate = new Date(); //getting current date
        UTCdate.setDate(UTCdate.getDate() + noofdays);
        UTCdate.getTime() + (5.5 * 3600000); //Converted UTC TO IST, IST =UTC+5.5 hours
        let isttime = UTCdate.toJSON().slice(0, 10).split("-").reverse();
        let dateFormat = isttime[2] + "/" + isttime[1] + "/" + isttime[0];
        return dateFormat;
        
      }

    getElementvalue(locator){
       let textvalue=[];
       if(cy.xpath(locator,{ timeout: 10_000 }).should('be.visible')){
        cy.xpath(locator).then(($value)=>{
          cy.log($value.text());
          textvalue.push(JSON.stringify($value.text()));// pushing  value to the array
        });
        return textvalue;
    }

}
}
//new ApplicationKeywords().retrieve();
module.exports= ApplicationKeywords;