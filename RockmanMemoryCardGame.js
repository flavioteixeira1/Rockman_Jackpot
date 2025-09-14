
let carta_aleatoria = [
    { personagem : "nenhum"} ,
    { id : 15},
    {imagem : "imagens/fundo_carta.jpeg"}
];

let carta_escolhida = [
    { personagem : "nenhum"} ,
    { id : 14},
    {imagem : "imagens/fundo_carta.jpeg"}
];

let numero1 = 37;
let tentativa_bonus = 0;
let n2 = 0; // repetições da função randomico definido pela função inicia_randomico (tempo limite para cada jogada)
let total_tentativas = 10; //Número de tentativas que a pessoa tem
let tentativa = 0; //Número de tentativas restantes
let resultado = 0; //Somatório do array dos numeros capturados
let extra = 0; //pontuação extra
let total = 0; //pontuação total do usuário
let numeros = new Array();//Array formado pelos números capturados
let tempo1 = new Array(); //controle para dar o clearInterval na função tempo_restante para cada randomico
let randomicos1 = new Array(); //controle para dar o clearInterval na função randomico para cada randomico

document.getElementsByTagName("body").onload = iniciar();

function iniciar() {
    
    document.getElementById("reiniciar").style.display ="none";
    document.getElementById("pontos").value = 0;
    document.getElementById("b2").style.display ="none";
    document.getElementById("b8").style.display ="none";
    tentativa = total_tentativas;
    gerar_personagem_carta(); 
   

}

function gerar_personagem_carta() {
    //escolhe um número entre 0 e 9;
    //conforme o número atribui um novo id e uma nova imagem ao objeto literal carta_aleatoria
    //Se o número for 0 o personagem vai ser o Dr. Wily e a imagem vai ser imagens/DrWily3.jpg
    //Se o número for 1 o personagem vai ser o cutman  e a imagem vai ser imagens/cutman_v2.jpeg
    //e assim por diante
    numero1 = Math.floor(Math.random() * 10);
   
    
    switch(numero1) {
        case 0:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Dr.Wily"
            carta_aleatoria.imagem = "imagens/DrWily3.jpg"
            break;

        case 1:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Cutman"
            carta_aleatoria.imagem = "imagens/cutman_v2.jpeg"
            break;

        case 2:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Gutsman"
            carta_aleatoria.imagem = "imagens/gutsman.jpg"
            break;

        case 3:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Elecman"
            carta_aleatoria.imagem = "imagens/Elecman.jpg"
            break;

        case 4:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Iceman"
            carta_aleatoria.imagem = "imagens/iceman_v1.jpeg"
            break;

        case 5:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Fireman"
            carta_aleatoria.imagem = "imagens/fireman.jpg"
            break;

        case 6:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Bombman"
            carta_aleatoria.imagem = "imagens/bombman.jpg"
            break;

        case 7:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Roll"
            carta_aleatoria.imagem = "imagens/roll.png"
            break;

        case 8: 
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Dr.Light"
            carta_aleatoria.imagem = "imagens/Dr_Light_v2.jpeg"
            break;

        case 9:
            carta_aleatoria.id = numero1;
            carta_aleatoria.personagem = "Megaman"
            carta_aleatoria.imagem = "imagens/Megaman.png"
            break;

        
            default: 
            alert("Nenhuma!!!" + numero1);
            break;
    }
}

