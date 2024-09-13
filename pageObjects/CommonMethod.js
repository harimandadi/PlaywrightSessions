class CommonMethod{
    constructor(page){

        this.page = page;
        
    }

    async navigateToURL (){
        //this.page.pause();
        await this.page.goto("https://www.automationexercise.com/");
        //await this.page.waitForLoadState('networkidle') 
       }

    async check_Homebutton(){
        //implement custome logic to check the home is present or not 
    if (await this.page.locator("//a[normalize-space()='Home']").textContent() == "Home")
    {
      console.log("Home page is visible");
    }

}
    async click_SignUpBtn(){
            await this.page.locator("header[id='header'] li:nth-child(4)").click();
          
            }
            
    

}

module.exports = CommonMethod;