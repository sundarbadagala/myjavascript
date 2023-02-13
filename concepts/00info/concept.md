0 || null       null
'0' || null     '0'
------------------------
//comma operator
x = (x++, x)        //x+1 value
x = (x++, x++, x)   //x+2 value
x = (x++, 5)        //5
x = (x+=20, x)      //x+20
x = (x+=20, 10)     //10
------------------------
+true                1
typeof +true         number
!"ram"               false
-------------------------
const value = 'name'

const data = {
    name :'ram'
}

data[value]         'ram'
data['name']        'ram'
data.name           'ram'
data.value           undefined
---------------------------
const b = new Number(3)
typeof b            object
---------------------------
let val
typeof val          undefined
--------------------------
let num = 0
-> num++               0
-> ++num               2
-> num                 2
--------------------------
const obj = {1:"a", 2:"b", 3:"c", 4:"d"}
obj.hasOwnProperty(1)       true
obj.hasOwnProperty("1")     true
---------------------------
const obj = {a : "one", b : "two", a : "three"}
-> obj.a                "three"
---------------------------
function main(){
    return (()=>7)()
}
typeof main()         //number
---------------------------
function main(){
    return ()=>9
}
typeof main()()     //number
-----------------------------
typeof typeof 8     //string
-----------------------------
const numbers = [1,2,3]
-> numbers[3] = numbers     //infinite inline arrays
-----------------------------
Everything is js is either a...
a) primitive or object
b) function or object
c) only objects
d) number or object         //a
