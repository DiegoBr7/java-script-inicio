function criarAluno(){
     
return  {

                 nome : "Igor" , 
                 nota1 : n1 , 
                 nota2 : n2, 
                 media : function(){
                 return(this.nota1+this.nota2)/ 2
                 }
                }
            }
var turma = [
             criarAluno("Igor",9,6),
             criarAluno("joao",7,4)
]
var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());
