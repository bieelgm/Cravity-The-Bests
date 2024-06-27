let palavra;
function setup() {
  createCanvas(400, 400);
  palavras = palavraRandom()
   
}
function palavraRandom (){
  let palavras = ["Cravity", "The Bests"]
 palavra = random(palavras)
  return random(palavras)
}

function criarCores (){
  fill (color(random (0,255), random(0,255), random(0,255)))
  textAlign(CENTER, CENTER)
  textSize(54)
  stroke("purple")
}
  
function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length)
  let parcial = palavra.substring (0, quantidade);
  return parcial
}

function draw() {
  background("yellow");
  criarCores()
  let texto = palavraParcial(0, width)
  text(texto, 200, 200)
  
  
}
