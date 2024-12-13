
// function isPositive(a) {
//     if(a==0){
//         console.log('Zero Error');
//     }
//     else  if (a>0){
//         console.log('YES');
//     }
//     else if(a<0){
//         console.log('Negative Error');
//     }
    
// }

//  isPositive(2);
//  isPositive(0);
//  isPositive(-2);

function isPositive(a) {
   
    try{
        if(a>0){return "YES"}
        if(a==0){throw new Error("Zero Error")}
        if(a<0){throw new Error("Negative Error")}
    }
    
    catch (e){
        return e.message
    }
  }
