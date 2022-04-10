// 1 Посчитать гласные в предложении - countVowels(phrase), вернуть объект {a: 5, e: 6, i: 2, o: 3, u: 1, y: 0}
const foo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
function countVowels(sentens){
//const vowels = ['a','e', 'i', 'o', 'u', 'y']
sentens.split('');
let vowels = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'y': 0}
for (let i = 0; i < sentens.length; i++) {
  //console.log(sentens[i]);
  if(Object.keys(vowels).includes(sentens[i])){
    vowels[sentens[i]] = vowels[sentens[i]] + 1
  }
}
return vowels
}
// console.log(countVowels(foo))

// 2 Какая буква чаще всего встречается в предложении getMostFrequentLetter(phrase)
function getMostFrequentLetter(sentens){
    let letters = {}
    let maxValue = 0;
    let maxLetter = {}
    const symbolsToFilter = [' ', ',', '.'];
    const arrayOfLetters = sentens.split('').filter((letter) => !symbolsToFilter.includes(letter));
    
for (let i = 0; i < arrayOfLetters.length; i++) {

        const currentLetter = arrayOfLetters[i];
        if(currentLetter in letters) {
            letters[currentLetter] = letters[currentLetter] + 1;
        }else{
            letters[currentLetter] = 0;
        }
      }
      for(letter in letters){
          if(maxValue < letters[letter]){
            maxValue = letters[letter]
              maxLetter = {}
              maxLetter[letter] = maxValue
          }
      }
      return maxLetter
}

//console.log(getMostFrequentLetter(foo))

// 3 Каждое слово с большой буквы capitalize(str) // this is a sample -> This Is A Sample

const sample = 'this is a sample'
function capitalize(str){
const words = str.split(' ')
let newCapitalizedArray = []
for(let i=0; i < words.length; i++){
newCapitalizedArray.push(words[i].slice(0, 1).toUpperCase() + words[i].slice(1))
}
return newCapitalizedArray.join(' ')
}
//console.log(capitalize(sample))

// 4 Перевернуть строку  - reverse(str)  // string --> gnirts //2 способа - цикл, и arr.reverse
let string = 'string';
function reverse(str){
return str.split('').reverse().join('')
}
//console.log(reverse(string))
//TODO 
function reverseCycle(str){
    let strT = str.split('')
    let reversedString = ''
    for(let i=0;i<strT.length; i++){
        reversedString += str[strT.length-1-i]
    }
    return reversedString
}
// console.log(reverseCycle(string))


// 5 является ли строка палиндромом  - isPalindrome (str)  // 'tenet', 'abba','100001'

function isPolindrome(str){
    return str === str.split('').reverse().join('')
}
// console.log(isPolindrome('abbaa'))

// 6 являются ли 2 строки анаграммами - isAnagram(strA, strB) // 'rail safety' -- 'fairy tales'

function isAnagram(strA, strB) {
    const wordsA = strA.split(' ');
    const wordsB = strB.split(' ');

    if(wordsA.length !== wordsB.length) return false

    for(let i=0; i < wordsA.length; i++) {
        if(wordsA[i].length !== wordsB[i].length) return false
        let sortedWordA = wordsA[i].toLowerCase().split('').sort().join('');
        let sortedWordB = wordsB[i].toLowerCase().split('').sort().join('');
        if(sortedWordA === sortedWordB) return true
    }

}

// console.log(isAnagram('rail safety', 'alir fetasy'))

// 7 функция форматирования - humanize_format(num) // 1 -> 1st, 32 -> 32nd, 23 -> 23rd, 65 -> 65th

function humanize_format(num) {
    let humanizeOutputNumber = num.toString();
    const lastDigit = parseInt(num.toString()[num.toString().length - 1])

    switch (lastDigit) {
        case 1:
            humanizeOutputNumber += 'st';
            break;
        case 2:
            humanizeOutputNumber += 'nd';
            break;
        case 3:
            humanizeOutputNumber += 'rd';
            break;
        default:
            humanizeOutputNumber += 'th';
            break;
    }

    return humanizeOutputNumber
}

// console.log(humanize_format(4313))

// 8 функция insertDash(num) принимает число и вставляет  "-" между двумя четными цифрами  // 025468 --->  0-254-6-8

function insertDash(num) {
    let resultDashedString = '';
    const numArray = num.split('');
    for(let i=0; i < numArray.length; i++) {
        let currentDigit = numArray[i];
        let nextDigit = numArray[i + 1];
        if(currentDigit % 2 === 0 && nextDigit % 2 === 0) {
            resultDashedString += currentDigit + '-'
        } else {
            resultDashedString += currentDigit
        }

    }
    return resultDashedString
}

// console.log(insertDash('025468'))

// 9 реализовать функцию unshift(arr, elem)

function unshift(arr, elem) {
    let unshiftedArray = [elem]
    for(let i=0; i < arr.length; i++) {
        unshiftedArray.push(arr[i])
    }
    return unshiftedArray;
}
// console.log(unshift([1,2,3,4], 9))

// 10 реализовать ф-цию shift(arr)
function shift(arr) {
    let shiftedArray = []
    for(let i=0; i < arr.length; i++) {
        if(i > 0) {
            shiftedArray.push(arr[i])
        }
    }
    return shiftedArray;
}

//console.log(shift([1, 9,1,2,3,4]))