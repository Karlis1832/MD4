console.log('Ready for coding');

const add = (a: number, b:number)  => a + b
   
  console.log("1Task") 
  console.log(add(1, 2),
  console.log(add(1, 10),
  console.log(add(99, 1),
  )))

  const getType =(value: any) => typeof value
    
    console.log("2Task") 
    console.log(getType(1));  
    console.log(getType(false));  
    console.log(getType({}));  
    console.log(getType(null));  
    console.log(getType('string'));  
    console.log(getType(['array']));

const sameSame = (a:any, b:any) => a===b 

console.log ("3Task")
console.log(sameSame(2, 3));
console.log(sameSame(3, 3)); 
console.log(sameSame(1, '1')); 
console.log(sameSame('10', '10')); 

const bthChar =(a: string, b:number) => a[b]

console.log("4Task")
console.log(bthChar('abcd',1))
console.log(bthChar('zyxbwpl',5))
console.log(bthChar('gfedcba',3))

const removeFirst3 = (a: string) => a.slice(3)

console.log("5Task")
console.log(removeFirst3('abcdefg'))
console.log(removeFirst3('1234'))
console.log(removeFirst3('fgedcba'))

const extractLast3Chars = (a: string) => a.slice(-3)

console.log('6Task')
console.log(extractLast3Chars('abcdefg'))
console.log(extractLast3Chars('1234'))
console.log(extractLast3Chars('fgedcba'))

const getFirst3Chars = (a: string) => a.slice(0, 3)


console.log("7Task")
console.log(getFirst3Chars('abcdefg'))
console.log(getFirst3Chars('1234'))
console.log(getFirst3Chars('fgedcba'))

const getFirstHalf = (a: string ) => a.slice(0, a.length / 2)

console.log("8Task")
console.log(getFirstHalf('abcdefgh'))
console.log(getFirstHalf('1234'))
console.log(getFirstHalf('gedcba'))

const removeLast3 = (a: string) => a.slice(0, a.length -3)

console.log('9Task')
console.log(removeLast3('abcdefg'))
console.log(removeLast3('1234'))
console.log(removeLast3('fgedcba'))

const getPercentage = (a: number, b:number) => (a * b) / 100

console.log('10Task')
console.log(getPercentage(100, 50))
console.log(getPercentage(10, 1))
console.log(getPercentage(500, 25))

const sixValueEquation = (a: number, b:number, c:number, d:number, e:number, f:number) =>
Math.pow((( a+ b - c) * d) / e, f) 

console.log('11Task')
console.log(sixValueEquation(6,5,4,3,2,1))
console.log(sixValueEquation(6,2,1,4,2,3))
console.log(sixValueEquation(2,3,6,4,2,3))

const checkEven = (a: number) => a % 2 === 0

console.log('12Task')
console.log(checkEven(10))
console.log(checkEven(-4))
console.log(checkEven(5))
console.log(checkEven(-111))

const howManyTimesAinB = (a: string, b: string) => b.split(a).length - 1

