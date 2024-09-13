const {expect} = require("@playwright/test");
class UserCorrectemail {

    constructor (page){

        this.page = page;

    }


 async check_logintext(){
  
    if (await this.page.locator("//h2[normalize-space()='Login to your account']").textContent() == "Login to your account")
     {
       console.log("Login to your account");
     }
}
 
async loginWithExsitUser (){
        
        
    await this.page.locator("//input[@data-qa='login-email']").fill("vipoder427@azduan.com");
    await this.page.locator("//input[@placeholder='Password']").fill("Silan@890");
    await this.page.locator("//button[normalize-space()='Login']").click();   
    const Loggedusernametext= await this.page.locator("ul[class='nav navbar-nav'] li a b").allTextContents();
     console.log(Loggedusernametext);
     await this.page.locator("//a[normalize-space()='Delete Account']").click();
     const deletetext =    await this.page.locator("//body//b[normalize-space()='Account Deleted!']").allTextContents();
     console.log(deletetext);

}


}

  module.exports = UserCorrectemail;