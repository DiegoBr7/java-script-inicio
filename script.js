
//nome do aluno - nota 1 - nota 2 - media - Aprovado/ reprovado


var nomes = ["I","J","M"];
var notasA = [7.0,6.5,9.5];
var notasB = [5.0,9.6,4.0];


function media(n1,n2){
return(n1+n2)/2

}

for(var index in nomes){

    console.log(notasA[index]+
        "-"+
        notasA[index]+
        "-" +
        notasB[index]+
        "-"+
        media(notasA[index],notasB[index])
        );

}