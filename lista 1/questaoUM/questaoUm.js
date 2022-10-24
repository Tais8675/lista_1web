var inteiro= prompt("digite um numero para verificar se ele e inteiro");
function checkFloat(inteiro) {
    if(inteiro % 1 ===0) {
        console.log("e um numero inteiro");
    }else {
        console.log("nao e um numero inteiro");
        
    }
}
console.log(inteiro);
checkFloat(inteiro);