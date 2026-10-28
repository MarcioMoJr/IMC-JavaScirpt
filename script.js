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

    let classificacao

    if(imc < 18.5) {
        classificacao = 'Abaixo do peso normal'
    } else if(imc < 25){
        classificacao = 'Peso normal'
    } else if(imc < 30){
        classificacao = 'Excesso de peso'
    } else if(imc< 35){
        classificacao = 'Obesidade grau I'
    } else if(imc < 40){
        classificacao = 'Obesidade grau II'
    } else {
        classificacao = 'Obesidade grau III'
    }

    res.innerHTML =`${periodoDia} ${nome}!
    <br>Seu peso atual é ${peso} kg<br>
    Seu Índice de Massa Corporal é ${imc.toFixed(2)}<br>
    Classificação: ${classificacao}`     
}