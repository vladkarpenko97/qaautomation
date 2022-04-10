// Ф-ция repeat принимает строку и число в качестве параметров и возвращает строку, повторенную <число> раз
// repeat("#", 5) // ===> "#####"

function repeat(str, num){
  var newStr = '';
  for(i=0;i < num;i++)
  newStr += str;
  return newStr;
}
console.log(repeat("#", 5))

// Функция getFirstNPrimes находит первые n простых чисел и возвращает стоку с числами через пробел и запятую
// getFirstNPrimes(6)  // ==> "2, 3, 5, 7, 11, 13"
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
return false} // скобки после if и === - это обязательно
  }
  return  n > 1 // тут еще надо убедиться, что число > 1, так что return n > 1
}

function getFirstNPrimes(num = 6) {
	
  let str = ""
  let primeCounter = 0
  let counter = 0
  while (primeCounter < num) {
    if (isPrime(counter)) {
      primeCounter++
      str += counter  //все равботает, особенно, если isPrime чуть доделать (коммент выше) но тут же запятая, помнишь, разбирали, как проверить...а так да...работает, доделай еще проверку плз
      if(str){
      str += `,`
    } else {
      str += 0
    }
    }
    counter++
  }
  console.log(str.slice(0, -1))
}
getFirstNPrimes(7, isPrime)
// Ф-ция calculate принимает 2 числа и коллбэк. Возвращает результат вычислений колбэка с данными аргументами
// Создать 4 колбэка - sum(a, b), diff(a, b), multiply (a, b), divide(a,b)
// Сделайте проверку типов аргументов: если хотя бы один из 2 первых аргументов - не число просто верните строку - "Invalid args type"
// Функция по умолчанию пусть будет sum. Т.е. если не передавать 3й аргумент, calculate вернет сумму чисел
// calculate(4, 5, multiply) // ==> 20
// let sum = function (num1,num2) {
//     return num1 + num2
//   };

//   let diff = function (num1,num2) {
//     return num1 - num2;
//   };

//   let multiply = function (num1,num2) {
//     return num1 * num2;
//   };

//   let divide = function (num1,num2) {
//     return num1 / num2;
//   };

  // function calculate(num1, num2, callback = sum) {
  //   if (typeof num1 !== "number" && num2 !== "number") { 
  //     return ("Invalid args type")
  //   } else{ return callback (num1, num2) }
  // }
  // console.log(calculate(10, 5, diff))


// Ф-ция printNumbers принимает число num и колбэк cb. Должна выводить все числа до num, которые которые проходят проверку колбэком.
// Аргументы по умолчанию: num = 100, cb = isPrime
// printNumbers(7, isEven) // ==> 2, 4, 6
// printNumbers(7, isOdd) // ==> 1, 3, 5, 7
// printNumbers(7, isPrime) // ==> 2, 3, 5, 7
function isEven(n) {
    return n % 2 === 0
  }
  
  function isOdd(n) {
    return n % 2 !== 0
  }
  // function isPrime(n){
  //     for (let i = 2; i < n; i++) {
  //     if ( n % i == 0) return false;
  //     }
  //     return true;
  //     }
  
  function printNumbers(n=100,cb = isPrime) {
    for (let i = 1; i <= n; i++) {
      if (cb(i)) {
        console.log(i)
      }
    }
  }
  printNumbers()
