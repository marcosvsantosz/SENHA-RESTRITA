function senhaRestrita() {
    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth() + 1;
    var dia = dataAtual.getDate();
    var diaCalc = parseInt(dia < 10 ? '0' + dia : dia) + 20;
    var mesCalc = parseInt(mes < 10 ? '0' + mes : mes) + 11;
    var dataFormatada = diaCalc.toString() + mesCalc.toString();
    return dataFormatada;
}

function senhaSuperRestrita() {
    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth() + 1;
    var dia = dataAtual.getDate();
    var diaCalc = parseInt(dia < 10 ? '0' + dia : dia) + 35;
    var mesCalc = parseInt(mes < 10 ? '0' + mes : mes) + 17;
    var dataFormatada = diaCalc.toString() + mesCalc.toString();
    return dataFormatada;
}

var restrita = senhaRestrita();
var div1 = document.querySelector("[id='valorRestrita']");
div1.innerHTML = restrita;

var superRestrita = senhaSuperRestrita();
var div2 = document.querySelector("[id='valorSuperRestrita']");
div2.innerHTML = superRestrita;

  
  