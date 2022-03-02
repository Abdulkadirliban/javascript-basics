let name="Abdul";
let age=23;
let tell=617055631;
console.log(`Name is: ${name} Age is: ${age} and Phone is: ${tell}`)
if(age>18)
console.log('U can vote');
//-----loops------
//--forloop---
// for(let i=0;i<5;i++){
//     console.log(i)
// }
//------while loop----
// let i=0;
// while(i<5){
//     console.log(i)
//     i++
// }
//------Arrays----
let list=[4,5,6,7,9]
// console.log(list)
// console.log(list[1])
//--for of loop---
// for(item of list)
// console.log(item)
//-- for in read index/key
// for(index in list)
// console.log(list[index])
//------for each--
list.forEach(function(value){
    console.log(value)
})
//------function---
function sum(a,b){
    return a+b

}
console.log("sum are: "+sum(5,3))
// another way to create function
let display=function(){
    document.write("Hellow world")
    //console.log("hellow world")
}
display()