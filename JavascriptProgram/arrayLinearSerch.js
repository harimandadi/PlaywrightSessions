// linear search algo we use in unsorted arry .
var a = [12 ,17,19,40,50];

// we need to search 40 is present in this array or not 
// here we are using for loop for itretr each elemnt in the array
let searchint =40;

for (let i = 0; i<a.length;i++){

    if (searchint==a[i])
    {
        console.log("searchint is present in this array position No" +""+ +i);
        break;
    }

    else {

        console.log("searchint is not present in this array");
        
    }
}
