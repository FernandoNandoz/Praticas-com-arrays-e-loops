function solucao(letra, palavras) {
	//seu codigo aqui
    
    let qntPerderam = 0;
    for (let palavra of palavras) {
        const primeiraLetra = palavra[0];
        
        if (primeiraLetra !== letra) {
            qntPerderam++;
        }
    }
    console.log(qntPerderam);
}

solucao("m", ['nando', 'marcos', 'mateus']);
//