//const logger = require("../log/logger");

const ApplicationKeywords =require("../pageobject/ApplicationKeywords");

//const dash=require("./ApplicationKeywords");

class dashboardLogin{
  //  log=logger();
     
        dash = new ApplicationKeywords();

     logindashboard(username,password){
        try {
            this.dash.inputTypeIn("Username",username);
            this.dash.inputTypeIn("Password",password);
            this.dash.clickon("log-in");
      //      log.info("login sucessfull")
        } catch (error) {
    //     log.error("unable to login into login page");
            
        }
 
     }
     
     validate_data_webtable(rowvalue,colvalue){
      try {
         this.dash.webtable_data_validate(rowvalue,colvalue);
      } catch (error) {
            
      }
     }
     
     
     
     
    
     




}
module.exports =dashboardLogin;