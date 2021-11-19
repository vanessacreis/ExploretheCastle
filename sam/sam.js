function primeiraFase(){
    var question = prompt ('O que fazer?\n\n1. Desaparecer discretamente pelos corredores em busca de um lugar vazio e aproveitar para explorar o estranho castelo.\n2. Fingir socializar e esperar pacientemente pela primeira oportunidade de ir para casa.')

    if (question == 1){
        window.location.href = "sam2.html"
    }else if (question == 2){
        window.location.href = "gameover1.html"
    }else{
        alert('Digite 1 ou 2 :]')
    }
}