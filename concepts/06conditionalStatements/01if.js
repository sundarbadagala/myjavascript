const num1 = 6
const num2 = -6
const num3 = 0
const marks = 56
//---------------------------------------IF----------------------
if(num1 > 0){
    console.log('positive number')
}

//---------------------------------------ELSE----------------------
if(num2 > 0){
    console.log('positive number')
}else{
    console.log('negative number')
}

//---------------------------------------ELSE IF----------------------
if(num3 > 0){
    console.log('positive number')
}else if(num3 < 0){
    console.log('negative number')
}else{
    console.log('zero number')
}
//---------------------------------------MULTI ELSE IF----------------------
if(marks > 90){
    console.log('EXCELLENT')
}else if(marks > 70){
    console.log('DISTINCT')
}else if(marks > 50 ){
    console.log('AVERANGE')
}else if(marks > 30){
    console.log('OKAY')
}else{
    console.log('VERY BAD')
}

