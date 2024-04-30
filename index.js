
function displayAlert(strcomplete) {alert("strcomplete");   
}
const str1 = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
let combination1 = 2 + 2 + 6;
let combination2 = 80 / 2;
let combination3 = 42 - 2 - 1;
const strcomplete = '${str1} ${combination1} ${combination2} ${combination3}!';

console.log(strcomplete);
//expected output: You have received this message because you have been chosen to open an imortant vault. Here is the secret combination:
