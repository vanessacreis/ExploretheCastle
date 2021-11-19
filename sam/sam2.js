function segundaFase(){
    var question = prompt ('O que fazer\n\n1. Arriscar passar pela janela e sair logo dali, mesmo que isso te garanta alguns arranhões.\n2. Seguir pelos corredores tranquilamente, afinal, adultos não tem medo de assombração.')

    if (question == 1){
        window.location.href = 'gameover1.html'
    }else if (question == 2){
        window.location.href = 'sam3.html'
    }else{
        alert('Digite 1 ou 2 :]')
    }
}