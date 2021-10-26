
//nome do aluno - nota 1 - nota 2 - media - Aprovado/ reprovado


var nomes = ["I","J","M"];
var notasA = [7.0,6.5,9.5];
var notasB = [5.0,9.6,4.0];


function media(n1,n2){
return(n1+n2)/2

}

function passou (media){

if(media>7){
    resultado = "aprovado"
}else{

    return resultado = "reprovado"
}

}

for(var index in nomes){

var nota1 = notasA[index];
var nota2 = notasB[index];

var m = media(nota1,nota2)

    console.log(nomes[index]+
        nota1+
        "-"+
        nota2+
        "-"+
        m +
        "-"+
        passou(m));

}
