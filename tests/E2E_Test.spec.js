const {test, expect} = require("@playwright/test");
const CommonMethod = require("../PageObject/CommonMethod");
const NewUserSignup = require("../PageObject/NewUserSignup");
const UserCorrectemail=require("../PageObject/UserCorrectemail");
const InvalidEmail = require("../PageObject/InvalidEmail");
const Logout = require("../PageObject/Logout");
const ExsitingUser = require("../PageObject/ExsitingUser");
const ContactUS = require("../PageObject/ContactUs");
const TestCase = require("../PageObject/TestCase");
const Allproduct = require("../PageObject/Allproduct");

//Test Case 1: Register User
test('Login the website',async ({page})=>{

    //common method call
    const commonmethod = new CommonMethod(page);
    await commonmethod.navigateToURL();
    await commonmethod.check_Homebutton();
    await commonmethod.click_SignUpBtn();
    const newuser = new NewUserSignup(page);
    await newuser.Check_newuserSignup();
    await newuser.signupWithNewUser();
    await newuser.check_AccountInfo();
    await newuser.fill_UserDetails();
    });

    //Test Case 2: Login User with correct email and password
test('Login User with correct email and password',async({page})=>{

        const commonmethod = new CommonMethod(page);
         await commonmethod.navigateToURL();
         await commonmethod.check_Homebutton();
         await commonmethod.click_SignUpBtn();
       const correctUser= new UserCorrectemail(page);
       await correctUser.check_logintext();
       await correctUser.loginWithExsitUser();
    })
//testcase 3
    test('Login User with incorrect email and password',async({page})=>{

        const commonmethod = new CommonMethod(page);
         await commonmethod.navigateToURL();
         await commonmethod.check_Homebutton();
         await commonmethod.click_SignUpBtn();
         const invalidUser = new InvalidEmail(page);       
         await invalidUser.check_logintext();
         await invalidUser.Incorrectemailuser();
         await invalidUser.check_ErrorMessage();
        
      
      })
      test('logout User',async({page})=>{
        const commonmethod = new CommonMethod(page);
        await commonmethod.navigateToURL();
        await commonmethod.check_Homebutton();
        await commonmethod.click_SignUpBtn();
        const userlogout = new Logout(page);
        await userlogout.check_logintext();
        await userlogout.user_Logout();
    })

    test('@Web Register User with existing email',async({page})=>{
    
        const commonmethod = new CommonMethod(page);
         await commonmethod.navigateToURL();
         await commonmethod.check_Homebutton();
         await commonmethod.click_SignUpBtn();
       
        const existUser = new ExsitingUser(page);
        await existUser.userRegister();
        await existUser.signUp_button();
        await existUser.getTheErrorMessage();
     })

     test('Contact Us Form',async({page})=>{

        const commonmethod = new CommonMethod(page);
         await commonmethod.navigateToURL();
         await commonmethod.check_Homebutton();
        const constactus = new ContactUS(page);
        await constactus.clikc_Contactus_button();
        await constactus.verifyGetintouch();
        await constactus.fillAlldeatils(); 
        });

 test('Verify Test Cases Page',async({page})=>{

    const commonmethod = new CommonMethod(page);
    await commonmethod.navigateToURL();
    await commonmethod.check_Homebutton();
    const testcase = new TestCase(page);
    await testcase.click_testcaseButton();
    await testcase.text_VerifyTextTestcae();
            
 });

 test.only('Verify All Products and product detail page',async({page})=>{

    const commonmethod = new CommonMethod(page);
    await commonmethod.navigateToURL();
    //await commonmethod.check_Homebutton();
    const allprod = new Allproduct(page);
     await allprod.click_Product();
    await allprod.click_OnFirstProduct(); 
 });