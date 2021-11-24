function terceiraFaseKevin(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Nega e agradece o convite, saindo apressadamente pelo corredor\n2. Aceita e o segue, curioso para saber de onde ele te conhece.')

        if (question == 1){
            window.location.href = "./gameover3.html"
            break
        }else if (question == 2){
            window.location.href = "./youwinKevin.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}