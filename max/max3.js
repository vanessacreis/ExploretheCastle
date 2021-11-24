function terceiraFaseMax(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Você mesma abre a porta e dá o primeiro passo rumo a escuridão, sem perder a oportunidade de chamar a todos de medrosos.\n2. Sugere voltarem e explorar os andares de cima, que pelo menos devem ser iluminados.')

        if (question == 1){
            window.location.href = "./youwinMax.html"
            break
        }else if (question == 2){
            window.location.href = "./gameover3.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}