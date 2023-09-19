let estudantes = [
  {
    nome:"Raime",
    nota1: 5,
    nota2: 7,
  },
  {
    nome:"Regina",
    nota1: 7,
    nota2: 7,
  },
  {
    nome:"Belmira",
    nota1: 4,
    nota2: 6,
  },
  {
    nome:"Antonio",
    nota1: 10,
    nota2: 7,
  }

];


function calcularMedia (nota1, nota2) {
  return (nota1 + nota2) / 2 ;
}


function aluno (printNota){
  let mediaAluno = calcularMedia(printNota.nota1, printNota.nota2);

  if (mediaAluno >= 7) {
    alert(`
    A media do(a) aluno(a) ${printNota.nome} e: 
    ${mediaAluno.toFixed(2)}. Parabéns!
    `)
  } else{
    alert(
      `A média do(a) aluno(a) ${printNota.nome} é: 
      ${mediaAluno.toFixed(2)}. Boa sorte na próxima vez!`
    );
  }
}

for (let printNotas of estudantes) {
  aluno(printNotas);
}
