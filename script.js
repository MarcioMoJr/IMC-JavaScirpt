function calcular() {
    const nome = document.getElementById('txtnome').value.trim()
    const peso = Number(document.getElementById('txtpeso').value.replace(',','.'))
    const altura = Number(document.getElementById('txtaltura').value.replace(',','.'))
    const res = document.getElementById('res')

    if (nome === '' || peso <= 0 || altura <= 0){
        window.alert('[ERRO] Preencha todos os dados!')
        return
    }

    const hora = new Date().getHours()
    let periodoDia

    if (hora < 12){
        periodoDia = 'Bom dia'
    } else if (hora < 18){
        periodoDia = 'Boa tarde'
    } else {
        periodoDia= 'Boa noite'
    }

    const imc = peso / (altura * altura)

    let classificacao, cor

    if(imc < 18.5) {
        classificacao = 'Abaixo do peso normal'
        cor = 'abaixo'
    } else if(imc < 25){
        classificacao = 'Peso normal'
        cor = 'normal'
    } else if(imc < 30){
        classificacao = 'Excesso de peso'
        cor = 'excesso'
    } else if(imc< 35){
        classificacao = 'Obesidade grau I'
        cor = 'obesidade1'
    } else if(imc < 40){
        classificacao = 'Obesidade grau II'
        cor = 'obesidade2'
    } else {
        classificacao = 'Obesidade grau III'
        cor = 'obesidade3'
    }

    document.getElementById('periodoDia').innerText = `${periodoDia}, ${nome}!`
    document.getElementById('imc').innerText = imc.toFixed(2)
    document.getElementById('classificacao').innerText = classificacao
    document.getElementById('classificacao').className = cor
    res.hidden = false
}