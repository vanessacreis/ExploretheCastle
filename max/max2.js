function segundaFaseMax(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Acompanhar os que escolhem ir embora, já pensando numa desculpa para fugir das outras festas.\n2. Ficar com a maioria e conhecer o castelo porque lugares assim não sempre incríveis.')

        if (question == 1){
            window.location.href = "./gameover2.html"
            break
        }else if (question == 2){
            window.location.href = "./max3.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}