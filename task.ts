// users list -> id,name,available,address
//enum Location {"ind","usa","uk"};

function Users(){
    let users = [
        {
            id:1,
            name: "jack",
            available:true,
            location: Locations.india,
            address: "mumbai"
        },
        {
            id:1,
            name: "jack",
            available:true,
            location: Locations.india,
            address: "delhi"
        },
        {
            id:1,
            name: "jack",
            available:true,
            location: Locations.usa,
            address:"Los angeles"
        },
        {
            id:1,
            name: "jack",
            available:true,
            location: Locations.uk,
            address:"manchester"
        }

    ];
    return users;
}
enum Locations {"india","usa","uk"}; 


function getUsersLocation(users : Locations) : string[]{
    console.log(`User Location : ${Locations[users]}`);
    let storeUsersDetails: string[]=[];
    let u = Users();
    for(let k of u){
        if(k.available){
            storeUsersDetails.push(k.name,k.address);
            break;
        }
    }
    console.log(storeUsersDetails);
    return storeUsersDetails ;
}

getUsersLocation(Locations.uk);