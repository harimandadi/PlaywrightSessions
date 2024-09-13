const {expect} = require("@playwright/test");
class NewuserSignup {

    constructor(page){

        this.page = page;
        
    }

     async Check_newuserSignup(){
          
        if (await this.page.locator("//h2[normalize-space()='New User Signup!']").textContent() == "New User Signup!")
            {
              console.log("New User Signup! is visible");
            }
              
      }
      async signupWithNewUser (){
        
        await this.page.locator("//input[@placeholder='Name']").fill("ParthaSarathirout");
        await this.page.locator("//input[@data-qa='signup-email']").fill("z2llohhwxp@rteet.com");
        await this.page.locator("//button[normalize-space()='Signup']").click();   

    }

    async check_AccountInfo(){
  
        if (await this.page.locator("//b[normalize-space()='Enter Account Information']").textContent() == "Enter Account Information")
         {
           console.log("Enter Account Information is visible");
         }
        }

    async fill_UserDetails(){

      await this.page.locator("//input[@id='id_gender2']").click();
      await this.page.locator("//input[@id='password']").fill("Silan@890");
      await this.page.locator("//select[@id='days']").selectOption('12');
      await this.page.locator("//select[@id='months']").selectOption('August');
      await this.page.locator("//select[@id='years']").selectOption('2020');
      await this.page.locator("//input[@id='newsletter']").check();
      await this.page.locator("//input[@id='optin']").check();
      await this.page.locator("//input[@id='first_name']").fill("Partha");
      await this.page.locator("//input[@id='last_name']").fill("Rout");
      await this.page.locator("//input[@id='company']").fill("ParthaTech");
      await this.page.locator("//input[@id='address1']").fill("aaa","bbbb");
      await this.page.locator("//input[@id='address2']").fill("odisha");
      await this.page.locator("//select[@id='country']").selectOption('New Zealand');
      await this.page.locator("//input[@id='state']").fill("Cuttack");
      await this.page.locator("//input[@id='city']").fill("Atghafa");
      await this.page.locator("//input[@id='zipcode']").fill("000111");
      await this.page.locator("//input[@id='mobile_number']").fill("7896541239");
      await this.page.locator("//button[normalize-space()='Create Account']").click();
      if (await this.page.locator("//b[normalize-space()='Account Created!']").textContent() == "verfiy Account Created")
        {
          console.log("verfiy Account Created is visible");
        }
        await this.page.locator("//a[@class='btn btn-primary']").click();
        //Verify that 'Logged in as username' is visible // toconatins test is matched with some part off text 
       const textt= await this.page.locator("ul[class='nav navbar-nav'] li a b").allTextContents();
       console.log(textt);
       //click on delete
       await this.page.locator("//i[@class='fa fa-trash-o']").click();
       if (await this.page.locator("//b[normalize-space()='Account Deleted!']").textContent() == "Account Deleted!")
        {
          console.log("verfiy Account deleted is visible");
        }

        await this.page.locator("//a[@class='btn btn-primary']").click();
    }
    
 }
     module.exports = NewuserSignup;