console.log('13Task')
console.log(howManyTimesAinB('m', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('h', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('?', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('z', 'how many times does the character occur in this sentence?'))

const checkWholeNumber = (a:number) => Number.isInteger(a)

console.log('14__Task')
console.log(checkWholeNumber(4))
console.log(checkWholeNumber(1.123))
console.log(checkWholeNumber(1048))
console.log(checkWholeNumber(10.48))

const checkNumberDoMath = (a:number, b:number) => (a < b) ? (a / b) : (a * b)

console.log(15)
console.log(checkNumberDoMath(10, 100))
console.log(checkNumberDoMath(90, 45))
console.log(checkNumberDoMath(8, 20))
console.log(checkNumberDoMath(2, 0.5))

const stringConcatenation = (a:number, b:number) => (a < b) ? (a / b) : (a * b)

console.log('15__Task')
console.log(checkNumberDoMath(10, 100))
console.log(checkNumberDoMath(90, 45))
console.log(checkNumberDoMath(8, 20))
console.log(checkNumberDoMath(2, 0.5))

const twoStringConcatenationEndBeginning = (a:string, b:string) => (a.includes(b)) ? (b + a) : (a + b);

console.log('16__Task')
console.log(twoStringConcatenationEndBeginning("cheese", "cake"))
console.log(twoStringConcatenationEndBeginning("lips", "s"))
console.log(twoStringConcatenationEndBeginning("Java", "script"))
console.log(twoStringConcatenationEndBeginning(" think, therefore I am", "I"))

const roundNumber = (a:number) => Math.round(a * 100) / 100

console.log('17__Task')
console.log(roundNumber(2.12397))
console.log(roundNumber(3.136))
console.log(roundNumber(1.12397))
console.log(roundNumber(26.1379))

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

function splitIntoDigits(a: number): number[] {
  const digits: number[] = [];
  for (const ch of a.toString()) {
        digits.push(parseInt(ch));
  }
  return digits;
}

console.log('18__Task')
console.log(splitIntoDigits(10))
console.log(splitIntoDigits(931))
console.log(splitIntoDigits(193278))

// myFunction(10)
// Expected
// [1,0]

// myFunction(931)
// Expected
// [9,3,1]

// myFunction(193278)
// Expected
// [1,9,3,2,7,8]

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const textEditor = (str1 :string, str2 :string) => str1.replace('%', '') + str2.replace('%', '').split('').reverse().join('');

console.log('19__Task')
console.log(textEditor('java', 'tpi%rcs'))
console.log(textEditor('c%ountry', 'edis'))
console.log(textEditor('down', 'nw%ot'))

// myFunction('java', 'tpi%rcs')
// Expected
// 'Javascript'

// myFunction('c%ountry', 'edis')
// Expected
// 'Countryside'

// myFunction('down', 'nw%ot')
// Expected
// 'Downtown'

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function primeFunction(number: number) {
  function checkPrime(number: number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (checkPrime(number)) {
    return number;
  } else {
    while (checkPrime(number) === false) {
      number++;
    }
  }
  return number;
}

console.log('20__Task')
console.log(primeFunction(38))
console.log(primeFunction(7))
console.log(primeFunction(115))
console.log(primeFunction(2000))



// myFunction(38)
// Expected
// 41

// myFunction(7)
// Expected
// 7

// myFunction(115)
// Expected
// 127

// myFunction(2000)
// Expected
// 2003









// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function oneDivisableWithOther (x: number, y:number) {
  if (x % y === 0) {
    return x;
  } else {
    let next = x + 1;
    while (next % y !== 0) {
      next++;
    }
    return next;
  }
}

console.log ('21__Task')
console.log(oneDivisableWithOther(1, 23))
console.log(oneDivisableWithOther(23, 23))
console.log(oneDivisableWithOther(7, 3))
console.log(oneDivisableWithOther(-5, 7))

// myFunction(1, 23)
// Expected
// 23

// myFunction(23, 23)
// Expected
// 23

// myFunction(7, 3)
// Expected
// 9

// myFunction(-5, 7)
// Expected
// 0

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function insertAfterEvery3rdChar(a: string, b:string) {
  let result = '';
  for (let i = a.length - 1; i >= 0; i--) {
      result = a[i] + result;
      if ((a.length - i) % 3 === 0) {
          result = b + result;
      }
  }
  return result;
}

console.log ('22__Task')
console.log(insertAfterEvery3rdChar('1234567','.'))
console.log(insertAfterEvery3rdChar('abcde','$'))
console.log(insertAfterEvery3rdChar('zxyzxyzxyzxyzxyz','w'))

// myFunction('1234567','.')
// Expected
// '1.234.567'

// myFunction('abcde','$')
// Expected
// 'ab$cde'

// myFunction('zxyzxyzxyzxyzxyz','w')
// Expected
// 'zwxyzwxyzwxyzwxyzwxyz'

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function increaseBy1(string: string): string {
  let result = "";
    for (const char of string) {
      const charCode = char.charCodeAt(0);
      const nextCharCode = charCode + 1;
      const nextChar = String.fromCharCode(nextCharCode);
      result += nextChar;
  }
  return result;
}

console.log ('23__Task')
console.log (increaseBy1('bnchmf'))
console.log (increaseBy1('bgddrd'))
console.log (increaseBy1('sdrshmf'))



// myFunction('bnchmf')
// Expected
// 'coding'

// myFunction('bgddrd')
// Expected
// 'cheese'

// myFunction('sdrshmf')
// Expected
// 'testing'

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const arrayToNthEl = (a: number [], n: number) => a[n-1]

console.log ('24__Task')
console.log (arrayToNthEl([1,2,3,4,5],3))
console.log (arrayToNthEl([10,9,8,7,6],5))
console.log (arrayToNthEl([7,2,1,6,3],1))

// myFunction([1,2,3,4,5],3)
// Expected
// 3

// myFunction([10,9,8,7,6],5)
// Expected
// 6

// myFunction([7,2,1,6,3],1)
// Expected
// 7

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeFromArray = (a: number[]) => a.slice(3) 

console.log ('25__Task')
console.log (removeFirstThreeFromArray([1,2,3,4]))
console.log (removeFirstThreeFromArray([5,4,3,2,1,0]))
console.log (removeFirstThreeFromArray([99,1,1]))

// myFunction([1,2,3,4])
// Expected
// [4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// []

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractLast3CharsArray = (a: number [] ) => a.slice(-3)

console.log('26__Task')
console.log(extractLast3CharsArray([1,2,3,4]))
console.log(extractLast3CharsArray([5,4,3,2,1,0]))
console.log(extractLast3CharsArray([99,1,1]))

// myFunction([1,2,3,4])
// Expected
// [2,3,4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// [99,1,1]

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFirst3 = (a: number[]) => a.slice(0, 3)

console.log('27__Task')
console.log(extractFirst3([1,2,3,4]))
console.log(extractFirst3([5,4,3,2,1,0]))
console.log(extractFirst3([99,1,1]))


// myFunction([1,2,3,4])
// Expected
// [1,2,3]

// myFunction([5,4,3,2,1,0])
// Expected
// [5,4,3]

// myFunction([99,1,1])
// Expected
// [99,1,1]

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastNElements = (a: number[], n:number) => a.slice(-n)

console.log('29__Task')
console.log(lastNElements([1,2,3,4,5], 2))
console.log(lastNElements([1, 2, 3], 6))
console.log(lastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3))

// myFunction([1, 2, 3, 4, 5], 2)
// Expected
// [ 4, 5 ]

// myFunction([1, 2, 3], 6)
// Expected
// [ 1, 2, 3 ]

// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Expected
// [ 6, 7, 8 ]


// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// number | string| boolean

function cleanAllOccurrences(a: (number|string|boolean)[],b:number|string|boolean) {
  for(let i=a.length-1; i>=0; i--){
      if(a[i] === b){
          a.splice(i, 1);
      }
  }
  return a;
}

console.log('30__Task')
console.log(cleanAllOccurrences([1,2,3], 2))
console.log(cleanAllOccurrences([1,2,'2'], '2'))
console.log(cleanAllOccurrences([false,'2',1], false))
console.log(cleanAllOccurrences([1,2,'2',1], 1))



// myFunction([1,2,3], 2)
// Expected
// [1, 3]

// myFunction([1,2,'2'], '2')
// Expected
// [1, 2]

// myFunction([false,'2',1], false)
// Expected
// ['2', 1]

// myFunction([1,2,'2',1], 1)
// Expected
// [2, '2']

// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayElementCounter = (a: number[]) => a.length

console.log('31__Task')
console.log(arrayElementCounter([1,2,2,4]))
console.log(arrayElementCounter([9,9,9]))
console.log(arrayElementCounter([4,3,2,1,0]))

// myFunction([1,2,2,4])
// Expected
// 4

// myFunction([9,9,9])
// Expected
// 3

// myFunction([4,3,2,1,0])
// Expected
// 5














// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function arrayNegElementCounter (a: number[]) {
  let count = 0;
  for (const num of a) {
      if (num < 0) {
          count++;
      }
  }
  return count;
}

console.log('32__Task')
console.log(arrayNegElementCounter([1,-2,2,-4]))
console.log(arrayNegElementCounter([0,9,1]))
console.log(arrayNegElementCounter([4,-3,2,1,0]))

// myFunction([1,-2,2,-4])
// Expected
// 2

// myFunction([0,9,1])
// Expected
// 0

// myFunction([4,-3,2,1,0])
// Expected
// 1

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const reverseArray = (NumArray: number[]) => NumArray.sort((a, b) => b - a)

console.log('33__Task')
console.log(reverseArray([1,3,2,]))
console.log(reverseArray([4,1,3,2,]))


// myFunction([1,3,2])
// Expected
// [3,2,1]

// myFunction([4,2,3,1])
// Expected
// [4,3,2,1]

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const alphabeticOrder = (StringArray: string[]) => StringArray.sort()

console.log('33__Task')
console.log(alphabeticOrder(['b', 'c', 'd', 'a']))
console.log(alphabeticOrder(['z', 'c', 'd', 'a', 'y', 'a', 'w']))

// myFunction(['b', 'c', 'd', 'a'])
// Expected
// ['a', 'b', 'c', 'd']

// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']











// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function average (NumArray : number []) {
  let sum = 0;
  NumArray.forEach((num) => { sum += num });
  return sum / NumArray.length;
} 

