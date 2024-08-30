const {test} = require("@playwright/test");
const loginAccount = require("../pageObjects/loginAccount");
const data = JSON.parse(JSON.stringify(require("../testdata/login.json"))); // json data converting into java script object  -- Json - >String ->java script object
 

test('login Account', async({page}) => {

const loginaccountpage  = new loginAccount(page);
loginaccountpage.naviagteTo();
loginaccountpage.login(data.username,data.password)

});