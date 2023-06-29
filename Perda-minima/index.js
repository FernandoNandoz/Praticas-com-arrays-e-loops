function solucao(precos) {
    // seu codigo aqui
      let menorPrejuizo = 999999999999999999999;
      
      for (let i = 0; i < precos.length; i++) {
          for (let x = i + 1; x < precos.length; x++) {
              const compra = precos[i];
              const venda = precos[x];
              
              const prejuizo = compra - venda;
              
              if (prejuizo > 0) {
                 if (prejuizo < menorPrejuizo) {
                     menorPrejuizo = prejuizo;
                 }
              }
          }
      }
      
      console.log(menorPrejuizo);
  }

  solucao([5, 10, 3]);
  solucao([30, 10, 54, 76, 1, 4, 35])