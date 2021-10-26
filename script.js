//function criarAluno(nome,n1,n2){
     
//return  {

//                 nome : nome , 
//                 nota1 : n1 , 
//                 nota2 : n2, 
//                 media : function(){
//                 return(this.nota1+this.nota2)/ 2
//                 }
//                }
//            }

function aluno(nome,n1,n2){

this.nome = nome;
this.nota1 = n1;
this.nota2 = n2;

this.media = function media (){
    return(this.nota1+this.nota2)/2;
}
}

//var turma = [
  //           criarAluno("Igor",9,6),
  //           criarAluno("joao",7,4)
//]
//var aluno = turma[2];

var a = new aluno("igor",8,7);
console.log(a)

//for(var aluno of turma)
//console.log(aluno.nome+"-"+aluno.media);
