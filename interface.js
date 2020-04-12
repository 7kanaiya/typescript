var test = /** @class */ (function () {
    function test() {
    }
    return test;
}());
var testdata = {
    fname: "test",
    lname: "test"
};
console.log(testdata.fname);
console.log(testdata.lname);
var empdata = {
    fname: "kanaiya",
    lname: "bhanushali",
    emp_sal: 20000,
    emplogin: function (data) {
        console.log(data);
        return data;
    },
    login: {
        userLogin: {
            emailId: "k@k.com",
            password: "123"
        }
    }
};
console.log(empdata.fname);
console.log(empdata.lname);
console.log(empdata.login.userLogin.emailId);
console.log(empdata.login.userLogin.password);
