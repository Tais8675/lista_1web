let numR = prompt ("digite um numero real"); // number
let funcionNumber = console.log( typeof Number(numR))
console.log(numR);
function checkFloat(numR) {
    if(numR % 1 ===0) {
        console.log("e um numero real inteiro");
    }else {
        console.log("e um numero real");
        
    }
}
checkFloat(numR);

//como verificar se e um numero?