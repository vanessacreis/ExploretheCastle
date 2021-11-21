function terceiraFase(){
    while (question !=1 || question != 2){
        var question = prompt ('O que fazer?\n\n1. Aceita o convite, porque mesmo com medo, era o que você pretendia fazer.\n2. Agradece e diz que precisa voltar para seus amigos, torcendo para que ele te diga como sair logo dali.')

        if (question ==1){
            window.Location.href = "youwin.html"
            break
        } else if (question ==2){
            window.Location.href = "gameover3.html"
            break
        }else{
            alert('Digite 1 ou 2 :]')
            break
        }
    }
}