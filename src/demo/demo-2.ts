export {};

// 1.任意值
let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7; //不能将类型“number”分配给类型“string”。ts(2322)

let myFavoriteAny: any = 'seven';
console.log('myFavoriteAny 1:', typeof myFavoriteAny, myFavoriteAny);
myFavoriteAny = 123;
console.log('myFavoriteAny 2: ', typeof myFavoriteAny, myFavoriteAny);
