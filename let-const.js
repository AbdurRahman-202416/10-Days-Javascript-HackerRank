

function main(r) {
    const PI=Math.PI;
    //  let  r= +(readLine());
   
    
    let area= PI*(r**2);
    console.log(area);
   
    let perimeter= 2*(PI*r);
    console.log(perimeter);
    try {    
      
        PI = 0;
       
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main(2.6);

