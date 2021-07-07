// tuple
// ex of array in TS:
// const tableau = Array<number>(1, 2, 3);
// const autreTableau: number[] = [1, 2, 3];

let tuple: [string, string, number?]; //? => optional
tuple = ["John", "Smith", 33];
tuple = ["John", "Smith"]; // works without the number => optional

// object

const person = {
  firstNam: "Redo",
  lastName: "Bidou",
};

console.log(person.firstNam);
console.log(person.lastName);

// 2nd way
const person2: {
  firstNam: string;
  lastName: string;
  age?: number;
} = {
  firstNam: "Redo",
  lastName: "Bidou",
};

console.log(person2)
