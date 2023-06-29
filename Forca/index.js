function solucao(palpite, palavra) {
	// seu codigo aqui
    let contador = 0;
    
    for (let letra of palavra) {
        if (palpite == letra) {
            contador++;
        }
    }
    
    console.log(contador);
}

solucao("a", "abelha");