console.log('34__Task')
console.log(average([10,100,40]))
console.log(average([10,100,1000]))
console.log(average([-50,0,50,200]))



// myFunction([10,100,40])
// Expected
// 50

// myFunction([10,100,1000])
// Expected
// 370

// myFunction([-50,0,50,200])
// Expected
// 50

// Write a function that takes an array of strings as argument
// Return the longest string

function longestString(arr: string[]) {
  return arr.sort((a,b) => b.length - a.length)[0];
}

console.log('35__Task')
console.log(longestString(['help', 'me']))
console.log(longestString(['I', 'need', 'candy']))



// myFunction(['help', 'me'])
// Expected
// 'help'

// myFunction(['I', 'need', 'candy'])
// Expected
// 'candy'

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equality = (array: (boolean|string|number)[]) => {
  let result = array.every((val:any, i:any, arr:any) => val === arr[0])
  return result
}

console.log('36__Task')
console.log(equality([true, true, true, true]))
console.log(equality(['test','test','test']))
console.log(equality([1,1,1,2]))
console.log(equality(['10',10,10,10]))



// myFunction([true, true, true, true])
// Expected
// true 

// myFunction(['test', 'test', 'test'])
// Expected
// true 

// myFunction([1,1,1,2])
// Expected
// false 

// myFunction(['10',10,10,10])
// Expected
// false



// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const arrayCombo = (a: (number|string|boolean)[], b: (number|string|boolean)[],  c?: (number|string|boolean)[]) => a.concat(b,c) 

console.log('37__Task')
console.log(arrayCombo([1, 2, 3], [4, 5, 6]))
console.log(arrayCombo(['a', 'b', 'c'], [4, 5, 6]))
console.log(arrayCombo([true, true], [1, 2], ['a', 'b']))


// myFunction([1, 2, 3], [4, 5, 6])
// Expected
// [1, 2, 3, 4, 5, 6]

// myFunction(['a', 'b', 'c'], [4, 5, 6])
// Expected
// ['a', 'b', 'c', 4, 5, 6]

// myFunction([true, true], [1, 2], ['a', 'b'])
// Expected
// [true, true, 1, 2, 'a', 'b']

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function sortByPropertyB(arr:any) {
  return arr.sort((a:any, b:any) => a.b - b.b);
}

console.log('38__Task')
console.log(JSON.stringify(sortByPropertyB([{a:1,b:2},{a:5,b:4}])))
console.log(JSON.stringify(sortByPropertyB([{a:2,b:10},{a:5,b:4}])))
console.log(JSON.stringify(sortByPropertyB([{a:1,b:7},{a:2,b:1}])))


// myFunction([{a:1,b:2},{a:5,b:4}])
// Expected
// [{a:1,b:2},{a:5,b:4}]

// myFunction([{a:2,b:10},{a:5,b:4}])
// Expected
// [{a:5,b:4},{a:2,b:10}]

// myFunction([{a:1,b:7},{a:2,b:1}])
// Expected
// [{a:2,b:1},{a:1,b:7}]

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function mergeSort(arr1 : number[], arr2: number[]) {
  let mergedArray = arr1.concat(arr2)
  let uniqueArray = Array.from(new Set(mergedArray))
  uniqueArray.sort((a, b) => a - b)
  return uniqueArray
}

console.log('39__Task')
console.log(mergeSort([1, 2, 3], [3,4, 5]))
console.log(mergeSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

// myFunction([1, 2, 3], [3, 4, 5])
// Expected
// [ 1, 2, 3, 4, 5 ]

// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
// Expected
// [ -11, -10, 5, 22, 41,  42, 333]





// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function someArraySum(a: number[], b: number): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b) {
          sum += a[i];
      }
  }
  return sum;
}

