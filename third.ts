//types in typescript
//similar to interfaces, but they let us aggregate data together

//union types
type stringOrNumber = string | number;

function printId(id : stringOrNumber){
    console.log(`this was passed: ${id}`);
}

printId("Car");
printId(10);

// What if you want to create a type that has every property of multiple types/ interfaces

//intersection types

type Employee = {
    name: string,
    age: number
};

type Male = {
    gender: string,
    color: string
};

type MaleEmployee = Employee & Male;

const Suraj: MaleEmployee = {
    name: "Singh",
    age: 23,
    gender: "male",
    color: "Pale"
}

console.log(Suraj);