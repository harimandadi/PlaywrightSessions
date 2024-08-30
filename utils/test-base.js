const  base =   require('@playwright/test');

exports.customtest = base.test.extend(
{
testDataForSignUp_withMandate:
{
    "name": "harikrishna",
    "email": "harikrishna@gmail.com"
},
testDataForSignUp_withOptional:{
    "name": "harikrishna1",
    "email": "harikrishna1@gmail.com"

}

}
)


