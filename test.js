//javascript Class Constructor Testing 

class myclass{

    constructor(a,b){
      this.fNum=a;
      this.LNum=b;

    }

    add(){
      let result=  this.fNum+ this.LNum;
      console.log(result);
    }

}
let obj=new myclass(10,20);
obj.add();