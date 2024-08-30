const {test, expect} = require('@playwright/test');
const data = JSON.parse(JSON.stringify(require("../testdata/signinmultidatasets.json")));  // json data converting into javs script object  -- Json - >String ->java script object


//if wanted to parameterize we need to keep json as array format in json file

for(const dataset of data)
{
   test(`Sign Up with Multiple Data Sets ${dataset.name}`, async ({page}) =>   {
        await page.goto('https://www.automationexercise.com/');
        await page.locator("//*[text()=' Signup / Login']/i").click();
        //Console.log(signUpText);
        await page.getByPlaceholder("Name").fill(dataset.name);
        await page.locator("//input[@data-qa='signup-email']").last().fill(dataset.email);
        await page.locator("//div[@class='signup-form']/h2").textContent();
        await page.locator("//button[text()='Signup']").click();
      });
}