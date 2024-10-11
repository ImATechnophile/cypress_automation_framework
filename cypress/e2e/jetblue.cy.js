const bookingpage = require('../pageobject/jetblueBooking');
const ApplicationKeywords=require('../pageobject/ApplicationKeywords');


describe.skip('JetBlue Flight Availability check (Single)',{ tags: '@Single' },() =>{
    const booking=new bookingpage();
    const applicationAction=new ApplicationKeywords();
  
    let uservalue;
    let usertestvalue;
    before('Getting the Test data From Fixtures',()=>{
      cy.fixture("properties").then((data)=>{
        uservalue=data;
      })
      cy.fixture("jetblue_testdata").then((data)=>{
          usertestvalue=data;
      })   
    
    })
    beforeEach('launching Application',()=>{
      applicationAction.launchapplication(uservalue.jetblueApp,uservalue.jetbluetitle);     
    })

    it.only('Rountrip flight availability check',() =>{

          booking.acceptcookies(usertestvalue.framename);
          booking.roundtrip(usertestvalue.depatureplacelabel,usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel,
                           usertestvalue.arrivalplacevalue,usertestvalue.startdatelabel,usertestvalue.startdatevalue,usertestvalue.enddatelabel,
                          usertestvalue.enddatevalue,usertestvalue.searchflightlabel);
          booking.getTotalFilghtdetails('roundtrip');
    });

    it.only('OneWaytrip flight availability check',() =>{

      booking.acceptcookies(usertestvalue.framename);
      booking.Onewaytrip(usertestvalue.passengertraveltypelabel,usertestvalue.passengertraveltypevalue,
                         usertestvalue.depatureplacelabel,usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel,
                         usertestvalue.arrivalplacevalue,usertestvalue.startdatelabel,usertestvalue.startdatevalue, 
                         usertestvalue.searchflightlabel);
      booking.getTotalFilghtdetails('OneWayTrip');

    });

    it.only('MultiCityTrip flight availability check',() =>{

      booking.acceptcookies(usertestvalue.framename);
      booking.multipleCityTrip(usertestvalue.passengertraveltypelabel,usertestvalue.passengertraveltypevalueMutiple,
                              usertestvalue.flightstartname,usertestvalue.flightendname,
                              usertestvalue.depatureplacelabel,usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel,
                              usertestvalue.arrivalplacevalue,usertestvalue.startdatelabel,usertestvalue.startdatevalue,
                              usertestvalue.enddatevalue,usertestvalue.searchflightlabel);

      booking.getTotalFilghtdetails('MultiCityTrip');

    });

});


describe.only('JetBlue  Flight Availability check (family )',{ tags: '@family' },() =>{
  const booking=new bookingpage();
  const applicationAction=new ApplicationKeywords();

  let uservalue;
  let usertestvalue;
  let startDate=applicationAction.generateDate(1);
  let endDate=applicationAction.generateDate(2);
 
  before('Getting the Test data From Fixtures',()=>{
    cy.fixture("properties").then((data)=>{
      uservalue=data;
    })
    cy.fixture("jetblue_testdata").then((data)=>{
      usertestvalue=data;
    })   
  
  })
  beforeEach('launching Application',()=>{
  
    applicationAction.launchapplication(uservalue.jetblueApp,uservalue.jetbluetitle); 
      
  })

  it.only('Rountripwith 2 Adults flight availability check',() =>{

      booking.acceptcookies(usertestvalue.framename); 
      booking.roundtripwithAdults(usertestvalue.passengertype,usertestvalue.passengertypevalue,usertestvalue.passengertypecountOnAdult,usertestvalue.depatureplacelabel,
                          usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel, usertestvalue.arrivalplacevalue,
                          usertestvalue.startdatelabel,startDate,usertestvalue.enddatelabel,
                          endDate, usertestvalue.searchflightlabel);

      booking.getTotalFilghtdetails('roundtripwith_2Adults');

               
  }) ;

  it.only('OneWaytripWith2Child flight availability check',() =>{

     booking.acceptcookies(usertestvalue.framename); 
     booking.Onewaytripwithchild(usertestvalue.passengertraveltypelabel,usertestvalue.passengertraveltypevalue,
                       usertestvalue.passengertype,usertestvalue.passengerChildTypevalue,usertestvalue.passengertypecountOnchild,
                       usertestvalue.depatureplacelabel,usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel,
                       usertestvalue.arrivalplacevalue,usertestvalue.startdatelabel,startDate,usertestvalue.searchflightlabel);

    booking.getTotalFilghtdetails('OneWayTripWith_2Child');

  });

  it.only('MultiCityTripWithLapInfants flight availability check',() =>{

    booking.acceptcookies(usertestvalue.framename);
    booking.multipleCityTripWithInfantsLap(usertestvalue.passengertraveltypelabel,usertestvalue.passengertraveltypevalueMutiple,
                                           usertestvalue.passengertype,usertestvalue.passengerInfantTypevalue,usertestvalue.passengertypecountOnInfant,          
                                           usertestvalue.flightstartname,usertestvalue.flightendname,
                                           usertestvalue.depatureplacelabel,usertestvalue.depatureplacevalue,usertestvalue.arrivalplacelabel,
                                           usertestvalue.arrivalplacevalue,usertestvalue.startdatelabel,startDate,
                                           endDate,usertestvalue.searchflightlabel);

    booking.getTotalFilghtdetails('MultiCityTripWithLapInfants');

  });

});