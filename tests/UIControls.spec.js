const {test, expect} = require('@playwright/test');

test('UI Controls Dropdowns and multipleElements', async ({page}) =>  {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
});

 test.only('UI Dropdowns and checkboxes assertions', async ({page}) =>  {
    await page.goto('https://testautomationpractice.blogspot.com/');
   await page.locator("//label[text()='Country:']/following-sibling::select").selectOption("Canada");
  // await page.locator("//input[@value='male']").click();
   //console.log(await page.locator("//input[@value='male']").isChecked());
    await expect (page.locator("//input[@name='gender']").first()).toBeChecked();
 });

 test.only('Checkboxes', async ({page}) =>  {
    await page.goto('https://testautomationpractice.blogspot.com/');
   await page.locator("//label[text()='Country:']/following-sibling::select").selectOption("Canada");
   await page.locator("//input[@value='male']").click();
   //console.log(await page.locator("//input[@value='male']").isChecked());
     await page.locator("#sunday").check();
     await page.locator("#sunday").uncheck();
 });
 
