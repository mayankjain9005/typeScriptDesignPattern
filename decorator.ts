abstract class Car{
    public description:string;
    abstract cost() :number;

}
class ModelX extends Car{
    cost(): number {
        return 5000;
    }



}
class ModelY extends Car{
    cost(): number {
        return 6000;
    }
}

class AutoPilot{
     private  autoPilot : Car;
     constructor(private autoPilot1 : Car){
            this.autoPilot =autoPilot1;
     }
     cost(): number{
        return this.autoPilot.cost() +5000;
     }   
}
class SelfDriver{
        private selfDriver: Car;
         constructor(private car:Car){
                    this.selfDriver= car;
         }
         cost():number {
             return this.selfDriver.cost()+9000 ; 
                   }   
}

let  car1 = new ModelX();
let car2= new ModelY();

let selfDriver =  new SelfDriver(car1);
console.log(selfDriver.cost());