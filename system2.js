const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const calcular = document.querySelector('#calcular');
const pResult = document.querySelector('#result') ;

calcular.addEventListener('click', btnOnclick   )

function btnOnclick(){
 var sumaInputs = calculo1.value + calculo2.value ;
}

pResult.innerText = "resultado:"  + sumaInputs