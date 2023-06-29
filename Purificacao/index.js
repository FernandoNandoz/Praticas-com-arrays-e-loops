function solucao(stringCorrompida) {
	// seu codigo aqui
    
    let stringCorreta = '';
    for (let caractere of stringCorrompida) {
        if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' ||                caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' || caractere === '.') {
            //
        } else {
            stringCorreta = stringCorreta + caractere;
        }
    }
    
    console.log(stringCorreta);
}

solucao("*Canis %lupus )familiaris");