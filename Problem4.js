// 4번 문제.

let user = {
  Name: "지환",
  years: 23,
};

// 아래에 코드를 작성해주세요 ~

let {Name : name, years : age, isAdmin : isAdmin} = user;
alert(name); //"지환"
alert(age); //23
alert(isAdmin?isAdmin:false); //false
