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
var inherit_1 = require("./inherit");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(cutomerPassword) {
        var _this = _super.call(this, cutomerPassword) || this;
        _this.cutomerPassword = cutomerPassword;
        return _this;
    }
    Customer.prototype.UserAddress = function () {
        if (this.address) {
            console.log(this.address);
        }
        _super.prototype.UserAddress.call(this);
    };
    return Customer;
}(inherit_1.Users));
var cust = new Customer("1234");
cust.firstname = "Kanaiya";
cust.lastname = "Bhanushali";
cust.userAddress = "Mumbai";
cust.userInfo();
cust.UserAddress();
cust.userLogin("kan", cust.cutomerPassword);
cust.userDetails("mumbai");
