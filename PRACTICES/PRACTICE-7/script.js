// PAKISTAN.KPK.AFRIDI.DARRA_ADAM_KHEL.ZURGUN_KHEL.SHAREEF_KHEL;
/*
let name = "test";
let age = 22;
let gender = "male";
let marks = 99;
let stu_class = 12;
let contact = "+92.......";
let address = "Peshawar";
*/
/*
let student_detail = {
  name: "test",
  age: 22,
  gender: "male",
  marks: 99,
  stu_class: 12,
  contact: "+92......",
  address: "Peshawar",
};

console.log(student_detail);
console.log(student_detail.address);

student_detail.id = 1319;
student_detail.age = 18;
console.log(student_detail);
*/

let products = {
  Name: "Football_Shart",
  Price: "100$",
  Location: [
    {
      city: "Peshawar",
      delivery: "Free",
    },
    {
      city: "darra",
      delivery: "Free",
    },
  ],
  discount: "10% off",
  issue_Date: "12 / 9 / 2026",
  expiry_Date: "14 / 9 / 2026",
};

console.log(products);

console.log(products.Location[1].city);
delete products.discount;
console.log(products);