console.log('40__Task')
console.log(someArraySum([1, 2, 3, 4, 5, 6, 7], 2))
console.log(someArraySum([-10, -11, -3, 1, -4], -3))
console.log(someArraySum([78, 99, 100, 101, 401], 99))

// myFunction([1, 2, 3, 4, 5, 6, 7], 2)
// Expected
// 25

// myFunction([-10, -11, -3, 1, -4], -3)
// Expected
// 1

// myFunction([78, 99, 100, 101, 401], 99)
// Expected
// 602

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function minMax (min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
      result.push(i);
  }
  return result;
}

console.log('41__Task')
console.log(minMax(2, 10))
console.log(minMax(1, 3))
console.log(minMax(-5, 5))
console.log(minMax(2, 7))

// myFunction(2, 10)
// Expected
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

// myFunction(1, 3)
// Expected
// [1, 2, 3]

// myFunction(-5, 5)
// Expected
// [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

// myFunction(2, 7)
// Expected
// [2, 3, 4, 5, 6, 7]

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function groupFirstLetter(arr: string[]) {
  let result: { [key: string]: string[] } = {};
  arr.forEach(str => {
      let firstLetter = str[0].toLowerCase();
      if (!result[firstLetter]) {
          result[firstLetter] = [];
      }
      result[firstLetter].push(str);
  });
  return result;
}

console.log('42__Task ')
console.log(JSON.stringify(groupFirstLetter(['Alf', 'Alice', 'Ben'])))
console.log(JSON.stringify(groupFirstLetter(['Ant', 'Bear', 'Bird'])))
console.log(JSON.stringify(groupFirstLetter(['Berlin', 'Paris', 'Prague'])))


// myFunction(['Alf', 'Alice', 'Ben'])
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Ant', 'Bear', 'Bird'])
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// myFunction(['Berlin', 'Paris', 'Prague'])
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function newArrayNumber(arr: (boolean|number|string)[], num: number): (boolean|number|string)[] {
  let result: (boolean|number|string)[] = [];
  if (num < 6) {
      result.push(0);
  }
  else {
      result.push(num);
  }
  result = result.concat(arr);
  return result;
}

console.log('43__Task ')
console.log(newArrayNumber([1,2,3], 6))
console.log(newArrayNumber(['a','b'], 2))
console.log(newArrayNumber([null,false], 11))

// myFunction([1,2,3], 6)
// Expected
// [6,1,2,3]

// myFunction(['a','b'], 2)
// Expected
// [0,'a','b']

// myFunction([null,false], 11)
// Expected
// [11,null,false]

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function nthElemArray(a: number[], n: number): number[] {
  let result: number[] = [];
  for (let i = n-1; i < a.length; i += n) {
      result.push(a[i]);
  }
  return result;
}

console.log('44__Task ')
console.log(nthElemArray([1,2,3,4,5,6,7,8,9,10],3))
console.log(nthElemArray([10,9,8,7,6,5,4,3,2,1],5))
console.log(nthElemArray([7,2,1,6,3,4,5,8,9,10],2))

// myFunction([1,2,3,4,5,6,7,8,9,10],3)
// Expected
// [3,6,9]

// myFunction([10,9,8,7,6,5,4,3,2,1],5)
// Expected
// [6,1]

// myFunction([7,2,1,6,3,4,5,8,9,10],2)
// Expected
// [2,6,4,8,10]

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function getCountry(obj: { [key: string]: string }) {
  if (obj.hasOwnProperty("country")) {
      return obj["country"];
  }
  return null;
}

console.log('45__Task ')
console.log(getCountry({  continent: 'Asia',  country: 'Japan'}))
console.log(getCountry({  country: 'Sweden',  continent: 'Europe'}))


// myFunction({  continent: 'Asia',  country: 'Japan'})
// Expected
// 'Japan'

// myFunction({  country: 'Sweden',  continent: 'Europe'})
// Expected
// 'Sweden'

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

function getProp (obj: { [key: string|number]: string|number }) {
  if (obj.hasOwnProperty("prop-2")) {
      return obj["prop-2"];
  }
  return null;
}

