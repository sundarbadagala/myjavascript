const anyNumber = /^\d{10}$/i //any 10 digits
const numberStartWith9or8or7or6 = /^[6,7,8,9]\d{10}$/i //(6/7/8/9) and any 9 digits
const numberWith91 = /^\+91[6,7,8,9]\d{10}$/i //+91(6/7/8/9) and any 9 digits

console.log(anyNumber.test(1234567890));
