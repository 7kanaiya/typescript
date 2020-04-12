import { Users } from "./inherit";
import * as Emp from "./interface"
// import { Iemployee,Ilogin,Idata } from "./interface";

class Customer extends Users implements Emp.Iemployee {  //polymorphism


    fname="kanaiya";
    lname="bhanushali";
    emp_sal=20000;
    emplogin(data){
        console.log(data);
        return data;
    };
    login= {
        userLogin:{
            emailId:"k@k.com",
            password:"123"
        }
    }



    constructor(public cutomerPassword: string){
        super(cutomerPassword); // Will always take the value from constructor
    }
    
    public UserAddress(){
        if(this.address){
            console.log(this.address);
        }
        super.UserAddress();
    }

}

let cust = new Customer("1234");

cust.firstname = "Kanaiya";
cust.lastname= "Bhanushali";
cust.userAddress = "Mumbai";
cust.userInfo();
cust.UserAddress();
cust.userLogin("kan",cust.cutomerPassword);
cust.userDetails("mumbai");