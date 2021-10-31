function imc() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    peso = parseInt(peso)
    altura = parseFloat(altura)

    if (peso !== '' && altura !== '') {

        var valorimc = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';
        if (valorimc < 1) {
            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-secondary" role="alert">
            Você deve inserir sua altura na formatação correta com <b> . </b> não <b> , </b></div>`;
        }

        else if (valorimc < 18.5) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-secondary" role="alert">
            Seu IMC é ${valorimc} e você está Abaixo do peso normal </div>`;
           
        } else if (valorimc < 25) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-info" role="alert">
            Seu IMC é ${valorimc} e você está com Peso normal, Parabéns!!! </div>`;
          
        } else if (valorimc < 30) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-dark" role="alert">
            Seu IMC é ${valorimc} e você está com Excesso de peso </div>`;
           
        } else if (valorimc < 35) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-warning" role="alert">
            Seu IMC é ${valorimc} e você está com Obesidade classe I </div>`;
          
        } else if (valorimc < 40) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-danger" role="alert">
            Seu IMC é ${valorimc} e você está com Obesidade classe II </div>`;
          
        } else if (valorimc > 41) {

            document.getElementById("resultadoimc").innerHTML = `<div class="alert alert-danger" role="alert">
           <b> Seu IMC é ${valorimc} e você está com Obesidade classe III </b> </div>`;
          
        }

    }

}

function tmb() {
    var genero = document.getElementById('sexo').selectedIndex;
    var tipo = document.getElementById('sexo').options;
    sexo = (tipo[genero].text);

    var fisica = document.getElementById('atividadefisica').selectedIndex;
    var atividadefisica = document.getElementById('atividadefisica').options;
    atividade = (atividadefisica[fisica].text);

    var peso = document.getElementById('peso').value;
    var idade = document.getElementById('idade').value;

    p = parseInt(peso);
    i = parseInt(idade);

    if (i <= 30 && sexo == "Feminino") {
        var resultado1 = 14.7 * p + 496;
        if (atividade == "Leve") {
            var necessidade = resultado1 * 1.56;

        } else if (atividade == "Moderada") {
            var necessidade = resultado1 * 1.64;
        } else if (atividade == "Intensa") {
            var necessidade = resultado1 * 1.82;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado1.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }

    if (i >= 31 && i <= 60 && sexo == "Feminino") {
        var resultado2 = 14.7 * p + 496;
        if (atividade == "Leve") {
            var necessidade = resultado2 * 1.56;

        } else if (atividade == "Moderada") {
            var necessidade = resultado2 * 1.64;
        } else if (atividade == "Intensa") {
            var necessidade = resultado2 * 1.82;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado2.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }

    if (i > 61 && sexo == "Feminino") {
        var resultado3 = 14.7 * p + 496;
        if (atividade == "Leve") {
            var necessidade = resultado3 * 1.56;

        } else if (atividade == "Moderada") {
            var necessidade = resultado3 * 1.64;
        } else if (atividade == "Intensa") {
            var necessidade = resultado3 * 1.82;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado3.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }

    if (i <= 30 && sexo == "Masculino") {
        var resultado4 = 15.3 * p + 679;
        if (atividade == "Leve") {
            var necessidade = resultado4 * 1.55;

        } else if (atividade == "Moderada") {
            var necessidade = resultado4 * 1.78;
        } else if (atividade == "Intensa") {
            var necessidade = resultado4 * 2.10;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado4.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }

    if (i >= 31 && i <= 60 && sexo == "Masculino") {
        var resultado5 = 15.3 * p + 679;
        if (atividade == "Leve") {
            var necessidade = resultado5 * 1.55;

        } else if (atividade == "Moderada") {
            var necessidade = resultado5 * 1.78;
        } else if (atividade == "Intensa") {
            var necessidade = resultado5 * 2.10;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado5.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }

    if (i >= 61 && sexo == "Masculino") {
        var resultado6 = 15.3 * p + 679;
        if (atividade == "Leve") {
            var necessidade = resultado6 * 1.55;

        } else if (atividade == "Moderada") {
            var necessidade = resultado6 * 1.78;
        } else if (atividade == "Intensa") {
            var necessidade = resultado6 * 2.10;
        }

        document.getElementById("resultadotmb").innerHTML = `<div class="alert alert-info" role="alert">
        A sua TMB é de ${resultado6.toFixed(2)} cal, com a atividade fisica ${atividade} a quantidade necessária de calorias diária é de ${necessidade.toFixed(2)} cal
      </div>`;
    }




}

function fcm(){
    var frequencia = document.getElementById('frequenciaIdade').value;
    
    frequencia = parseInt(frequencia);
    fmc = 206.9 - (0.67 * frequencia);

    document.getElementById("resultadofcm").innerHTML = `<div class="alert alert-info" role="alert">
    De acordo com sua idade de ${frequencia} anos sua estimativa de Frequência Cardíaca Máxima é de ${fmc.toFixed(2)} bpm.  </div>`;


}







/*
function soma() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    r = parseInt(n1) + parseInt(n2)
    document.getElementById("resultadoatividade").innerHTML = `<div class="alert alert-primary" role="alert">
    ${r}
  </div>`;
}
*/