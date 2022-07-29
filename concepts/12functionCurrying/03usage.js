const multiple=(a)=>{
    return (b)=>{
        return (c)=>{
            return a*b*c
        }
    }
}

console.log(multiple(1)(2)(3))