console.log('46__Task ')
console.log(getProp({  one: 1,  'prop-2': 2}))
console.log(getProp({  'prop-2': 'two',  prop: 'test'}))


// myFunction({  one: 1,  'prop-2': 2})
// Expected
// 2

// myFunction({  'prop-2': 'two',  prop: 'test'})
// Expected
// 'two'










// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function stringFindProperty(obj: { [key: string]: string }, key: string): string {
  if (obj.hasOwnProperty(key)) {
      return obj[key];
  } 
  return null;
}

console.log('47__Task ')
console.log(stringFindProperty({  continent: 'Asia',  country: 'Japan'}, 'continent'))
console.log(stringFindProperty({  country: 'Sweden',  continent: 'Europe'}, 'country'))



// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
// Expected
// 'Asia'

// myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
// Expected
// 'Sweden'

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function propertyKey(obj: { [key: string|number]: number|string }, key: string): boolean {
  if (obj.hasOwnProperty(key)) {
      return true;
  } 
  return false;
}

console.log('48__Task ')
console.log(propertyKey({a:1,b:2,c:3},'b'))
console.log(propertyKey({x:'a',y:'b',z:'c'},'a'))
console.log(propertyKey({x:'a',y:'b',z:'c'},'z'))

// myFunction({a:1,b:2,c:3},'b')
// Expected
// true

// myFunction({x:'a',y:'b',z:'c'},'a')
// Expected
// false

// myFunction({x:'a',y:'b',z:'c'},'z')
// Expected
// true

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function createObject(a: string): {[key: string]: string} {
  let obj: {[key: string]: string} = {
      key: a
  };
  return obj;
}

console.log('49__Task ')
console.log(createObject('a'))
console.log(createObject('z'))
console.log(createObject('b'))


// myFunction('a')
// Expected
// {key:'a'}

// myFunction('z')
// Expected
// {key:'z'}

// myFunction('b')
// Expected
// {key:'b'}






// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function twoStringstoObject(a: string, b: string): {[key: string]: any} {
  let obj: {[key: string]: any} = {
      [a]: b
  };
  return obj;
}

console.log('50__Task ')
console.log(twoStringstoObject('a', 'b'))
console.log(twoStringstoObject('z', 'x'))
console.log(twoStringstoObject('b', 'w'))

// myFunction('a','b')
// Expected
// {a:'b'}

// myFunction('z','x')
// Expected
// {z:'x'}

// myFunction('b','w')
// Expected
// {b:'w'}

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function twoArraysToObject(a: (string|number)[], b: (string|number)[]): {[key: string]: string|number} {
  let obj: {[key: string]: (string|number)} = {}
  for (let i = 0; i < a.length; i++) {
      obj[a[i]] = b[i]
  }
  return obj;
}

console.log('51__Task ')
console.log(twoArraysToObject(['w','x','y','z'],[10,9,5,2]))
console.log(twoArraysToObject([1,'b'],['a',2]))

// myFunction()
// Expected
// {a:1,b:2,c:3}

// myFunction(['w','x','y','z'],[10,9,5,2])
// Expected
// {w:10,x:9,y:5,z:2}

// myFunction([1,'b'],['a',2])
// Expected
// {1:'a',b:2}

// Write a function that takes an object (a) as argument
// Return an array with all object keys

function getObjectKeys(obj: object) {
  return Object.keys(obj);
}

console.log('52__Task ')
console.log(getObjectKeys({a:1,b:2,c:3}))
console.log(getObjectKeys({j:9,i:2,x:3,z:4}))
console.log(getObjectKeys({w:15,x:22,y:13}))

// myFunction({a:1,b:2,c:3})
// Expected
// ['a','b','c']

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// ['j','i','x','z']

// myFunction({w:15,x:22,y:13})
// Expected
// ['w','x','y']


// Write a function that takes an object (a) as argument
// Return the sum of all object values

function sumOfObjects(obj: {[key: string]: string|number}): number {
  let sum = 0;
  let values = Object.values(obj);
  for (let value of values) {
    if(typeof value === "number")
      sum += value;
  }
  return sum;
}

console.log('53__Task ')
console.log(sumOfObjects({a:1,b:2,c:3}))
console.log(sumOfObjects({j:9,i:2,x:3,z:4}))
console.log(sumOfObjects({w:15,x:22,y:13}))

