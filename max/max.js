function primeiraFaseMax(){
    while (question !=1 || question !=2){
        var question = prompt ('O que fazer?\n\n1. Se afastar e ir para casa maratonar todos os filmes do Freddy Krueger.\n2. Ficar na festa estranha com gente esquisita e tentar se enturmar.')

        if (question == 1){
            window.location.href = "./gameover1.html"
            break
        }else if (question == 2){
            window.location.href = "./max2.html"
            break
        }else{
            alert('Digite 1 ou 2 ;D')
        }
    }
}