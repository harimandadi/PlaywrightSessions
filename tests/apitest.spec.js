const {test, expect} = require('@playwright/test');
const userData = {name: "hari1218",job: "developer1218"}



test("API Getreqres", async({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
     expect(response.status()).toBe(200); 
     const text = await response.text();
     console.log(await response.json());
     
});


test.only("API post call with valid data empty job", async({request}) => {
    
    const postrsponse = await request.post("https://reqres.in/api/users", {

     data: userData,
     headers: {
        "Content-Type": "application/json"
        
     }
    });
    expect(postrsponse.status()).toBe(201);
    const text = await postrsponse.text();
    expect(text).toContain("hari1218");
    console.log(await postrsponse.json());

});




test.only("chaining api example", async({request}) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/posts");
    expect(response.status()).toBe(200);
    const posts  = await response.json();
    const firstPost = posts[0]
     console.log(firstPost)
       const commentsresponse = await request.get(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`); // here we are parametrized revious api response 
       //post id record - we are getting first record with posts[0] in line 44
       expect(commentsresponse.status()).toBe(200); // validating 200 status code
       const comments = await commentsresponse.json();
       expect(comments.length).toBeGreaterThan(0); //verifying records are more than 0 present for second api response (comments)
       expect(firstPost.id).toBe(comments[0].postId);   // first api id key value and ,second api post id is same or not we are validating u can ignore if not very clear
      
})

