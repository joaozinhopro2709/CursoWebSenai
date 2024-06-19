var chuva = prompt('Está chovendo, sim ou não? ')
var temperatura = Number(prompt('Qual a temperatura atual? '))

if (temperatura <= '25' && chuva == 'sim') {
    document.write('Precisamos escolher outro destino!')
}
else if (temperatura <= '25' && chuva == 'não') {
    document.write('Precisamos escolher outro destino!')
}
else if (temperatura >= '25' && chuva == 'sim') {
    document.write('Precisamos escolher outro destino!')
}
else if (temperatura >= '25' && chuva == 'não') {
    document.write('Vamos para a praia!')
}
else {
    document.write('Dados inválidos, por favor insira dados válidos')
}