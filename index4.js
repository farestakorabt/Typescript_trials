// tuple
// ex of array in TS:
// const tableau = Array<number>(1, 2, 3);
// const autreTableau: number[] = [1, 2, 3];
var tuple; //? => optional
tuple = ["John", "Smith", 33];
tuple = ["John", "Smith"]; // works without the number => optional
// object
var person = {
    firstNam: "Redo",
    lastName: "Bidou"
};
console.log(person.firstNam);
console.log(person.lastName);
// 2nd way
var person2 = {
    firstNam: "Redo",
    lastName: "Bidou"
};
console.log(person2);
