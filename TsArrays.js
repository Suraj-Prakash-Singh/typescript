function maxInArray(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxInArray([1, 22, -9, 112]));
function filterLegalUsers(userList) {
    var aboveEighteen = userList.filter(function (list) { return (list === null || list === void 0 ? void 0 : list.age) > 18; });
    return aboveEighteen;
}
var userList = [
    { name: "Suraj", age: 23, gender: "male" },
    { name: "Sid", age: 22, gender: "female" },
    { name: "Harshit", age: 17, gender: "gay" },
    { name: "nishant", age: 11, gender: "bandar" },
];
console.log("legal age users-> ", filterLegalUsers(userList));
