var x = 19;
function logsName(name) {
    console.log(name);
}
logsName("Suraj");
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
function afterOneMinute(toRun) {
    setTimeout(function () {
        toRun();
    }, 5000);
}
console.log(sum(2, 1));
console.log(isLegal(18));
afterOneMinute(function () {
    console.log("after 5 sec");
});
