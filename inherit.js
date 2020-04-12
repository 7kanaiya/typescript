"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        console.log("Hello User");
        return _this;
    }
    Users.prototype.userInfo = function () {
        if (this.firstname) {
            console.log("Firstname: " + this.firstname);
        }
        ;
        if (this.lastname) {
            console.log("Lastname: " + this.lastname);
        }
        ;
        if (this.password) {
            console.log("Password: " + this.password);
        }
        ;
    };
    ;
    Users.prototype.UserAddress = function () {
        if (this.address) {
            console.log("User address: " + this.address);
        }
    };
    Users.prototype.userLogin = function (mail, password) {
        if (mail && password) {
            console.log("Thanks for login");
        }
        else {
            console.log("Invalid email or password");
        }
    };
    Users.prototype.userDetails = function (address) {
        if (address) {
            console.log("User address: " + address);
        }
    };
    Object.defineProperty(Users.prototype, "userAddress", {
        //Getter
        get: function () {
            return this.address;
        },
        //Setter
        set: function (add) {
            this.address = add;
        },
        enumerable: true,
        configurable: true
    });
    return Users;
}(abstract_1.UserLogin));
exports.Users = Users;
// let user: Users = new Users("123");
// user.firstname = "Kanaiya";
// user.lastname= "Bhanushali";
// user.userAddress = "Mumbai";
// user.userInfo();
// user.UserAddress();
