function solucao(resultados) {
	//seu codigo aqui
    let pontos = 0;
    
    for (let resultado of resultados) {
        if (resultado === 'V') {
            pontos = pontos + 3;
        } else if (resultado === 'E') {
            pontos = pontos + 1;
        }
    }
    
    console.log(pontos);
}

solucao(["V", "E", "V", "E"])