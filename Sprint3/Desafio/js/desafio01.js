var A = 10
var B = 20
var C = null

console.log('A='+ A +', B='+ B +' e C='+ C +'')
C = A
A = B
B = C
C = null
console.log('A='+ A +', B='+ B +' e C='+ C +'')