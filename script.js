

const key = "f2972887761e68501b85292f1c9887f0"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-preview").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = "Humidade " + dados.main.humidity + "%"
    document.querySelector(".img-prevwie").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (  resposta => resposta.json() ) 
    
    colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}