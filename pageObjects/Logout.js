class Logout{

    constructor(page){

        this.page=page;

    }

    async navigateToURL (){
        await this.page.goto("https://www.automationexercise.com/");
     
       }

    async check_Homebutton(){
        
    if (await this.page.locator("//a[normalize-space()='Home']").textContent() == "Home")
    {
      console.log("Home page is visible");
    }
 }

 async click_SignUpBtn(){
  await this.page.locator("header[id='header'] li:nth-child(4)").click();

  }

 async check_logintext(){
  
    if (await this.page.locator("//h2[normalize-space()='Login to your account']").textContent() == "Login to your account")
     {
       console.log("Login to your account");
     }
}

async user_Logout (){
        
        
    await this.page.locator("//input[@data-qa='login-email']").fill("vipoder427@azduan.com");
    await this.page.locator("//input[@placeholder='Password']").fill("Silan@890");
    await this.page.locator("//button[normalize-space()='Login']").click();   
    const textt= await this.page.locator("ul[class='nav navbar-nav'] li a b").allTextContents();
    console.log(textt);
    await this.page.locator("//a[normalize-space()='Logout']").click();

}
}
module.exports = Logout;