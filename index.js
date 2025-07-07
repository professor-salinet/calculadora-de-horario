function calcular() {
    const h1 = parseInt(document.getElementById('hora1').value) || 0;
    const m1 = parseInt(document.getElementById('minuto1').value) || 0;
    const s1 = parseInt(document.getElementById('segundo1').value) || 0;

    const h2 = parseInt(document.getElementById('hora2').value) || 0;
    const m2 = parseInt(document.getElementById('minuto2').value) || 0;
    const s2 = parseInt(document.getElementById('segundo2').value) || 0;

    const op = document.querySelector('input[name="operacao"]:checked').value;

    const fator = parseInt(document.getElementById('fator').value) || 0;
    const alertaHorarioInicial = document.getElementById('alertaHorarioInicial');
    const alertaHorarioFinal = document.getElementById('alertaHorarioFinal');
    const alertaFator = document.getElementById('alertaFator');

    const somar = document.getElementById('somar');
    const subtrair = document.getElementById('subtrair');
    const dividir = document.getElementById('dividir');
    const multiplicar = document.getElementById('multiplicar');

    let total1 = h1 * 3600 + m1 * 60 + s1;
    let total2 = h2 * 3600 + m2 * 60 + s2;
    let resultado = 0;

    switch (op) {
        case 'somar':
            limparAlertas();
            if (total1 === 0) {
                alertaHorarioInicial.textContent = 'É necessário digitar um horário inicial para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaHorarioInicial.style.display = 'block';
                document.getElementById('hora1').focus();
                return;
            }
            if (total2 === 0) {
                alertaHorarioFinal.textContent = 'É necessário digitar um horário a ser resolvido para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaHorarioFinal.style.display = 'block';
                document.getElementById('hora2').focus();
                return;
            }
            resultado = total1 + total2;
            break;
        case 'subtrair':
            limparAlertas();
            if (total1 === 0) {
                alertaHorarioInicial.textContent = 'É necessário digitar um horário inicial para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaHorarioInicial.style.display = 'block';
                document.getElementById('hora1').focus();
                return;
            }
            if (total2 === 0) {
                alertaHorarioFinal.textContent = 'É necessário digitar um horário a ser resolvido para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaHorarioFinal.style.display = 'block';
                document.getElementById('hora2').focus();
                return;
            }
            resultado = total1 - total2;
            break;
        case 'multiplicar':
            limparAlertas();
            if (fator === 0) {
                alertaFator.textContent = 'É necessário digitar um fator para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaFator.style.display = 'block';
                document.getElementById('hora2').focus();
                return;
            }
            resultado = total1 * fator;
            break;
        case 'dividir':
            limparAlertas();
            if (fator === 0) {
                alertaFator.textContent = 'É necessário digitar um fator para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                alertaFator.style.display = 'block';
                document.getElementById('hora2').focus();
                return;
            }
            resultado = fator !== 0 ? Math.floor(total1 / fator) : 0;
            break;
    }

    if (resultado < 0) resultado = 0;

    const rh = Math.floor(resultado / 3600);
    const rm = Math.floor((resultado % 3600) / 60);
    const rs = resultado % 60;

    document.getElementById('horaResultado').value = rh;
    document.getElementById('minutoResultado').value = rm;
    document.getElementById('segundoResultado').value = rs;
}

function limpar() {
    ['hora1', 'minuto1', 'segundo1', 'fator', 'hora2', 'minuto2', 'segundo2', 'horaResultado', 'minutoResultado', 'segundoResultado'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('hora1').focus();
    limparAlertas();
    // document.getElementById('somar').checked = true;
}

function limparAlertas() {
    document.getElementById('alertaHorarioInicial').style.display = 'none';
    document.getElementById('alertaHorarioFinal').style.display = 'none';
    document.getElementById('alertaFator').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('somar').addEventListener('click', function () {
        document.getElementById('resultadoDiv').style.display = 'block';
        document.getElementById('fatorDiv').style.display = 'none';
    });

    document.getElementById('subtrair').addEventListener('click', function () {
        document.getElementById('resultadoDiv').style.display = 'block';
        document.getElementById('fatorDiv').style.display = 'none';
    });

    document.getElementById('multiplicar').addEventListener('click', function () {
        document.getElementById('fatorDiv').style.display = 'block';
        document.getElementById('lblFator').textContent = 'Fator de multiplicação:';
        document.getElementById('resultadoDiv').style.display = 'none';
    });

    document.getElementById('dividir').addEventListener('click', function () {
        document.getElementById('fatorDiv').style.display = 'block';
        document.getElementById('lblFator').textContent = 'Fator de divisão:';
        document.getElementById('resultadoDiv').style.display = 'none';
    });
});

document.getElementById('hora1').focus();
