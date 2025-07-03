function calcular() {
    const h1 = parseInt(document.getElementById('hora1').value) || 0;
    const m1 = parseInt(document.getElementById('minuto1').value) || 0;
    const s1 = parseInt(document.getElementById('segundo1').value) || 0;

    const h2 = parseInt(document.getElementById('hora2').value) || 0;
    const m2 = parseInt(document.getElementById('minuto2').value) || 0;
    const s2 = parseInt(document.getElementById('segundo2').value) || 0;

    const op = document.querySelector('input[name="operacao"]:checked').value;

    const fator = parseInt(document.getElementById('fator').value) || 0;
    const alertaErro = document.getElementById('alertaErro');

    let total1 = h1 * 3600 + m1 * 60 + s1;
    let total2 = h2 * 3600 + m2 * 60 + s2;
    let resultado = 0;

    switch (op) {
        case 'somar':
            if (total1 === 0 || total2 === 0) {
                alertaErro.style.display = 'block';
                alertaErro.textContent = 'É necessário digitar os dois horários para realizar o cálculo. Por favor, preencha pelo menos um dos campos de horário.';
                document.getElementById('hora1').focus();
                return;
            }
            resultado = total1 + total2;
            break;
        case 'subtrair':
            resultado = total1 - total2;
            break;
        case 'multiplicar':
            resultado = total1 * fator;
            break;
        case 'dividir':
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
        document.getElementById('alertaErro').style.display = 'none';
        document.getElementById('hora1').focus();
    });
    // document.getElementById('somar').checked = true;
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
