const {test, expect} = require("@playwright/test");
class ContactUS{

    constructor(page){

        this.page = page ;
    }

    async clikc_Contactus_button(){
        await this.page.locator("//a[normalize-space()='Contact us']").click();
    }

    async verifyGetintouch (){
       await expect(this.page.locator("//h2[normalize-space()='Get In Touch']")).toContainText(['Get In Touch']);
    }

    async fillAlldeatils(){
        await this.page.locator("//input[@placeholder='Name']").fill("Parthasarathi");
        await this.page.locator("//input[@placeholder='Email']").fill("vipoder2222@azduan.com");
        await this.page.locator("//input[@placeholder='Subject']").fill("Ref 562 complain");
        await this.page.locator("//textarea[@id='message']").fill("This is demo i am very unhappy with my life.");
        await this.page.locator("//input[@name='upload_file']").setInputFiles("D:/2024_Study/cat.jpg");
        await this.page.locator("//input[@name='submit']").click();
    }
}

module.exports = ContactUS;