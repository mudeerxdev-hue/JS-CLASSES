let skills = "HTML, CSS, javaSrcipt";
let skills_2 = "HTML| CSS| javaSrcipt";
let skills_3 = "html#css#javasript";

let skills_list = skills.split(",");
let skills_list_2 = skills.split(",");
let skills_list_3 = skills.split(",");

console.log(skills);
console.log(skills_2);
console.log(skills_3);

console.log(skills_list);
console.log(skills_list_2);
console.log(skills_list_3);

// join: convert array to string

let message = ["Welcome", "to ", "SMIT"];
// let convert_into_string = message.join("   ");
// console.log(convert_into_string); 

let word = "mudeer";
let convert_into_array = word.split("");
let reverse_array = convert_into_array.reverse();
let convert_into_string = reverse_array.join("");

console.log(word);
