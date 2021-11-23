function terceiraFaseMax(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n')

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