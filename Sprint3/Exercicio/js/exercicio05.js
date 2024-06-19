var nota = Number(prompt('Digite a sua nota: '));
var frequencia = Number(prompt('Digite sua frequencia: '));
var media = 7;
var freq = 75;

if(nota >= 7 && frequencia >= freq){
    document.write('APROVADO')
}
else{
    document.write('REPROVADO')
}
