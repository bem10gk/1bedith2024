// MATRIX, LIVRE
// MONSTROS S.A.,LIVRE
// KONG, LIVRE
// O Rei Leão, 12
// Divertidamente, LIVRE

function setup() {
    createCanvas(400, 280);
  }
  
  function draw() {
    background(200);
    let recomendacao = geraRecomendacao(idade);
    text (recomendacao, width / 2, height/ 2)
  }
  
  function geraRecomendacao(idade) {
    if (idade >= 10) {
  
    return "MATRIX";
   } else {
    
    return ""
    }
  }