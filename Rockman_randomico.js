
let n2 = 0; // repetições da função randomico definido pela função inicia_randomico (tempo limite para cada jogada)
let tentativa = 5; //Número de tentativas que a pessoa tem
let resultado = 0; //Somatório do array dos numeros capturados
let extra = 0; //pontuação extra
let total = 0; //pontuação total do usuário
let numeros = new Array();//Array formado pelos números capturados
let tempo1 = new Array(); //controle para dar o clearInterval na função tempo_restante para cada randomico
let randomicos1 = new Array(); //controle para dar o clearInterval na função randomico para cada randomico

document.getElementsByTagName("body").onload = iniciar();

function iniciar() {
    //Função que inicio a função randomicos nos cinco elementos aleatórios de uma vez.
    //Também zera a pontuação de um jogo anterior e esconde os elementos de tentativas restantes e pontos bônus
    randomico("aleatorio1",180,"start");
    randomico("aleatorio2",180,"start");
    randomico("aleatorio3",180,"start");
    randomico("aleatorio4",180,"start");
    randomico("aleatorio5",180,"start");
    document.getElementById("pontos").value = 0;
    document.getElementById("b2").style.display ="none";
    document.getElementById("b8").style.display ="none";
    document.getElementById("reiniciar").style.display ="none";


}

function finalizar(){
                //Calcula a pontuação total do usuário
                //Faz com que todos os aleatórios parem , caso ainda exista algum em atividade
                //Mostra o botão para reiniciar o jogo
                //Atribui a pontuação ao modal de jogo encerrado e mostra o modal
                 //chamar aqui a função que calcula a pontuação extra
                extra = pontos_extra(resultado);
                
                total = resultado + extra;
                document.getElementById("info").innerHTML = "JOGO ENCERRADO " + total + " PONTOS"; 
                document.getElementById("b1").style.display ="none";
                document.getElementById("b2").style.display ="none";
                //este primeiro for é para parar a função tempo_restante.
                //ele percorre o array q contém os ids retornados do setInterval e vai dendo clear interval em cada um
                for(v = 0; v < tempo1.length; v++) {
                    clearInterval(tempo1[v]);
                    }
                //este segundo for á para parar a função randômico de cada elemento, quando foi usado o setInterval para
                //iniciar a alternância dos números foi retornado um id para cada randomico e está armazenado no array randomicos1
                //vou percorrendo o array e dando um clear interval para parar a alternância.
                for (a = 0; a < randomicos1.length; a++){
                    //alert(randomicos1[a]);
                    clearInterval(randomicos1[a]); 
                }
                document.getElementById("reiniciar").style.display ="block";
                document.getElementById("modalpontos").innerHTML = "JOGO ENCERRADO " + total + " PONTOS"; 
                $("#Modal2").modal('show');
            
}

function parar(){
    n2 = 0 ;//reseta o tempo
    //fazer o switch da variavel tentativa para começar pelo elemento aleatorio1 ate aleatorio5 para parar o elemento.
    switch (tentativa)
    {
            case 5:
                elemento = "aleatorio1";
                break;
            case 4:
                elemento = "aleatorio2";
                break;
            case 3:
                elemento = "aleatorio3";
                break;
            case 2:
                elemento = "aleatorio4";
                break;
            case 1:
                elemento = "aleatorio5";
                break;
            default:
                pontuar(0);
                break;
    }   
    randomico(elemento,0,"stop");
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
            tempo_restante("parar");
            finalizar();
    
        }
}


