export interface Iemployee{
    fname: string;
    lname:string;
    emp_sal:number;
    login:Ilogin;

    emplogin(data:any): string;
}

export interface Ilogin{
    userLogin:{
        emailId:string;
        password:string;
    }
}

export interface Idata extends Iemployee,Ilogin{

}



class test{
    fname: string;
    lname:string;
}

let testdata:test = {
    fname:"test",
    lname:"test"
}

console.log(testdata.fname);
console.log(testdata.lname);

let empdata:Iemployee = { //Interface is like a contract that defines types used for strong typechecking

    fname:"kanaiya",
    lname:"bhanushali",
    emp_sal:20000,
    emplogin(data){
        console.log(data);
        return data;
    },
    login:{
        userLogin:{
            emailId:"k@k.com",
            password:"123"
        }
    }


}

console.log(empdata.fname);
console.log(empdata.lname);
console.log(empdata.login.userLogin.emailId);
console.log(empdata.login.userLogin.password);