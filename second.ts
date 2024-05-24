//interfaces
//to assign types for objects we can use interfaces

const user = {
    name: "Suraj",
    age: 18,
    male: true
}

interface User{
    name: string,
    age: number,
    male: boolean
}

function isLegal(user: User): boolean {
    if(user?.age > 18) return true;
    return false;
}

console.log(isLegal(user));