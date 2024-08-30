const {test, expect} = require('@playwright/test');
const {customtest} = require('../utils/test-base');
//const data = JSON.parse(JSON.stringify(require("../testdata/signinmultidatasets.json")));  // json data converting into javs script object  -- Json - >String ->java script object



customtest(`Sign Up with custom dataset`, async ({page,testDataForSignUp_withMandate}) =>   
{
  await page.goto('https://www.automationexercise.com/');
  await page.locator("//*[text()=' Signup / Login']/i").click();
  //Console.log(signUpText);
  await page.getByPlaceholder("Name").fill(testDataForSignUp_withMandate.name);
  await page.locator("//input[@data-qa='signup-email']").last().fill(testDataForSignUp_withMandate.email);
  await page.locator("//div[@class='signup-form']/h2").textContent();
  await page.locator("//button[text()='Signup']").click();
});