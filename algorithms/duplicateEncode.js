// The goal of this exercise is to convert a string to a new string where each character in the new string is "1" if that character appears only once in the original string, or "0" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "111"
// "recede"   =>  "101010"
// "Success"  =>  "0100100"

const duplicateEncode = (str) => {
  const val = str.toLowerCase().split("");          // toLowerCase => O(n) + Split => O(n)
  let res = [];
  for (i in val) {                                  // loop O(n)
    const newVal = [...val];                        // spread (iteration) => O(n)
    newVal.splice(i, 1);                            // splice => O(n)
    if (newVal.includes(val[i])) {                  // includes => O(n)
      res.push(0);                                  // push => O(1)
    } else {
      res.push(1);                                  // push => O(1)
    }
  }
  return res;
};                                                  //O(n^2)

const duplicateEncode2=(str)=>{
    const res = str.toLowerCase().split('')
    return res.map((m,i)=>{
        return res.some((n,j)=> m===n && i!==j) ? '0' : '1'
    }).join('')
}

const duplicateEncode3=(str)=>{
    return str
    .toLowerCase()                                                        //O(n)
    .split('')                                                            //O(n)
    .map((n,i, arr)=>arr.some((m,j)=> m === n && i !== j) ? '0' : '1')    //O(n^2)
    .join('')                                                             //O(n)
}

const duplicateEncode4 = (str)=>{
    return str
    .toLowerCase()
    .split('')
    .map((item, i, arr)=> arr.indexOf(item) === arr.lastIndexOf(item) ? '1' : '0' )
    .join('')
}

console.log(duplicateEncode4('hello'))
