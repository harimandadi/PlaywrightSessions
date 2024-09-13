const {test, expect} = require("@playwright/test");
class TestCase {

    constructor(page) {
        this.page = page;
    }

    async click_testcaseButton(){

         this.page.locator("//a[normalize-space()='Test Cases']").click();
    }

    async text_VerifyTextTestcae(){

        //await expect(this.page.locator("//span[normalize-space()='Test']")).toContainText(['Test Cases']);

        await expect(this.page.locator("//span[normalize-space()='Test']")).toContain("Test");
        console.log("verified testcase text.")
    }
}

module.exports=TestCase;