// myFunction({a:1,b:2,c:3})
// Expected
// 6

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// 18

// myFunction({w:15,x:22,y:13})
// Expected
// 50

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function returnObjExceptB(obj:any) {
  const { b, ...newObj } = obj;
  return newObj
}

console.log('54__Task ')
console.log(returnObjExceptB({ a: 1, b: 7, c: 3 }))
console.log(returnObjExceptB({ b: 0, a: 7, d: 8 }))
console.log(returnObjExceptB({ e: 6, f: 4, b: 5, a: 3 }))

// myFunction({ a: 1, b: 7, c: 3 })
// Expected
// { a: 1, c: 3 }

// myFunction({ b: 0, a: 7, d: 8 })
// Expected
// { a: 7, d: 8 }

// myFunction({ e: 6, f: 4, b: 5, a: 3 })
// Expected
// { e: 6, f: 4, a: 3 }

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function mergeCorrectProperty(obj1:any, obj2:any) {
  const newObj = {...obj1};
  obj2.d = obj2.b;
  delete obj2.b;
  Object.assign(newObj, obj2);
  return newObj;
}

console.log('55__Task ')
console.log(mergeCorrectProperty({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(mergeCorrectProperty({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// Expected
// { a: 1, b: 2, c: 3, e: 5, d: 4}

// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
// Expected
// { a: 5, b: 4, c: 3, e: 2, d: 1}



// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function multiplyValues(a: any, b: number) {
  for (let key in a) {
      a[key] *= b;
  }
  return a;
}

console.log('56__Task ')
console.log(multiplyValues({a:1,b:2,c:3},3))
console.log(multiplyValues({j:9,i:2,x:3,z:4},10))
console.log(multiplyValues({w:15,x:22,y:13},6))


// myFunction({a:1,b:2,c:3},3)
// Expected
// {a:3,b:6,c:9}

// myFunction({j:9,i:2,x:3,z:4},10)
// Expected
// {j:90,i:20,x:30,z:40}

// myFunction({w:15,x:22,y:13},6)
// Expected
// {w:90,x:132,y:78}

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function fixPropAndKeyMess(obj: object) {
  const entries = Object.entries(obj);
  return Object.fromEntries(entries.map(([key, value]) => [value, key]));
}

console.log('57__Task ')
console.log(fixPropAndKeyMess({z:'a',y:'b',x:'c',w:'d'}))
console.log(fixPropAndKeyMess({2:'a',4:'b',6:'c',8:'d'}))
console.log(fixPropAndKeyMess({a:1,z:24}))


// myFunction({z:'a',y:'b',x:'c',w:'d'})
// Expected
// {a:'z',b:'y',c:'x',d:'w'}

// myFunction({2:'a',4:'b',6:'c',8:'d'})
// Expected
// {a:'2',b:'4',c:'6',d:'8'}

// myFunction({a:1,z:24})
// Expected
// {1:'a',24:'z'}

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function replaceEmpty(obj:any) {
  for (let key in obj) {
      if (typeof obj[key] === "string" && obj[key].trim() === "") {
          obj[key] = null;
      }
  }
  return obj;
}

console.log('58__Task ')
console.log(replaceEmpty({ a: 'a', b: 'b', c: '' }))
console.log(replaceEmpty({ a: '', b: 'b', c: ' ', d: 'd' }))
console.log(replaceEmpty({ a: 'a', b: 'b ', c: ' ', d: '' }))

// myFunction({ a: 'a', b: 'b', c: '' })
// Expected
// { a: 'a', b: 'b', c: null }

// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
// Expected
// { a: 'a', b: 'b ', c: null, d: null }

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

interface PersonalInfo {
  fn?: string
  ln?: string
  size?: string|number
  weight?: string|number
  age? : number
  email?: string
}

function extractInfo(obj: PersonalInfo): PersonalInfo {
  const result: PersonalInfo = {};
  if (obj.fn) {
    result.fn = obj.fn;
  }
  if (obj.ln) {
    result.ln = obj.ln;
  }
  if (obj.size) {
    result.size = obj.size + ' cm';
  }
  if (obj.weight) {
    result.weight = obj.weight + ' kg';
  }
  return result;
}

console.log('59__Task ')
console.log(extractInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
console.log(extractInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
console.log(extractInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}))
console.log(extractInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}))

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

function addContinent(arr :object[], continent:string) {
  return arr.map(obj => {
      return {...obj, continent: continent}
  });
}

console.log('60__Task ')
console.log(JSON.stringify(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')))
console.log(JSON.stringify(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')))

// myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// Expected
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// Expected
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function convertArrayToObject(arr: any) {
  return arr.reduce((acc: any, value: any) => {
      if (acc[value]) {
          acc[value]++;
      } else {
          acc[value] = 1;
      }
      return acc;
  }, {});
}

console.log('61__Task ')
console.log(convertArrayToObject([1,2,2,3]))
console.log(convertArrayToObject([9,9,9,99]))
console.log(convertArrayToObject([4,3,2,1]))

// myFunction([1,2,2,3])
// Expected
// {1:1,2:2,3:1}

// myFunction([9,9,9,99])
// Expected
// {9:3,99:1}

// myFunction([4,3,2,1])
// Expected
// {1:1,2:1,3:1,4:1}

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

function equalDates(date1: Date, date2: Date) {
  return date1.getTime() === date2.getTime();
}

console.log('62__Task ')
console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
console.log(equalDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// Expected
// false

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// true

// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// false

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function daysBetweenDates(date1 :Date, date2: Date) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const dayDiff = timeDiff / (1000 * 3600 * 24);
  return dayDiff;
}

console.log('63__Task ')
console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01')))
console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01')))

// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected
// 10

// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
// Expected
// 7457




// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function sameDates(date1: Date, date2: Date): boolean {
  if (date1.getDate() === date2.getDate() && 
      date1.getMonth() === date2.getMonth() && 
      date1.getFullYear() === date2.getFullYear()) {
      return true;
  } else {
      return false;
  }
}

console.log('64__Task ')
console.log(sameDates(new Date('2000/01/01'), new Date('2000/01/01')))
console.log(sameDates(new Date('2000/01/01'), new Date('2000/01/02')))
console.log(sameDates(new Date('2001/01/01'), new Date('2000/01/01')))
console.log(sameDates(new Date('2000/11/01'), new Date('2000/01/01')))


// myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
// Expected
// true 

// myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
// Expected
// false 

// myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
// Expected
// false 

// myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
// Expected
// false

// SPREAD OPERATOR 
// Use spread operator in all tasks

// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

function combineArrays(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2];
}

console.log('65__Task ')
console.log(combineArrays([1, 2], [3, 4]))
console.log(combineArrays([1, 2], [3, 4, 5, 6]))

// myFunction([1, 2], [3, 4]) 
// Expected
// [1, 2, 3, 4]

// myFunction([1, 2], [3, 4, 5, 6]) 
// Expected
// [1, 2, 3, 4, 5, 6]

// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

function addToArray(arr: string[], str:string) {
  return [...arr, str];
}

console.log('66__Task ')
console.log(addToArray(['Apple', 'Orange', 'Banana'], 'Kiwi'))

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Apple', 'Orange', 'Banana', 'Kiwi']

// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

function addToArrayBeginning(arr: string[], str:string) {
  return [str, ...arr];
}

console.log('67__Task ')
console.log(addToArrayBeginning(['Apple', 'Orange', 'Banana'], 'Kiwi'))

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Kiwi', 'Apple', 'Orange', 'Banana']

// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

function addObjects(obj1:object, obj2:object) {
  return {...obj1, ...obj2};
}

console.log('68__Task ')
console.log(addObjects({ a:1, b:2 }, { c:3, d:4 }))
console.log(addObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }))


// myFunction({ a:1, b:2 }, { c:3, d:4 }) 
// Expected
// { a:1, b:2, c:3, d:4 }

// myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
// Expected
// { a:1, b:2, c:3, d:4, e:5, f:6 }

// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

function addPropertyToObject(obj: object, str: string) {
  return {...obj, favoriteMovie: str};
}

console.log('69__Task ')
console.log(addPropertyToObject({ eyeColor: 'green', age: 10 }, 'Garfield'))
console.log(addPropertyToObject({ eyeColor: 'blue', age: 15 }, 'Twilight'))

// myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
// Expected
// { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

// myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
// Expected
// { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }












   














 


