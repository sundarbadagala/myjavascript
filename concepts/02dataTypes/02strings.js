// strings is sequence of characters that represents a text value
// in javascript strings are surrounded by quotes
// strings can have in single quote or double quote or backticks

const firstName = 'rjam'
const lastName = 'raj'
const language = "javaScript"
const country = `india`
const letters = 'aAbB'

//-----------------------------------------CONCAT STRINGS------------------------
const res1 = 'ram' + ' raj'
const res2 = 'vijay' + ' kumar'
const res3 = `${'vivek'} ${'sagar'} `

const res4 = firstName + lastName
const res5 = `${firstName} ${lastName}`      //recommended
const res6 = firstName.concat(' ',lastName) //not recommended

const content1 = 'my name is ' + firstName + ' ' + lastName + '. I like ' + language + ' and I am from ' + country 
const content2 = `my name is ${firstName} ${lastName}. I like ${language} and I am from ${country}`

const content3 = 'my name is "' + firstName +' '+ lastName + '", from '  + country
const content4 = `my name is "${firstName} ${lastName}", from ${country}`

//-----------------------------------------LENGTH---------------------------------
const len = firstName.length
//-----------------------------------------ACCESS CHARACTER------------------------
const cr1 = firstName[0] //first character of ram => r
const cr2 = firstName[firstName.length-1] //last character of ram => m
const cr5 = firstName[Math.floor((firstName.length -1 )/ 2)] //middle character

const cr3 = firstName.charAt(0)
const cr4 = firstName.charAt(firstName.length -1)
const cr6 = firstName.charAt((firstName.length-1)/2)

const cr7 = letters.charCodeAt(0)   //a => 97
const cr8 = letters.charCodeAt(1)   //A => 65

console.log(cr7)
console.log(cr8)
