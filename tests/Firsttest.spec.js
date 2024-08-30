const {test, expect} = require('@playwright/test');
const data = JSON.parse(JSON.stringify(require("../testdata/login.json"))); // json data converting into javs script object  -- Json - >String ->java script object
 

test('First Playwright Script', async ({browser}) =>  {
    // Create a new incognito browser context
    const context = await browser.newContext();  // cookies, prxoxy details
    // Create a new page inside context.
    const page = await context.newPage();
    await page.goto('https://www.automationexercise.com/')

});

test('Second Test', async ({page}) =>  {
   await page.goto('https://www.automationexercise.com/');
   console.log(await page.title());
   await expect(page).toHaveTitle("Automation Exercise");

});

test.only('SignUp Page Test with json Data', async ({page}) =>  {
    await page.goto('https://www.automationexercise.com/');
    await page.locator("//*[text()=' Signup / Login']/i").click();
    //Console.log(signUpText);
    await page.getByPlaceholder("Name").fill(data.name);
    await page.locator("//input[@data-qa='signup-email']").last().fill(data.email);
    await page.locator("//div[@class='signup-form']/h2").textContent();
    await page.locator("//button[text()='Signup']").click();
  });


 test('UI Controls', async ({page}) =>  {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#country").selectOption("Germany");
    console.log(await page.locator("//label[@class='form-check-label']").nth(2).textContent());
   await page.locator("//input[@name='gender']").first().click();
 });

 