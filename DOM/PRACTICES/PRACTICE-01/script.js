// function changeText() {
//   document.getElementById("heading").textContent = "Welcome Developers";
// }

// setTimeout(function () {
//   console.log("Run after 5 sec");
// }, 5000);

// let clearTimeoutBtn = document.getElementById("btn");
// let para = document.getElementById("para");

// const xyz = setTimeout(function () {
//   para.innerHTML = "Welcomt to JavaSript";
//   console.log("Run after 3 sec");
// }, 3000);

// clearTimeoutBtn.addEventListener("click", function () {
//   para.innerHTML = "By By JavaScript";
//   clearTimeout(xyz);
// });

// setInterval();
// clearInterval();

let clearIntervalBtn = document.getElementById("btn");
const clearIntervalFn = setInterval(function () {
  console.log("Hello world");
}, 1000);

clearIntervalBtn.addEventListener("click", function () {
  clearInterval(clearIntervalFn);
});
