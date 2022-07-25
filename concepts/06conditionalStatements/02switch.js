const marks = 50

switch(marks){
    case 90:
        console.log('EXCELLENT');
        break;
    case 70:
        console.log('DISTINCT');
        break;
    case 50: 
        console.log('AVERANGE');
        break;
    default:
        console.log('VERY BAD');
        break;
}
//===========================================================================================
const animal = 'dog'

switch(animal){
    case 'cow':
    case 'dog':
    case 'giraffee':
    case 'horse':
        console.log('This animals are not extinct');
        break;
    case 'dinosaur':
        console.log('This animals are extinct');
        break;
    default:
        console.log('This animal is not exist')
}
//=============================================================================================
const val = 1

let res = 'this is : '
switch(val){
    case 0:
        res += 'zero';
    case 1:
        res += 'one';
    case 2:
        res += 'two';
    case 3:
        res += 'three';
    case 4:
        res += 'four';
        console.log(res)
        break;
    case 5:
        res += 'five only'
        console.log(res)
        break;
    default:
        console.log('out of number');
        break;
}