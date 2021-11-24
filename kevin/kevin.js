function primeiraFaseKevin(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Agradece dizendo que prefere ficar no salão, onde pode ser visto por todos como era sua intenção.\n2. Você aceita imediatamente, imaginando ser algo relacionado ao prêmio surpresa ou a sua brilhante atuação de pirata.')

        if (question == 1){
            window.location.href = "./gameover1.html"
            break
        }else if (question == 2){
            window.location.href = "./kevin2.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}