export {};

// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种。

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber1: string | number | boolean;
// myFavoriteNumber1 = true;

// 联合类型使用 | 分隔每个类型。
// 这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。

// 访问联合类型的属性或方法
// function getLength(something: string | number): string {
//   return something.length;
//   // 类型“string | number”上不存在属性“length”。
//   // 类型“number”上不存在属性“length”。ts(2339)
// }

function getString(something: string | number): string | number {
  return something.toString();
}

const a = getString(111);
console.log('a :>> ', a);
