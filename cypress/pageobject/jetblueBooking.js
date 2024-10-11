const ApplicationKeywords=require('../pageobject/ApplicationKeywords');

class bookingpage{

acceptbuttonlabel="div>a.call";

    booking = new ApplicationKeywords();


  roundtrip(startingLabel,startplaceValue,
         endingLabel,endplaceValue,startdateLabel,startdateValue,enddateLabel,enddateValue,searchflightlabel){
      // this.booking.selectDropdown(selectlabel,selectvalue);
       //this.booking.clickon(passengerlabel);
      // this.booking.addInpassenger(passengervalue,passengercount);
       this.booking.inputTypeIn(startingLabel,startplaceValue);
       this.booking.inputTypeIn(endingLabel,endplaceValue);
       this.booking.inputTypeIn(startdateLabel,startdateValue);
       this.booking.inputTypeIn(enddateLabel,enddateValue);
       this.booking.clickon(searchflightlabel);
  }
  roundtripwithAdults(passengerlabel,passengervalue,passengercount,startingLabel,startplaceValue,
    endingLabel,endplaceValue,startdateLabel,startdateValue,enddateLabel,enddateValue,searchflightlabel){
    // this.booking.selectDropdown(selectlabel,selectvalue);
    this.booking.clickon(passengerlabel);
    this.booking.addInpassenger(passengervalue,passengercount);
    this.booking.inputTypeIn(startingLabel,startplaceValue);
    this.booking.inputTypeIn(endingLabel,endplaceValue);
    this.booking.inputTypeIn(startdateLabel,startdateValue);
    this.booking.inputTypeIn(enddateLabel,enddateValue);
    this.booking.clickon(searchflightlabel);
  }

  multipleCityTrip(selectlabel,selectvalue,flightstartname,flightendname,startingLabel,startplaceValue,
    endingLabel,endplaceValue,startdateLabel,startdateValue,enddateValue,searchflightlabel){
    this.booking.selectDropdown(selectlabel,selectvalue);
     //this.booking.clickon(passengerlabel);
    // this.booking.addInpassenger(passengervalue,passengercount);
    this.booking.inputTypeInjet(flightstartname,startingLabel,startplaceValue);
    this.booking.inputTypeInjet(flightstartname,endingLabel,endplaceValue);
    this.booking.inputTypeInjet(flightstartname,startdateLabel,startdateValue);
    this.booking.inputTypeInjet(flightendname,startingLabel,endplaceValue);
    this.booking.inputTypeInjet(flightendname,endingLabel,startplaceValue);
    this.booking.inputTypeInjet(flightendname,startdateLabel,enddateValue);
    //this.booking.inputTypeIn(enddateLabel,enddateValue);
    this.booking.clickon(searchflightlabel);
  }

  multipleCityTripWithInfantsLap(selectlabel,selectvalue,passengerlabel,passengervalue,passengercount,flightstartname,flightendname,startingLabel,startplaceValue,
    endingLabel,endplaceValue,startdateLabel,startdateValue,enddateValue,searchflightlabel){
    this.booking.selectDropdown(selectlabel,selectvalue);
    this.booking.clickon(passengerlabel);
    this.booking.addInpassenger(passengervalue,passengercount);
    this.booking.inputTypeInjet(flightstartname,startingLabel,startplaceValue);
    this.booking.inputTypeInjet(flightstartname,endingLabel,endplaceValue);
    this.booking.inputTypeInjet(flightstartname,startdateLabel,startdateValue);
    this.booking.inputTypeInjet(flightendname,startingLabel,endplaceValue);
    this.booking.inputTypeInjet(flightendname,endingLabel,startplaceValue);
    this.booking.inputTypeInjet(flightendname,startdateLabel,enddateValue);
    //this.booking.inputTypeIn(enddateLabel,enddateValue);
    this.booking.clickon(searchflightlabel);
  }


