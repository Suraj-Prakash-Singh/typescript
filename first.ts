const x : number = 19;

function logsName(name:string){
    console.log(name);
}

logsName("Suraj");


function sum(a:number, b:number) :number {
    return a + b;
}

function isLegal(age: number): boolean {
    if(age > 18){
        return true;
    }
    return false;
}

function afterOneMinute(toRun: () => void){
    setTimeout(() => {
        toRun();
    }, 5000);
}
console.log(sum(2, 1));
console.log(isLegal(18));
afterOneMinute(() => {
    console.log("after 5 sec");
})

