///var c = 30
let a = 300
if (true) {
    let a = 20
    const b = 30
    console.log("inner:",a);
     //c = 50
}
console.log("Outer:",a);
//console.log(b);
//console.log(c);