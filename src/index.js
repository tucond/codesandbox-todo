// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // //let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き負荷
// val3 = "const変数上書き";

// const val3 = "const変数再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "heye",
//   age: 333
// };
// val4.name = "hehe";
// val4.adress = "here";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// //テンプレート文字列

// const name = "name";
// const age = 34;

// //従来の方法
// const message1 = "私の名前は" + name + "です" + age + "です";
// //console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です${age}です`;
// console.log(message2);

//アロー関数

//従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func1("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(19, 39));

//分割代入
// const myProfile = {
//   name: "name",
//   age: 4848
// };

// const message1 = `名前は${myProfile.name}です${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です${age}です`;
// console.log(message2);
// const myProfile = ["hehhe", 48];

// const message3 = `名前は${myProfile[0]}です${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${myProfile[0]}です${myProfile[1]}です`;
// console.log(message4);

// const sayHello = (name = "heheheh") => console.log(`こんちは${name}`);
// sayHello();
// sayHello("hhehe");

//スプレッド構文
//配列の展開

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//map やfilterを使った配列の処理

// const nameArr = ["name1", "name2", "name3"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目${nameArr[index]});
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index+1}は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "name1") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//三項演算子

//ある条件 ? 条件がtrue : 条件がfalse
// const val1 = 1 > 0 ? "trueです" : "falseです";
// // console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());
// // const num = "hshsh";
// const formattdNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力しろ";
// console.log(formattdNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? ">100" : "許容範囲か";
// };
// console.log(checkSum(50, 90));

//論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// //||は左側がfalseなら右側を返す
// //　　左側がtrueなら左側を返す
// const num = null;
// const fee = num || "価格未設定";
// console.log(fee);

// //&&は左側がtrueなら右側を返す
// //    左側がfalseなら左側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