function aux_randomico(elemento){ //gera um número aleatorio de 0 a 9  e coloca como value da tag input
    var n1 = 0;
    n1 = Math.floor(Math.random() * 10);
    document.getElementById(elemento).value = n1;
    //Vou fazer aqui o switch para colocar as imagens
    // 0 DrWily; 1 cutman ; 2 gutsman; 3 elecman; 4 iceman; 5 fireman ; 6 bombman; 7 roll ; 8 Dr Light ; 9 Rockman
    //0 DrWily3.jpg; cutman_v2.jpeg ; gutsman.jpg; Elecman.jpg ; iceman_v1.jpeg; fireman.jpg ; bombman.jpg; roll_v2.jpeg; Dr_Light_v2.jpeg; Megaman.png.
    switch(n1)
    {
        case 0:
            document.getElementById(elemento).src = "imagens/DrWily3.jpg";
            break;
        case 1:
            document.getElementById(elemento).src = "imagens/cutman_v2.jpeg";
            break;
        case 2:
            document.getElementById(elemento).src = "imagens/gutsman.jpg";
            break;
        case 3:
            document.getElementById(elemento).src = "imagens/Elecman.jpg";
            break;
        case 4:
            document.getElementById(elemento).src = "imagens/iceman_v1.jpeg";
            break;
        case 5:
            document.getElementById(elemento).src = "imagens/fireman.jpg";
            break;
        case 6:
            document.getElementById(elemento).src = "imagens/bombman.jpg";
            break;
        case 7:
            document.getElementById(elemento).src = "imagens/roll_v2.jpeg";
            break;
        case 8:
            document.getElementById(elemento).src = "imagens/Dr_Light_v2.jpeg"
            break;
        case 9:
            document.getElementById(elemento).src = "imagens/Megaman.png";
            break;
        default:
            break;
    }
}

function randomico(elemento, velocidade, startstop) {
    //coloquei a tag input dentro de uma div para poder funcionar
    if (startstop == "stop")
    {
        if (n2 > 100){finalizar();}
        if(tentativa <=5 && tentativa >=0)
        {
            switch(elemento) {
            case  "aleatorio1":
                p = 0;
                clearInterval(randomicos1[p]);
                break;
            case "aleatorio2":
                p = 1;
                clearInterval(randomicos1[p]);
                break;
            case "aleatorio3":
                p = 2;
                clearInterval(randomicos1[p]);
                break;
            case "aleatorio4":
                p = 3;
                clearInterval(randomicos1[p]);
                break;
            case "aleatorio5":
                p = 4;
                clearInterval(randomicos1[p]);
                break;
            default:
                break;
            }
        }
        var numero1 = parseInt(document.getElementById(elemento).value);
        document.getElementById(elemento).value = numero1;
        if (isNumeric(numero1) == true ) {
        switch(numero1)
        {
            case 0:
                document.getElementById(elemento).src = "imagens/DrWily3.jpg";
                break;
            case 1:
                document.getElementById(elemento).src = "imagens/cutman_v2.jpeg";
                break;
            case 2:
                document.getElementById(elemento).src = "imagens/gutsman.jpg";
                break;
            case 3:
                document.getElementById(elemento).src = "imagens/Elecman.jpg";
                break;
            case 4:
                document.getElementById(elemento).src = "imagens/iceman_v1.jpeg";
                break;
            case 5:
                document.getElementById(elemento).src = "imagens/fireman.jpg";
                break;
            case 6:
                document.getElementById(elemento).src = "imagens/bombman.jpg";
                break;
            case 7:
                document.getElementById(elemento).src = "imagens/roll_v2.jpeg";
                break;
            case 8:
                document.getElementById(elemento).src = "imagens/Dr_Light_v2.jpeg"
                break;
            case 9:
                document.getElementById(elemento).src = "imagens/Megaman.png";
                break;
            default:
                break;
        }

        pontuar(numero1);
        }else{
            document.getElementById(elemento).parentElement.innerHTML = 0;   
            pontuar(0);
        }
    } 
    if (startstop == "start") 
    {
         if (n2 > 100){finalizar();}
         else if(n2 <=100) {
            tempo1.push(tempo_restante()); //iniciei a função tempo_restante e armazenei o id para poder dar o clearInterval depois.
            randomico1 = setInterval(function(){aux_randomico(elemento)},velocidade);
            randomicos1.push(randomico1);
              }else{
                  var numero1 = parseInt(document.getElementById(elemento).value);
                  document.getElementById(elemento).value = numero1;
                  document.getElementById(elemento).style.display = "none";
                    if (isNumeric(numero1) == true ) {
                        document.getElementById(elemento).parentElement.innerHTML = numero1;
                        pontuar(numero1);
                      }else{
                         document.getElementById(elemento).parentElement.innerHTML = 0; 
                         pontuar(0);
                        }
                      }
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






