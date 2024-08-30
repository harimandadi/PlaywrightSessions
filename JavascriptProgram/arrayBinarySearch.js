let b =[1,2,3,4,5,6,7,8] // here array is delcared 

let searchint =7;     // this the element i need to find in arrray 
let min=0;              // minmum length of this array.
let max=b.length-1;      // maxmimum length of this array

let flag = false;

while(min<=max) {          // here we use while loop for iterator the array

    let mid = Math.round((max+min)/2);  // here we need to find the array middile element.we round the value use as math.round fun

    if (b[mid]==searchint){                // here mid element = 7 [searchint]
        console.log("searchint is found")
        flag =true 
        break;

    }

    if (b[mid]<searchint)    //if middle value is less than searchint then search right side the array from middle value 

        {
            min = mid+1
        }
        
       
    if (b[mid]>searchint)   //if middle value is grater than searchint then search left side the array from middle value

         { 
            max =mid-1
         }
        
        
}

if (flag == false ){

    console.log("searchint is not found")
}

