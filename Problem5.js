// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};

let userObjString = JSON.stringify(user);
let userObj = JSON.parse(userObjString)

alert(userObjString)
console.log(userObj)