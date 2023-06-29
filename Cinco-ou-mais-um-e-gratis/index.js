function solucao(precos) {
    //seu codigo aqui
    let soma = 0;
    
     let menorValor = precos[0];  
    
    for (let valor of precos) {
        soma = soma + valor;   
        
        if (valor < menorValor) {
            menorValor = valor;
        }
    }
    
    if (precos.length >= 5) {   
        soma = soma - menorValor;
    }
    
    console.log(soma);
}

solucao([100, 500, 100, 200, 50]);
solucao([100, 500, 100]);