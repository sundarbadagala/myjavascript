const arr = ['a','b','c','d','e','f']

//------------normal method-----------
for (let i = 0; i < arr.length; i++) {      //every iterate calculates lenght of array
    console.log(arr[i]);
}

//-----------best method---------------
const len = arr.length

for (let j = 0; j < len; j++) {             //calculate only once the length of the array
    console.log(arr[j]);
    
}