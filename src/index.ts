import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}


// type User = {
//     name: string,
//     age: number | string,
// };

// type size = 'small' | 'medium' | 'large';

// let total: number = 100;
// let user: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// let age = 10;

// const numbers: number[] = [1, 2, 4, 5, 6, 3, 0];
// numbers.push('12');

// const user: { name: string, age: number } = {
//     name: 'Bob',
//     age: 12,
// };

// const user: User = {
//     name: 'Bob',
//     age: 12,
//     // isActive: false,
// };

// user.age = "15";
// user.name = 1;

// type eventType = 'lesson' | 'deadline';
// const ev: eventType = 'homework';

// let age: any = 10;
// age = "12";

// let age: unknown = 10;
// age = "12";
// age.toFixed();

// type size = 'small' | 'medium' | 'large';

// enum Sizes {
//     small = 'small',
//     medium = 'medium',
//     large = 'large',
// };

// const button: size = "large";
// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number):string {
//     return `${num1}` + `${num2}`;
// }

// console.log(add(1, 1));

// function add(num1: number, num2: number): void {
//     console.log(num1 + num2);
// };

// add(2, 3);

// type User = {
//     name: string,
// };

// function greeting(user: User): void {
//     console.log(`Hello, ${user.name}`);
// };

// type User = {
//     name: string,
//     age: number,
//     hobby: string,
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//     return {
//         name,
//         age,
//         hobby,
//     }
// };

// userConstructor('Bob', 23, 'photo');

// type Car = {
//     color: string,
//     price: number,
//     currency: string,
//     start: (color: string) => {};
// }

// const car: Car = {
//     color: 'red',
//     price: 1000,
//     currency: 'UAH',
//     start(color) {
//         console.log("Start" + this.color);
//     },
// };

// type User = {
//     name: string,
//     age: number,
//     role?: string,
// }

// const user: User = {
//     name: 'Bob',
//     age: 12,
// };

// const admin: User = {
//     name: 'Ben',
//     age: 24,
//     role: 'Admin',
// };
