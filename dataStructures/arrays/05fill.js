const arr1 = [1,2,3,4]
const arr2 = [1,2,3,4,5,6]


//output [1,2,3,4] => [0,0,0,0]
arr1.fill(0)

//output [1,2,3,4,5,6] => [1,2,'a','a',5,6]
arr2.fill('a',2, 4)

//output [1,2,'a','a',5,6] => ['b',2,'a','a',5,6]
const res3 = arr2.splice(0,1, 'b')      //res3 => [1]
                                        //arr2 => ['b', 2, 'a', 'a', 5, 6 ]

//output [ 'b', 2, 'a', 'a', 5, 6 ] => [ 'b', 2, 'c', 5, 6 ] 
const res4 = arr2.splice(2,2,'c')       //res4 => ['a','a']
                                        //arr2 => ['b', 2, 'c', 5, 6 ]


//============================================================================================

//FILL => at a time fill more than one element in the array // [1,2,3] => [a,a,a]
//SPLICE => fill only one element in the array at a time  // [1,2,3] => [a,2,3]

//FILL => fill one value with another value                 //[1,2,3] => [a,2,3] => fill a instead of 1
//SPLICE => fill more than one values with only one value   //[1,2,3] => [a,3]   => fill a instead of 1,2