function escolher(valor){
    //faz o switch para pegar o personagem e a imagem da carta escolhida
    //compara com a carta aleatoria
    //diminui o número de tentativas
    //atribui a pontuação
    if (tentativa >= 1) {
    
    
    switch(valor) {
        case 0:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Dr.Wily"
            carta_escolhida.imagem = "imagens/DrWily3.jpg"
            tentativa_bonus = 10;
            break;

        case 1:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Cutman"
            carta_escolhida.imagem = "imagens/cutman_v2.jpeg"
            tentativa_bonus = 9;
            break;

        case 2:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Gutsman"
            carta_escolhida.imagem = "imagens/gutsman.jpg"
            tentativa_bonus = 8;
            break;

        case 3:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Elecman"
            carta_escolhida.imagem = "imagens/Elecman.jpg"
            tentativa_bonus = 7;
            break;

        case 4:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Iceman"
            carta_escolhida.imagem = "imagens/iceman_v1.jpg"
            tentativa_bonus = 6;
            break;

        case 5:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Fireman"
            carta_escolhida.imagem = "imagens/fireman.jpg"
            tentativa_bonus = 5;
            break;

        case 6:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Bombman"
            carta_escolhida.imagem = "imagens/bombman.jpg"
            tentativa_bonus = 4;
            break;

        case 7:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Roll"
            carta_escolhida.imagem = "imagens/roll.png"
            tentativa_bonus = 3;
            break;

        case 8: 
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Dr.Light"
            carta_escolhida.imagem = "imagens/Dr_Light_v2.jpeg"
            tentativa_bonus = 2;
            break;

        case 9:
            carta_escolhida.id = valor;
            carta_escolhida.personagem = "Megaman"
            carta_escolhida.imagem = "imagens/Megaman.png"
            tentativa_bonus = 2;
            break;

    }
    
    
    if (carta_aleatoria.id == valor) {
        gerar_personagem_carta();
        valor +=2;
        tentativa +=tentativa_bonus;
        document.getElementById("escondido").src = carta_escolhida.imagem;
        setInterval(180);
        alert("parabéns, acertou !");
        pontuar(valor);
        document.getElementById("escondido").src = "imagens/fundo_carta.jpeg";
    }
    else {
        gerar_personagem_carta();
        document.getElementById("escondido").src = carta_aleatoria.imagem;
        setInterval(180);
        pontuar(0);
        alert("Não é o personagem");
        document.getElementById("escondido").src = "imagens/fundo_carta.jpeg";
    }


    }
    else finalizar();

}




function finalizar(){
                
                //Calcula a pontuação total do usuário
                //Faz com que todos os aleatórios parem , caso ainda exista algum em atividade
                //Mostra o botão para reiniciar o jogo
                //Atribui a pontuação ao modal de jogo encerrado e mostra o modal
                 //chamar aqui a função que calcula a pontuação extra
                //extra = pontos_extra(resultado);
                //total = resultado + extra;
                total = resultado;
                document.getElementById("info").innerHTML = "JOGO ENCERRADO " + total + " PONTOS"; 
                document.getElementById("b1").style.display ="none";
                document.getElementById("b2").style.display ="none";
                //este primeiro for é para parar a função tempo_restante.
                //ele percorre o array q contém os ids retornados do setInterval e vai dendo clear interval em cada um
                /*
                for(v = 0; v < tempo1.length; v++) {
                    clearInterval(tempo1[v]);
                    }
                */
                //este segundo for á para parar a função randômico de cada elemento, quando foi usado o setInterval para
                //iniciar a alternância dos números foi retornado um id para cada randomico e está armazenado no array randomicos1
                //vou percorrendo o array e dando um clear interval para parar a alternância.
                /*
                for (a = 0; a < randomicos1.length; a++){
                    //alert(randomicos1[a]);
                    clearInterval(randomicos1[a]); 
                }
                */
                document.getElementById("reiniciar").style.display ="block";
                document.getElementById("modalpontos").innerHTML = "JOGO ENCERRADO " + total + " PONTOS"; 
                $("#Modal2").modal('show');
            
}



function pontuar(numero1) {
   
    if(tentativa <=0) {
        n2 = 100;
       finalizar();
    }

    resultado = resultado + numero1;
    numeros.push(numero1);
    document.getElementById("resultado").innerHTML += numero1 + " "
    document.getElementById("pontos").value = resultado ;
    tentativa--; 

    if (tentativa ==1) {
        document.getElementById("b2").style.display ="block";
        document.getElementById("b2").innerHTML = "Resta uma última tentativa";
        }
        else {
        document.getElementById("b2").style.display ="block";
        document.getElementById("b2").innerHTML = "Restam ainda " + tentativa + " tentativas";
        }
    if(tentativa <=0) {
            //tempo_restante("parar");
            finalizar();
    
        }

}




