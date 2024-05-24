function maxInArray(array: number[]): number {
  let max: number = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(maxInArray([1, 22, -9, 112]));

// given a list of users filtering out userts with age greater than 18
interface User2 {
  name: string;
  age: number;
  gender: string;
}

function filterLegalUsers(userList: User2[]): User2[] {
  const aboveEighteen: User2[] = userList.filter((list) => list?.age > 18);
  return aboveEighteen;
}

const userList: User2[] = [
  { name: "Suraj", age: 23, gender: "male" },
  { name: "Sid", age: 22, gender: "female" },
  { name: "Harshit", age: 17, gender: "gay" },
  { name: "nishant", age: 11, gender: "bandar" },
];

console.log("legal age users-> ",filterLegalUsers(userList));
