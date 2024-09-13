class ExsitingUser {

    constructor(page){

           this.page =page;
    }

    async userRegister(){
  
        if (await this.page.locator("//h2[normalize-space()='New User Signup!']").textContent() == "New User Signup!")
            {
              console.log("New User Signup! is visible");
            }
 }
    async signUp_button (){
        await this.page.locator("//input[@placeholder='Name']").fill("Parthasarathi PR");
        await this.page.locator("//input[@data-qa='signup-email']").fill("qgvmopzhe2@rteet.com");
        await this.page.locator("//button[normalize-space()='Signup']").click();  
     }

     async getTheErrorMessage (){
        if (await this.page.locator("//p[normalize-space()='Email Address already exist!']").textContent() == "Email Address already exist!")
            {
              console.log("Email Address already exist! is visible");
            }
     }
    
}

module.exports = ExsitingUser;