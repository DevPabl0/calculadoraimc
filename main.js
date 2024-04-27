function calcular(){
    let nome = document.getElementById('name');
    let altura = document.getElementById('height');
    let peso = document.getElementById('weight');
    let resul = document.getElementById('res')

    if(nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        window.alert('Preencha todos os dados!');

    }
    else{
        let a = Number(altura.value);
        let p = Number(peso.value);
        let n = nome.value;
        let imc = Number(p/(a*a));
        let classificacao = "";

        if(imc < 16){

            classificacao = 'muito abaixo do peso';
        }
        else if(imc <18){
            classificacao = 'abaixo do peso';
        }
        else if(imc <25){
            classificacao = 'normal';
        }
        else if(imc <29){
            classificacao = 'acima do peso';

        }
        else if(imc <34){
            classificacao = 'obeso';

        }

        resul.innerHTML = `${n}, seu imc é de ${imc} e sua classificação é ${classificacao}`;

    }
}