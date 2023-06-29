function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let encontrada = 0;
    for (let palavra of palavras) { 
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
            console.log(palavra);
            
            encontrada++;
        }
    }
    
    if (encontrada === 0) {
        console.log("NENHUMA");
    }
}

solucao("a", "v", ["aveia", "manha", "ave"]);