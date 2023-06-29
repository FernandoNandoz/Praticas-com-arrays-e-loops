function solucao(sequencia) {
	//seu codigo aqui
    
    let posicao = 0;
    for (let direcao of sequencia) {
        if (direcao === '>') {
            posicao++;
        } else if (direcao === '<') {
            posicao--;
        }
        
        if (posicao < 0) {
            posicao = 6;
        } else if (posicao > 6) {
            posicao = 0;
        }
    }
    console.log(posicao);
}

solucao(">>><>");