const txtn1 = document.getElementById("n1");
const txtn2 = document.getElementById("n2");
const reply = document.getElementById("resp");
const btncalcular = document.getElementById("calcular");

btncalcular.addEventListener('click', calcular);

function calcular(){
    const op1 = parseFloat(txtn1.value);
    const op2 = parseFloat(txtn2.value);
    let resp = op1 + op2;
    reply.innerText = resp;
}