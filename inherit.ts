import { UserLogin } from "./abstract"

export class Users extends UserLogin{

    public firstname:string;
    public lastname:string;
    protected address: string;

    constructor(private password: string){
        super();
        console.log("Hello User");
    }

    public userInfo(){
        if(this.firstname){ console.log(`Firstname: ${this.firstname}`)};
        if(this.lastname){ console.log(`Lastname: ${this.lastname}`)};
        if(this.password){ console.log(`Password: ${this.password}`)};
    };

    public UserAddress(){
        if(this.address){
            console.log(`User address: ${this.address}`);
        }
    }

    userLogin(mail:string,password:string){
        if(mail && password){
            console.log(`Thanks for login`);
        }
        else{
            console.log("Invalid email or password");
        }
    }
    userDetails(address:string){
        if(address){
            console.log(`User address: ${address}`);
        }
    }

    //Getter
    get userAddress(){
        return this.address;
    }
    //Setter
    set userAddress(add){
        this.address = add;
    }
}

// let user: Users = new Users("123");
// user.firstname = "Kanaiya";
// user.lastname= "Bhanushali";
// user.userAddress = "Mumbai";
// user.userInfo();
// user.UserAddress();