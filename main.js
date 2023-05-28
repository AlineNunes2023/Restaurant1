function sendForm(){
/* const pegaValorDaConta = document.getElementById("valorConta");
const pegaValorDaTaxa = document.getElementById("ValorTaxa");
const pegaQuantidadedePessoas = document.getElementById(quantidadedePessoas);

if(pegaValorDaConta.value ==""){
alert("Insira o valor da Conta");
}else if(pegaValorDaTaxa.value =="") {
alert("Insira o Valor da Taxa");
}else if(pegaQuantidadedePessoas.value == "") {
alert("Insira a quantidade de Pessoas");
}else {
    formEvent()
} */
}

function calcularConta() {
    const pegaValorDaConta = document.getElementById("valorConta");
    const pegaValorDaTaxa = document.getElementById("ValorTaxa");
    const pegaQuantidadedePessoas = document.getElementById("quantidadedePessoas");
const calcValorFinal = parseInt(pegaValorDaConta.value) + parseInt(pegaValorDaTaxa.value) / parseInt(pegaQuantidadedePessoas.value);

document.getElementById("resultado").innerHTML = calcValorFinal;
}

function formEvent(){
const form = document.getElementById("form");
form.addEventListener("submit", (e)=> {
e.preventDefault();

calcularConta();
});

}