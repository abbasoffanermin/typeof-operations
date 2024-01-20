//Task1
//part1
// const arr = [10, 20, 30, 40, 50]
// const [firstNumber, secondNumber, ...rest] = arr
// const length = arr.length
// console.log(firstNumber, secondNumber, length);
//part2
// const myString = "String"
// const myNumber = 4
// const MyBoolean = true
// console.log(typeof myNumber, typeof myString, typeof MyBoolean);
//Part3
let firstNumber = 19
let secondNumber = 5
let sum = firstNumber + secondNumber
let dif = firstNumber - secondNumber
let prod = firstNumber * secondNumber
let quo = firstNumber / secondNumber
let rem = firstNumber % secondNumber

secondNumber = "6"
let bool1 = firstNumber == secondNumber
let bool2 = firstNumber === secondNumber
let bool3 = firstNumber !== secondNumber
let bool4 = firstNumber != secondNumber
let bool5 = firstNumber <= secondNumber
let bool6 = firstNumber >= secondNumber
let bool7 = firstNumber < secondNumber
let bool8 = firstNumber > secondNumber
console.log(bool1, bool2, bool3, bool4, bool5, bool6, bool7, bool8);
//Part4
let a = (firstNumber % 2 == 0) && (firstNumber > 0)
let b = (firstNumber % 2 == 0) || (firstNumber > 0)
let c = (firstNumber < 0) //ve ya 
let d = !(firstNumber > 0)


//Task2
//Part1
const scores = [5, 6, 3, 7, 5]
const [firstScores, secondScores, ...rest] = scores
console.log(firstScores, secondScores);
const student = {
    name: "Narmin",
    age: 19,
    isEnrolled: true
}
const { name, age } = student
console.log(name, age);
//Part2
console.log(typeof student);
console.log(scores.length);
//Part3
let difScores = firstScores - secondScores
let sumScores = firstScores + secondScores
console.log(difScores, sumScores);
console.log(firstScores > secondScores, firstScores < secondScores);
let var1 = (firstScores > secondScores) && (firstScores > student.age)
let var2 = (firstScores > secondScores) || (firstScores > student.age)
console.log(var1, var2);
console.log(!student.isEnrolled);