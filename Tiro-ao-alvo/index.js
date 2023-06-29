function solucao(disparos) {
	//seu codigo aqui
    let cont = 0;
    
    for (let ponto of disparos) {
        if (ponto > 70) {
            cont++;
        }
    }

    if (cont >= 3) {
        console.log(cont);
    } else {
        console.log("ELIMINADO");
    }
}

solucao([0, 10, 50, 70, 80, 30]);
solucao([0, 50, 90, 80, 100, 80, 40]);