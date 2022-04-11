function msg() 
{
    alert('Hello');
}

//dom
alert("Hello");

let age = prompt('Age?');
alert(` ${age}`); 

let result = confirm("Exam passed");

alert( result );

//Query selector
var info=document.querySelector("p");  
console.log(info);  
var info=document.querySelector(".myClass");  
console.log(info); 
var info=document.querySelector("#myid");  
console.log(info);
var info=document.querySelector('[target]');  
console.log (info);  
  
//Promise
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);