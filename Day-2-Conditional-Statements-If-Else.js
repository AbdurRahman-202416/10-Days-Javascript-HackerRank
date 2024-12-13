function  getGrade(e){
    let score=Number(e);
  
    if(score > 25 &&  score <= 30){
        console.log('A');
    }
    else if (score>20 && score <= 25){
        console.log('B');

    }
    else if (score>15 && score<=20){
        console.log('C');
    }
    else if (score>10 && score <=15){
        console.log('D');
    }
    else if (score>5 && score<=15){
        console.log('E');
    }
    else{
        console.log('F');
    }

}

 getGrade(30);
 getGrade(25);
 getGrade(20);
 getGrade(15);
 getGrade(10);
 getGrade(5);
 getGrade(0);

