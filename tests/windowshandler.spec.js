const {test, expect, chromium} = require('@playwright/test');

test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});

//single file  - usually executes in sequence one by one test by default 
//if wanted to execute inside single file if tests wanted to be executed in parallel we cna do in this way
test("alterts handling", async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    //button[text()='Confirm Box']
    page.on('dialog', dialog => dialog.accept()); 
    page.on('dialog', dialog => dialog.dismiss()); 
    await page.locator("//button[text()='Confirm Box']").click();
    await page.locator("//input[@id='datepicker']").hover();
   
});

test("frame handling", async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //button[text()='Confirm Box']
    const framepage =  page.frameLocator(" //iframe[starts-with(@id,'frame-one')]")
    await framepage.locator("//input[@name='Submit']").click();
    await page.locator("#email").fill("jkxkhgg");
   
});


test.only("Handling windows", async () => {

    const browser = await chromium.launch()
    const context  = await browser.newContext()

    const page= await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Automation Testing Practice")

    const pagePromise = context.waitForEvent('page')

    await page.locator("//button[text()='New Browser Window']").click();

    const newpage =  await pagePromise;
    console.log(await newpage.title());
    await expect(newpage).toHaveTitle("Your Store")
    await page.locator("//a[text()='Desktops']").click();
})


test("Handling windows approach2", async () => {

    const browser = await chromium.launch()
    const context  = await browser.newContext()

    const page= await context.newPage()
 //array of promises either to be resolved or rejected 
 await page.goto("https://testautomationpractice.blogspot.com/")

 const [multiPage] = await Promise.all(
    [
    page.waitForEvent("page"), // its array so used comma here ,  these 2 promises i want to resolve
    page.click("//button[text()='New Browser Window']")
    ]  //once these 2 promises are resolved we get a new prmomise
)

await multiPage.waitForLoadState();

const pages = multiPage.context().pages();
console.log('No.of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

})