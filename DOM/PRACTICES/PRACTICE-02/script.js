const heading = document.getElementById("heading");

heading.innerText = "Welcome to DOM";

// console.log(heading.innerText);

const messages = document.getElementsByClassName("message");

console.log(messages.length);

messages[1].innerText = "Second paragraph  with extra content";

const paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "white";
  paras[i].style.backgroundColor = "black";
  paras[i].style.borderRadius = "5px";
  paras[i].style.fontSize = "20px";
  paras[i].style.height = "60px";
  paras[i].style.textAlign = "center";
  paras[i].style.paddingTop = "10%";
  paras[i].style.height = "60px";
}
