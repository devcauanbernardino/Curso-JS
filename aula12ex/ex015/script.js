function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //Se o valor que foi colocado no input for igual a zero ou o ano que nao chegou ainda, ele vai me retornar ao erro.

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

       if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if(idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
       } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if(idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-f.jpg')
            } 
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
    
}