const calculo = () =>{

    const peso = document.querySelector('#peso').value

    const gravedadLuna = 1.6
    const gravedadTierra = 9.8
    const gravedadMarte = 3.7

    let RegExr = /^[1-9]*(\.?)[1-9]+$/

    let ok = RegExr.test(peso)

    let tierra = peso/gravedadTierra 
    let luna = peso / gravedadLuna
    let marte = peso / gravedadMarte
    
    if ( ok == false){
        alert('Datos incorrectos')
    }else{
        document.getElementById('luna').innerHTML = "<img src= assets/img/luna.jpg>"+luna
        document.getElementById('tierra').innerHTML = "<img src= assets/img/descarga.jpg>"+tierra
        document.getElementById('marte').innerHTML = "<img src= assets/img/marte.jpg>"+marte
    }

}

const buttonEnviar= document.querySelector('#enviar')
buttonEnviar.addEventListener('click', calculo,);