function name() {
    console.log("R");
    console.log("O");
    console.log("M");
    console.log("A");
    console.log("N");
}
//name()

/*  function addNum(num1, num2){//parameter
 console.log(num1 + num2)
}
addNum(2,2)//Arguement */

function addNum(num1, num2){//parameter
    //let result = num1 + num2
    //return result
    return num1 + num2
   }
   
   const result = addNum(2, 2)
   console.log("Result: ",result);

   function Username(loginUsername){
    if(loginUsername === undefined){
        console.log("Enter username");
        return
     } 
     return `${loginUsername} just loggedd in`
    }
   console.log(Username())