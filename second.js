//interfaces
//to assign types for objects we can use interfaces
var user = {
    name: "Suraj",
    age: 18,
    male: true
};
function isLegal(user) {
    if ((user === null || user === void 0 ? void 0 : user.age) > 18)
        return true;
    return false;
}
console.log(isLegal(user));