  Onewaytripwithchild(selectlabel,selectvalue,passengerlabel,passengervalue,passengercount,startingLabel,startplaceValue,
  endingLabel,endplaceValue,startdateLabel,startdateValue,searchflightlabel){
     this.booking.selectDropdown(selectlabel,selectvalue);
     this.booking.clickon(passengerlabel);
     this.booking.addInpassenger(passengervalue,passengercount);
     this.booking.inputTypeIn(startingLabel,startplaceValue);
     this.booking.inputTypeIn(endingLabel,endplaceValue);
     this.booking.inputTypeIn(startdateLabel,startdateValue);
     //this.booking.inputTypeIn(enddateLabel,enddateValue);
     this.booking.clickon(searchflightlabel);
  }


  Onewaytrip(selectlabel,selectvalue,startingLabel,startplaceValue,endingLabel,
           endplaceValue,startdateLabel,startdateValue,searchflightlabel){
     this.booking.selectDropdown(selectlabel,selectvalue);
     this.booking.inputTypeIn(startingLabel,startplaceValue);
     this.booking.inputTypeIn(endingLabel,endplaceValue);
     this.booking.inputTypeIn(startdateLabel,startdateValue);;
     this.booking.clickon(searchflightlabel);
  }
  

  acceptcookies(framelabel){
    cy.get('body').then((body) => {
     if(body.find(framelabel).length>0){
       cy.get(framelabel).then(($ele)=>{
          if($ele.is(':visible')){
            cy.getIframe(framelabel).find("div>a.call").click({force: true});
          }
        }) ;
     }
    });
  }
  submitSurvey(framelabel){
    cy.get('body').then((body) => {
     if(body.find('div.quesDiv').length>0){
       cy.get('div.quesDiv').then(($ele)=>{
          if($ele.is(':visible')){
            cy.xpath("//label[normalize-space(text())='Business closures (restaurants, shops, etc.)']/../input").click({force: true});
            cy.xpath("//button[normalize-space(text())='Submit']").click({force: true});
          }
        }) ;
     }
    });
  }

  getTotalFilghtdetails(tripName){
  
    let value=[];
    cy.xpath("//div[contains(@id,'auto-depart-time')]", { timeout: 20_000 }).each(($el, index, $list)=>{
      var flights = {};
      //cy.log("no of elemnts in the list:",index);
      
      let flightname = this.booking.getElementvalue("//div[contains(@id,'auto-flight-number-"+index+"')]");
      flights.Flightname = flightname;
      let deptime=this.booking.getElementvalue("//div[contains(@id,'auto-depart-time-"+index+"')]");
      flights.Deptime = deptime;
      let depplace= this.booking.getElementvalue("//div[contains(@id,'auto-depart-from-"+index+"')]");
      flights.Depplace = depplace;
      let arrtime= this.booking.getElementvalue("//div[contains(@id,'auto-arrival-time-"+index+"')]");
      flights.Arrtime = arrtime;
      let arrplace=this.booking.getElementvalue("//div[contains(@id,'auto-arrive-to-"+index+"')]");
      flights.Arrplace = arrplace;
      let duration= this.booking.getElementvalue("//div[contains(@id,'auto-flight-duration-"+index+"')]");
      flights.Duration = duration;
      let stoppalce= this.booking.getElementvalue("//span[contains(@id,'auto-flight-stops-"+index+"')]");
      flights.StopPlace = stoppalce;
      let farerangestart=this.booking.getElementvalue("(//div[contains(@class,'fareCardWrapper')][1]//span[@class='priceText']/label)['"+(index+1)+"'] |(//div[contains(@class,'fareCardWrapper')][1]//div/p)['"+(index+1)+"']");
      flights.Farerangestart = farerangestart;
      // let farerangeends=this.booking.getElementvalue("((//div[contains(@class,'fareCardWrapper')][2]//span[@class='priceText'])['"+(index+1)+"'] |(//div[contains(@class,'fareCardWrapper')][2]//div/p)['"+(index+1)+"']");
      // flights.Maxfarerangeends = farerangeends;{ timeout: 30_000 }
      value.push(flights);
    });
    cy.writeFile('./cypress/testdata/'+tripName+'.json',value,{timeout:20000});
   // cy.wait(10000);
  }


}

module.exports=bookingpage