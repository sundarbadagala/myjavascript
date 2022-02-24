//string methods

let str = "hello world";
console.log(str);

//lenght
console.log(str.length);

// h e l l o   w o r l d
// 0 1 2 3 4 5 6 7 8 9 10

//slice
//str.substr(startingvalue, endingvalue)
// console.log(str.slice(6,11))
// console.log(str.slice(0,5))
// console.log(str.slice(3,2))
// console.log(str.slice(3))
// console.log(str.slice(6))

//substring
//str.substr(startingvalue, lenght)
// console.log(str.substr(6,5))
// console.log(str.substr(3,2))
// console.log(str.substr(3))
// console.log(str.substr(6))

// replace
// str = 'hi hi man boy kid'
// console.log(str)
// console.log(str.replace('hi', 'hello'))
// console.log(str.replaceAll('hi', 'hello'))
// console.log(str.replace('man','vijay').replace('boy','ram').replace('kid','kumar'))
// let values = {'man':'vijay','boy':'ram','kid':'kumar'};
// console.log(str.replace(/man|boy|kid/g, m => values[m]))
// console.log(str.replace(/man|boy|kid/g,'bro'))

//case
// str = "heLLo woRlD";

// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const toCapitalize = (value) => {
//   var pieces = value.split(" ");
//   for (var i = 0; i < pieces.length; i++) {
//     var j = pieces[i].charAt(0).toUpperCase();
//     pieces[i] = j + pieces[i].substr(1).toLowerCase();
//   }
//   return pieces.join(" ");
// };
// console.log(toCapitalize(str))

//concat
// str1 = 'hello'
// str2 = 'world'
// console.log(str1+' '+str2)
// console.log(str1.concat(" ",str2))

//trim
// str = '     hello world     '
// console.log(str.length)
// console.log(str.trim())
// console.log(str.length)
// str = str.trim()
// console.log(str.length) //string is immutable so we can't change directly, we have to assign another variable to obtained value
// console.log(str.trimStart() ,',')
// console.log(str.trimEnd())

// padding
// str = '5'
// console.log(str.padStart(2,0))
// console.log(str.padEnd(2,0))

//chartAt
str='hello world'
console.log(str.charAt(0))
console.log(str.charAt(11))
console.log(str.charCodeAt(0)) //ascii value

//split
// str = 'abcde'
// console.log(str.split(''))
// str = 'a,b,c,d,e'
// console.log(str.split(','))
// str = 'hi man how are you'
// console.log(str.split(' '))
// str = 'a,b,c,d e'
// console.log(str.split(/,| /))
// str = 'a,b,c,d, ,e'
// console.log(str.split(/(?:,| )+/) )
// console.log(str.split(/[ ,]+/))

//indexOf
