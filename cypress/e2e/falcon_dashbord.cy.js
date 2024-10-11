const dashpage=require("../pageobject/dashboard");

describe('falcon dashboard status',() =>{

  const dash=new dashpage();
  let uservalue;
  let usertestvalue;

  before('Getting the data From Fixtures',()=>{
    cy.fixture("properties").then((data)=>{
      uservalue=data;
    })
    cy.fixture("falcon_testdata").then((data)=>{
        usertestvalue=data;
    })   
  
  })
    // launching the falcon application URL.
  beforeEach('launching falcon application',()=>{
        dash.launchapplication(uservalue.falconApp,uservalue.falcontitle); 
  })

  it('validating the dasboard test results',() =>{
             // Dashboard page validation.
      if (dash.validating_the_dasboard(usertestvalue.labelofdashboard,usertestvalue.dashboardName)){          
                // selecting the first result in test result.         
                  dash.clickon(usertestvalue.jobname);
                // checking the toogle button of dashbord
                dash.togglebutton_or_checkbox(usertestvalue.dashboardName)
                // validating the respective test result fields.
                dash.validating_the_dasboard(usertestvalue.dasboard_totallabel,usertestvalue.dasboard_totalvalue);
                dash.validating_the_dasboard(usertestvalue.dasboard_passlabel,usertestvalue.dasboard_passvalue);
                dash.validating_the_dasboard(usertestvalue.dasboard_failedlabel,usertestvalue.dasboard_failedvalue);
                dash.validating_the_dasboard(usertestvalue.dasboard_skippedlabel,usertestvalue.dasboard_skippedvalue);   
      }      
  });
});