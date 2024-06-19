var idade = Number(prompt('Digite sua idade: '))

if(idade >= 0 && idade < 15){
    document.write('Você é criança!')
}

else if(idade >= 15 && idade < 30){
    document.write('Você é jovem!')
}

else if(idade >= 30 && idade < 60){
    document.write('Você é adulto!')
}

else{
    document.write('Você é idoso!')
}