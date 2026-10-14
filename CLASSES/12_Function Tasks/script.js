// // =================
// // LEVEL NO 1 END            FUNCTION FUNDAMENTALS
// // =================

// =================
// QUESTION_NO_01
// =================

/*function welcomeMsg(UserName) {
  return `Welcome ${UserName}`;
}

let result = welcomeMsg("Mudeer");
console.log(result);*/

// =================
// QUESTION_NO_02
// =================

/*function AddNum(a, b) {
  return a + b;
}

let result = AddNum(10, 20);
console.log(result);*/

// =================
// QUESTION_NO_03
// =================

/*function CalculateResult(price, quentity) {
  return price * quentity;
}

let result = CalculateResult(300, 5);
console.log(result);*/

// =================
// QUESTION_NO_04
// =================

// function welcomeUser(name = "Guest") {
//   return `Welcome ${name}`;
// }

// let result = welcomeUser(pro);
// console.log(result);

// // =================
// // LEVEL NO 1 END
// // =================

// // =================
// // LEVEL NO 2 START        FUNCTION + CONDITION
// // =================

// // =================
// // QUESTION_NO_05
// // =================

// function checkAge(Age) {
//   if (Age < 18) {
//     return `You are Not Adult`;
//   } else if (Age > 18) {
//     return `You are Adult`;
//   } else {
//     return `Involid Number`;
//   }
// }

// let AgeResult = checkAge(Number(prompt("Enter  your Age")));
// console.log(AgeResult);

// // =================
// // QUESTION_NO_06
// // =================

// function CheckResult(marks) {
//   if (marks < 50) {
//     return `you are Fail`;
//   } else if (marks >= 50) {
//     return `you are Pass`;
//   } else {
//     return `Involid Number`;
//   }
// }

// let marksResult = CheckResult(Number(prompt("Enter your Marks")));
// console.log(marksResult);

// =================
// QUESTION_NO_07
// =================

// function CheckNum(number) {
//   if (number % 2 === 0) {
//     return `${number} is Even Number`;
//   } else if (number % 2 !== 0) {
//     return `${number} is Odd Number`;
//   } else {
//     return `Involid Number`;
//   }
// }

// let NumResult = CheckNum(Number(prompt("Check the number is even or odd")));
// console.log(NumResult);

// =================
// QUESTION_NO_08
// =================

// function CheckLogin(isLogin) {
//   if (isLogin === "true") {
//     return `Welcome  Back`;
//   } else {
//     return `Please login first`;
//   }
// }

// let LoginResult = CheckLogin(prompt("Enter the Bolleon"));
// console.log(LoginResult);

// // =================
// // LEVEL NO 2 END
// // =================

// // =================
// // LEVEL NO 3 START           THINK BEFORE YOU CODE
// // =================

// =================
// QUESTION_NO_09
// =================

// function CalculateDiscount(price) {
//   if (price >= 10000) {
//     return price * (20 / 100);
//   } else if (price >= 5000 && price <= 9999) {
//     return price * (10 / 100);
//   } else if (price < 5000 && price > 0) {
//     return price;
//   }
// }

// let priceResult = CalculateDiscount(10000);
// console.log(priceResult);

// =================
// QUESTION_NO_10
// =================

// function CalculateGrade(marks) {
//   if (marks >= 90 && marks <= 100) {
//     return `Grade A`;
//   } else if (marks >= 80 && marks < 90) {
//     return `Grade B`;
//   } else if (marks >= 70 && marks < 80) {
//     return `Grade C`;
//   } else if (marks >= 60 && marks < 70) {
//     return `Grade D`;
//   } else if (marks >= 0 && marks < 60) {
//     return `You are Fail`;
//   } else {
//     return `Involid Number`;
//   }
// }

// let GradeResult = CalculateGrade(85);
// console.log(GradeResult);

// // =================
// // QUESTION_NO_11
// // =================

// function CheckTempreture(tempreture) {
//   if (tempreture >= 35 && tempreture <= 100) {
//     return `It's  hot`;
//   } else if (tempreture >= 25 && tempreture <= 34) {
//     return `Weather is normal`;
//   } else if (tempreture <= 24) {
//     return `It's Cold`;
//   }
// }

// let tempretureResult = CheckTempreture(80);
// console.log(tempretureResult);

// // =================
// // LEVEL NO 3 END
// // =================

// // =================
// // LEVEL NO 4 START              REAL WORLD PROBLEMS
// // =================

// // =================
// // QUESTION_NO_12
// // =================

// function CheckStock(productName, quantity) {
//   if (quantity > 0) {
//     return `Laptop is Availible ${quantity}`;
//   } else if (quantity == 0) {
//     return `Laptop is out of Stock ${quantity}`;
//   }
// }

// let StockResult = CheckStock("laptop", 0);
// console.log(StockResult);

// // =================
// // QUESTION_NO_13      ERROR SHOW KARTA HAN
// // =================

// function CalculateShiping(orderAmount, Expected) {
//   if (orderAmount >= 5000 && Expected == 0) {
//     return `OrderAmount is ${orderAmount} and Expected is ${Expected} `;
//   } else if (orderAmount <= 4999 && Expected == 0) {
//     return `OrderAmount is ${orderAmount} and Expected is ${Expected} `;
//   }
// }

// let ShippingResult = CalculateShiping(5000);
// console.log(ShippingResult);

// ===============================
// CHALENGE MINI PROJECTS
// ==============================

// // =================
// // QUESTION_NO_14
// // =================

// function calculateAverage(mark1, mark2, mark3) {
//     let average = (mark1 + mark2 + mark3) / 3;
//     return average;
// }

// function checkResult(average) {
//     if (average >= 50) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// function generateResult(name, average) {
//     let result = checkResult(average);

//     return `Student: ${name}
// Average: ${average}
// Result: ${result}`;
// }

// let average = calculateAverage(80, 75, 79);

// console.log(generateResult("Abdul", average));

// 13, 14 ,15 is not solving