function tempo_restante(parar){
    if (n2 > 100 && parar != "parar"){finalizar();}
    if(parar != "parar"){
        n2 = 0;
        t1 = setInterval(function() {
            document.getElementById("restante").innerHTML = "  tempo: " + ((n2 - 100)*-1);
            n2++; 
            if(n2 > 100) {
                finalizar();
            }  
        },1000);
        return t1;
    }else{
        for(v = 0; v < tempo1.length; v++) {
        clearInterval(tempo1[v]);
        }
        finalizar();
    }
   if (n2 > 100 && parar != "parar"){finalizar();}
}



function isNumeric(str){ //retorna true quando é numérico
  var er = /^[0-9]+$/;
  return (er.test(str));
}





function pontos_extra(pontos) {
    // Retorna uma pontuação extra conforme o seguinte critério: 
     //Obtêm os números escolhidos pelo usuário
    //Verifica se existem números iguais entre os números escolhidos pelo usuário
    //Se existirem 2 números iguais multiplica o resultado por 2 +1x
    //Se existirem 3 números iguais multiplica o resultado por 3 +2x
    //Se existirem 4 números iguais multiplica o resultado por 4 +3x
    //Se existirem 5 números iguais multiplica o resultado por 5 +4x

    let numeros_iguais = new Array();
    let numeros_iguais1 = new Array();
    let ocorrencias_numeros_iguais = 0;
    let extra = 0;
 
    numeros.sort();

    for (var i = 0; i <= numeros.length;i++) {
        numeros_iguais.push(numeros[i]);
    }

    numeros_iguais = uniq(numeros_iguais);

   let l = 0;
   for(let k = 0; k < numeros_iguais.length; k++){

       if(l<(numeros_iguais.length-1)){l = k + 1;} //Só para verificar se l não fica maior q o tamanho do array
       if(typeof numeros_iguais[l] === "undefined") 
         {
            numeros_iguais1.push(numeros_iguais[k]);
            break;
        }
       if(typeof numeros_iguais[l] === "undefined") {l--;}
      
         if(numeros_iguais[k] != numeros_iguais[l]  && l < numeros_iguais.length)
         {
           if(k==l){break;}
            numeros_iguais1.push(numeros_iguais[k]);
        }
   }


   ocorrencias_numeros_iguais = (numero_ocorrencias(numeros_iguais1,numeros));

   extra = pontosSwitch(pontos,ocorrencias_numeros_iguais);


    if(extra >0) {
    document.getElementById("b8").style.display ="block";
    document.getElementById("b8").innerHTML = "Pontuação de bonificação : " + extra + " por " + ocorrencias_numeros_iguais + " números repetidos ";
    }
    return extra;

  
}

function numero_ocorrencias(array1, array2) {
    let qtde = 0;
    let maior_qtde = 0;
    //recebe array1 e verifica quantas vezes os elementos desse array se repetem no array2
    //Vai retornar o maior número de ocorrências de um elemento
    //vai escrever no elemento com o id b9 do meu documento html
    for(let i =0; i<array1.length; i++) {
        for(let j=0; j<array2.length;j++) {
            if(array1[i] == array2[j]) {
                qtde++;
            }
        }
        if(qtde > maior_qtde) {maior_qtde = qtde;}
        qtde = 0;
    }
    return maior_qtde;
}




function pontosSwitch(pontos, ocorrencias_numeros_iguais) {
    switch(ocorrencias_numeros_iguais) 
    {
        case 2:
            pontos = pontos;
            break;
        case 3:
            pontos = pontos * 2;
            break;
        case 4:
            pontos = pontos * 4;
            break;
        case 5:
            pontos = pontos * 5;
            break;
        case 6:
            pontos = pontos * 6;
            break;
        default:
            pontos = 0;
            break;

    }
    return pontos;
}



function uniq(a) {
     //peguei essa função na internet para remove conteúdos iguais de dentro do array e estou usando 
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}



function dump(obj) { //Função que mostra o conteúdo de um array em um alert ou no próprio body do documento html.
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);

    // or, if you wanted to avoid alerts...

    //var pre = document.createElement('pre');
    //pre.innerHTML = out;
    //document.body.appendChild(pre)
}






