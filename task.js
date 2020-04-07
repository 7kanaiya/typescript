// users list -> id,name,available,address
//enum Location {"ind","usa","uk"};
function Users() {
    var users = [
        {
            id: 1,
            name: "jack",
            available: true,
            location: Locations.india,
            address: "mumbai"
        },
        {
            id: 1,
            name: "jack",
            available: true,
            location: Locations.india,
            address: "delhi"
        },
        {
            id: 1,
            name: "jack",
            available: true,
            location: Locations.usa,
            address: "Los angeles"
        },
        {
            id: 1,
            name: "jack",
            available: true,
            location: Locations.uk,
            address: "manchester"
        }
    ];
    return users;
}
var Locations;
(function (Locations) {
    Locations[Locations["india"] = 0] = "india";
    Locations[Locations["usa"] = 1] = "usa";
    Locations[Locations["uk"] = 2] = "uk";
})(Locations || (Locations = {}));
;
function getUsersLocation(users) {
    console.log("User Location : " + Locations[users]);
    var storeUsersDetails = [];
    var u = Users();
    for (var _i = 0, u_1 = u; _i < u_1.length; _i++) {
        var k = u_1[_i];
        if (k.available) {
            storeUsersDetails.push(k.name, k.address);
            break;
        }
    }
    console.log(storeUsersDetails);
    return storeUsersDetails;
}
getUsersLocation(Locations.uk);
