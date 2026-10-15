let num1 = parseInt(prompt("Introdueix un numero"))
let num2 = parseInt(prompt("Introdueix un numero"))

if (num1<num2)
{

    console.log(suma(num1,num2))
}
else if (num1>num2)
{
    console.log(resta(num1,num2))
}
else
{
    console.log(multi(num1,num2))
}

function suma (a,b){
    return a+b
}

function resta (a,b){
    return a-b
}

function multi (a,b){
    return (a+b)*2
}