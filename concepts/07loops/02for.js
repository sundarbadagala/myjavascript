const n1 = 5
const n2 = 7
const n3 = 10
const n4 = 24

for(let i=1; i<=n1; i++){
    // console.log('iterate value',i)
}
for(let i=n3; i>=1; i--){
    // console.log('iterate value',i)
}

for(let i =0; i<=n3;i++,i++){
    // console.log('value',i)
}

for(let i=0; i<=n3;i +=3){
    // console.log('value',i)
}

for(let i=1; i<=10; i++){
    // console.log(`${n2}x${i} = ${n2*i}`)   //7th table
}

for(let i=1; i<=n4; i++){
    // if(i%2 === 0) console.log('even',i)
}

for(let i=1; i<=n4; i++){
    if(i%2 === 0) console.log('even', i)
    console.log('odd',i)
}