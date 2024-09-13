const {test, expect} = require("@playwright/test");
class Allproduct{

    constructor (page){
      this.page =page;
    }

    async click_Product(){

       await this.page.locator("//a[@href='/products']").click();
    }

    async verify_AllproductText(){
        await expect(this.page.locator("//h2[@class='title text-center']")).toContainText(['All Products']);
    }

    async click_OnFirstProduct(){

  //console.log(await this.page.locator("//div[@id='cartModal']").first().textContent());
  //await this.page.locator("//div[@id='cartModal']").first().tobeVis
   //console.log(await this.page.locator("//div[@id='cartModal']").count());
   //this.page.pause(5000);
   //await this.page.locator("//div[@id='cartModal']").first().click();

   const toastElement = await this.page.locator("//div[@id='cartModal']");
   await expect(toastElement).toBeVisible(true);
   await this.page.locator("//div[@id='cartModal']").first().click();
    }
}

module.exports=Allproduct;