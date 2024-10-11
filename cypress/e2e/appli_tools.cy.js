
const dashboardLogin =require("../pageobject/loginpage");
const ApplicationKeywords =require("../pageobject/ApplicationKeywords");

describe('Applitools table data validation',() =>{
    const dash=new dashboardLogin();
    const applicationAction=new ApplicationKeywords();
    let uservalue;
    let usertestvalue;
   // launching the falcon application URL.
  before(()=>{
      cy.fixture("properties").then((data)=>{
        uservalue=data;
      })
      cy.fixture("applitool_testdata").then((data)=>{
        usertestvalue=data;
      })   
  })
  beforeEach('launching Application',()=>{
    applicationAction.launchapplication(uservalue.appurl,uservalue.expectedvalue);  
  })

  it('webtable data validation',() =>{
            // login the application 
           dash.logindashboard(uservalue.username,uservalue.password);
            // validating the respective fields in the webtable.
            dash.validate_data_webtable(usertestvalue.description,usertestvalue.tabledate);
            dash.validate_data_webtable(usertestvalue.description,usertestvalue.description);
            dash.validate_data_webtable(usertestvalue.description,usertestvalue.category);
            dash.validate_data_webtable(usertestvalue.description,usertestvalue.amount);     
    })  
})