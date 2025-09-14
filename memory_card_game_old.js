let cartas_tabuleiro = new Array();// é um, array numérico de 10 posições onde cada número corresponde a um personagem.
let senha_cores = new Array(); // é um, array numérico de 4 posições onde cada número corresponde a uma cor.
let acertos = 0;
let tentativas = 7;
let pontos = 0;
let numero_personagem = 9;


function mudar_personagem_carta(){
  numero_personagem++;
  document.getElementById("selecionado").src = mudar_personagem(numero_personagem);
  
}

function mudar_personagem(numero){
  if(numero > 9 ) {
    numero = (numero % 10);
  }
  return caminho_figura(numero);
}


function numero_figura(caminho) {
  let numero = 0;
  switch(caminho){
    case caminho = "imagens/DrWily3.jpg" :
        numero = 0;
        break;
    case caminho = "imagens/cutman_v2.jpeg":
        numero = 1;
        break;
    case caminho = "imagens/gutsman.jpg":
        caminho = 2;
        break;
    case caminho = "imagens/Elecman.jpg":
        caminho = 3;
        break;
    case caminho = "imagens/iceman_v1.jpeg":
        numero = 4;
        break;
    case caminho = "imagens/fireman.jpg":
        numero = 5;
        break;
    case caminho = "imagens/bombman.jpg" :
        numero = 6;
        break;
    case caminho = "imagens/roll.png":
        numero = 7;
        break;
    case caminho = "imagens/Dr_Light_v2.jpeg":
        numero = 8;
        break;
    case caminho = "imagens/Megaman.png":
        numero = 9;
        break;
  }
  return numero;

}


function caminho_figura(cor_numero){
    let caminho = "";
    switch(cor_numero){
        case 0:
            caminho = "imagens/DrWily3.jpg";
            break;
        case 1:
            caminho = "imagens/cutman_v2.jpeg";
            break;
        case 2:
            caminho = "imagens/gutsman.jpg";
            break;
        case 3:
            caminho = "imagens/Elecman.jpg";
            break;
        case 4:
            caminho = "imagens/iceman_v1.jpeg";
            break;
        case 5:
            caminho = "imagens/fireman.jpg";
            break;
        case 6:
            caminho = "imagens/bombman.jpg";
            break;
        case 7:
            caminho = "imagens/roll.png";
            break;
        case 8: 
            caminho = "imagens/Dr_Light_v2.jpeg";
            break;
        case 9:
            caminho = "imagens/Megaman.png";
            break;
    }
    return caminho;
}

function escolher_carta(){
  //primeiro pego a imagem da carta selecionada padrão (carta com o elemento de id selecionado no html)
  //depois capturo a imagem oculta no atributo name das cartas do tabuleiro quando ela for clicada
  //se as imagens da 
}


function pegar_elemento_clicado(){
    
  //document.querySelectorAll("img").forEach( function(img) {
      document.querySelectorAll(".p2").forEach( function(img) {
      img.addEventListener("click", function(event){
      //let elemento = event.target || event.srcElement;
      let elemento = event.target
      let id = elemento.id;
      //let src = elemento.src
      let src = elemento.getAttribute("src");
      document.getElementById("resul").innerHTML = src;
      //alert(id);
  })
  });  
}

function retornar_name_elemento_clicado() {
      //seleciono todos os elementos da classe desejada
      document.querySelectorAll(".p2").forEach( function(img) {
      //adiciono listener em todos eles
      img.addEventListener("click", function(event){
      let elemento = event.target
      let id = elemento.id;
      let name = elemento.getAttribute("name");
      //document.getElementById("resul").innerHTML = src;
      return name;
  })
  });  
}



function gerar_senha_cores() {
  for (let c = 0; c <= 3 ; c++) {
    let n1 = Math.floor(Math.random() * 8);
    senha_cores[c] = n1;
  }
}

function gerar_personagens_carta(){
  //gera doze numeros aleatorios de 0 ate 10
  let n1 = 0; 
  for (let ca = 0; ca <= 11 ; ca++) {
    n1 = Math.floor(Math.random() * 10);
    cartas_tabuleiro[ca] = n1;
  //para cada um destes numeros pegar o atributo src correspondete (imagem) e colocar na carta
  for (cb = 0; cb < cartas_tabuleiro.length; cb++) 
  {
    document.getElementsByClassName("p2")[cb].src = caminho_figura(cartas_tabuleiro[cb]);
    document.getElementsByClassName("p2")[cb].name =caminho_figura(cartas_tabuleiro[cb]);
  }
  //colocar a imagem (ou o numero) correspondente no atributo name de cada carta.

  setTimeout(function(){girar_todas()},150);
  //girar as cartas
  
  //voltar as cartas para o fundo padrão
  setTimeout(function(){esconder_imagens_cartas()},1000);
}
}

function esconder_imagens_cartas(){
 
  for (let cc = 0; cc <= 12;cc++){
    //document.getElementsByClassName('p2')[0].src = "imagens/fundo_carta.jpeg";
    document.getElementsByClassName('p2')[cc].src = "imagens/fundo_carta.jpeg";
    }
}


function escolher(cor,numero){
  if (tentativas >= 1) 
  {
  //primeiro preciso descobrir qual é a posição do array senha_cores q estamos tentando adivinhar
  //para isso faço um switch do número de acertos
  switch(acertos) {
    case 0:
      id = "s1";
      break;
    case 1:
      id = "s2";
      break;
    case 2:
      id = "s3";
      break;
    case 3:
      id= "s4";
      break;
    default:
      finalizar();
      break;
  }
  numero = numero * 1; //só para me certificar que recebi o número correspondente a cor lá do html
  if (numero == senha_cores[acertos]) {
    //efeito de girar a carta
    girar_carta(id);
    document.getElementById(id).style.backgroundColor = cor;
    document.getElementById(id).innerHTML = '&nbsp;&nbsp;&nbsp;<i class="fa fa-smile-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;';
    acertos++;
    tentativas = 7;
    pontos++;
    aparecer_desaparecer();
    atualizar();
  }
  else {
    aparecer();
    tentativas--;
    atualizar();
  }
  } //fim do if da função escolher
  } //fim da função escolher




function atualizar(){
    document.getElementById("tentativas").innerHTML = tentativas;
    document.getElementById("pontuacao").innerHTML = pontos;
    if (acertos >= 4 || tentativas <= 0) {
      document.getElementById("reiniciar").style.display = "block";
    }

  }


function girar_carta(id) {
  document.getElementById(id).className = 'carta-girando-3d';
  setTimeout(()=>{document.getElementById(id).className='carta'},2000);
}

function girar_carta_180(id) {
  document.getElementById(id).className = 'carta-girando-x';
  setTimeout(()=>{document.getElementById(id).className='carta'},1000);
}

function girar_todas(){
  for (let a = 0; a < 12; a++) {
  document.getElementsByClassName('p2')[0].className += ' carta-girando-x ';
  document.getElementsByClassName('p2')[a].className += ' carta-girando-x ';
  setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[0].className ='p2'},1000);
  setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[a].className ='p2'},1000);
  }
}

function girar_todas_2(){
  
  document.getElementsByClassName('p2')[0].className = 'carta-girando-x';
  setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[0].className='p2'},1000);
  
}



function desaparecer(){
  $('#erro').hide();
}

function aparecer() {
  $('#erro').show();
  setTimeout(desaparecer,1500)
}

function aparecer_desaparecer() {
  $('#acerto').show();
  setTimeout(() => {
    $('#acerto').hide()
  }, 1500);
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}