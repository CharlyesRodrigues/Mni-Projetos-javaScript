const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    const valorImc = (peso / (altura * altura)).toFixed(1);

    if (nome === "" | altura === "" | peso === "") {

        alert("Por favor preecha todos os campos");
    } else {


        let classificacao = "";

        if (valorImc < 18.5) {

            classificacao = 'Abaixo do peso';
            
        } else if (valorImc < 25) {

            classificacao = ' Com peso Ideal.Parabéns !!!';
        } else if (valorImc < 30) {

            classificacao = 'Levemente acima do peso';
          
        } else if (valorImc < 35) {

            classificacao = 'com Obsesidade grau I';
        } else if (valorImc < 40) {

            classificacao = 'com Obsesidade grau II';
        } else {

            classificacao = 'com Obsesidade grau III. Cuidado !!!';
        }

        resultado.textContent = `${nome} o seu IMC  é ${valorImc} e vc esta ${classificacao}`

    }


}


calcular.addEventListener('click', imc);
