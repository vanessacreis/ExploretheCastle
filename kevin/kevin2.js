function segundaFaseKevin(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Você decide esperar, afinal nem tem ideia do caminho que fizeram para chegar ali e voltar seria complicado.\n2. Impaciente, você sai do quarto e tenta refazer o caminho até o salão.')

        if (question == 1){
            window.location.href = "./kevin3.html"
            break
        }else if (question == 2){
            window.location.href = "./gameover2.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}