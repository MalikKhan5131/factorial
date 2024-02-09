let obj={
    name:"sahil",
    age:18,
    pincode:342001
}
// for(let a in obj){
//     // console.log(obj[a])
//     console.log(a);
// }
for(let a of Object.keys(obj)){
       console.log(obj[a])
}