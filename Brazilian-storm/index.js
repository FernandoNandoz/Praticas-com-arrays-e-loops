function solucao(notas) {
	//seu codigo aqui
    let maiorNota = notas[0];
    let menorNota = notas[0];
    
    let somaRestante = 0;
      
    for (let nota of notas) {
        somaRestante = somaRestante + nota;
        
        if (maiorNota < nota) {
            maiorNota = nota;
        } 
        
        if (menorNota > nota) {
            menorNota = nota;
        }
    }
      
    somaRestante = somaRestante - (maiorNota + menorNota);
    
    const media = somaRestante / (notas.length - 2);
   
    console.log(media);
}

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

solucao(notas);