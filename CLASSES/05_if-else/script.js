let percn = Number(prompt("Enter your percentage"));

if (percn < 0 || percn > 100) {
  document.write("Invaild percentage");
} else if (percn >= 90) {
  document.write("Your Grade = A+");
} else if (percn >= 80) {
  document.write("Your Grade = A");
} else if (percn >= 60) {
  document.write("Your Grade = B");
} else if (percn >= 50) {
  document.write("Your Grade = C");
} else {
  document.write("Your are Fail ");
}
