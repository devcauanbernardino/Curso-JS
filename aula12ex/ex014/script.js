function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var back = window.document.getElementById('back')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        img.src = 'manha.jpg'
        back.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
        
        
}

