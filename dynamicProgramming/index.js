import { factorial, factorial2, factorialMemo, factorialMemo2 } from './01factorial.js'
import {fibonacci, fibonacci2, fibonacci3} from './02fibonacci.js'
import {fibonaccis, fibonaccis2} from './03fibonacci.js'
import {gridTraveller, gridTraveller2} from './04gridTraveller.js'
import {canSum, canSum2} from './05canSum.js'
import {howSum, howSum2} from './06howSum.js'
import {bestSum, bestSum2} from './07bestSum.js'
import {canConstruct, canConstruct2} from './08canConstruct.js'
import {countConstruct, countConstruct2} from './09countConstruct.js'

// console.log(factorial(9));
// console.log(factorial(9));
// console.log(factorial(10));

// console.log(factorial2(9));
// console.log(factorial2(9));
// console.log(factorial2(10));

// console.log(factorialMemo(9));
// console.log(factorialMemo(9));
// console.log(factorialMemo(10));

// console.log(factorialMemo2(9));
// console.log(factorialMemo2(9));
// console.log(factorialMemo2(10));

// console.log(fibonaccis2(1));
// console.log(fibonaccis2(2));
// console.log(fibonaccis2(3));
// console.log(fibonaccis2(4));
// console.log(fibonaccis2(5));
// console.log(fibonaccis2(6));

// console.log(gridTraveller(1,1)); //1
// console.log(gridTraveller(2,3)); //3
// console.log(gridTraveller(3,2)); //3
// console.log(gridTraveller(3,3)); //6
// console.log(gridTraveller(18, 18)); //2333606220

// console.log(gridTraveller2(1, 1)); //1
// console.log(gridTraveller2(2, 3)); //3
// console.log(gridTraveller2(3, 2)); //3
// console.log(gridTraveller2(3, 3)); //6
// console.log(gridTraveller2(18, 18)); //2333606220

// console.log(canSum(7, [2,3])); //true
// console.log(canSum(7, [5,3,4,7])); //true
// console.log(canSum(7, [2,4])); //false
// console.log(canSum(8, [2,3,5])); //true
// console.log(canSum(8, [2])); //true
// console.log(canSum(300, [7,14]));

// console.log(canSum2(1009, [10, 8]));

// console.log(howSum(7, [2, 4, 3, 7]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2]));
// console.log(howSum(8, [2,6]));
// console.log(howSum(8, [6,2]));
// console.log(howSum(300, [7, 14]));

// console.log(howSum2(7, [2, 4, 3, 7]));
// console.log(howSum2(7, [5, 3, 4, 7]));
// console.log(howSum2(7, [2, 4]));
// console.log(howSum2(300, [42, 7, 20,]));

// console.log(bestSum(7, [2, 4, 5, 7]));
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(10, [2, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// console.log(bestSum2(7, [2, 4, 5, 7]));
// console.log(bestSum2(7, [5, 3, 4, 7]));
// console.log(bestSum2(10, [2, 5]));
// console.log(bestSum2(100, [1, 2, 5, 25]));

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'abcd']));
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'f', 'abcd']));
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cde', 'f', 'abcd']));
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cde', 'abcd']));
// console.log(canConstruct('abcdef', ['abcde', 'abc', 'cde', 'ef', 'ab']));
// console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar']));
// console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t']));
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee','eeeeee']));

// console.log(canConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct2('abcdef', ['ab', 'abc', 'cd', 'ef', 'abcd']));
// console.log(canConstruct2('abcdef', ['ab', 'abc', 'cd', 'f', 'abcd']));
// console.log(canConstruct2('abcdef', ['ab', 'abc', 'cde', 'f', 'abcd']));
// console.log(canConstruct2('abcdef', ['ab', 'abc', 'cde', 'abcd']));
// console.log(canConstruct2('abcdef', ['abcde', 'abc', 'cde', 'ef', 'ab']));
// console.log(canConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstruct2('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(canConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

// console.log(countConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(countConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(countConstruct2('abcdef', ['ab', 'abc', 'cd', 'ef', 'abcd']));
// console.log(countConstruct2('abcdef', ['ab', 'abc', 'cd', 'f', 'abcd']));
// console.log(countConstruct2('abcdef', ['ab', 'abc', 'cde', 'f', 'abcd']));
// console.log(countConstruct2('abcdef', ['ab', 'abc', 'cde', 'abcd']));
// console.log(countConstruct2('abcdef', ['abcde', 'abc', 'cde', 'ef', 'ab']));
// console.log(countConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(countConstruct2('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
// console.log(countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeef']));
// console.log(countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['ef', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));