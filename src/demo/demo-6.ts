export {};

// 1.数组的类型

// 1.1「类型 + 方括号」表示法
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci1: string[] = ['a', 'b', 'c', 'd', 'e'];
// // let fibonacci2: number[] = [1, '1', 2, 3, 5];
// console.log('fibonacci', fibonacci);
// console.log('fibonacci1', fibonacci1);
// // console.log('fibonacci2', fibonacci2);
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// // fibonacci.push('8');
// fibonacci.push(8);
// console.log('fibonacci', fibonacci);

// 1.2 数组泛型
let arr: Array<number> = [1, 2, 3, 4, 5];
console.log('arr', arr);
