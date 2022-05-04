// 1
//НАписать ф-цию sum, которая будет вызываться следующим образом:
// sum(2)(3)(5)()  ===> 10
// должна возвращать результат, если вызвана без аргументов
function sum(a) {
  return function func(b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}
// const result = sum(2)(3)(5)();
// console.log(result);

// Усложненный вариант - при каждом вызове может принимать любое кол-во аргументов
// sum (1,2)(3)(1,1,1)() ===> 9
// sum () ===> 0
// sum (1)(2,1) ===> 4

const infiniteCurry = () => {
  const reduceValue = (args, seedValue = 0) => {
    return args.reduce((acc, a) => {
      acc += a
      return acc;
    }, seedValue);
  }
  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args,);
      }
      return next(...args, reduceValue(x,));
    };
  };
  return next();
};
// const result = infiniteCurry();
// console.log(result(1,2,3)(4,5)(6)());


// 2
// Написать функции-фильтры ageLessThan(n), ageBetween(a, b), byName([...names])
// const filteredVoters = voters.filter(byName(['Bob', 'Mary', 'Jeff']))
const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

const ageLessThan = (item, n) => {
  return item.age < n
}

const ageBetween = (item, a, b) => {
  return item.age > a && item.age < b
}

const byName = (item, names) => {
  return names.includes(item.name)
}
const filteredVotersByMaxAge = voters.filter((e) => ageLessThan(e, 30))
const filteredVotersByAge = voters.filter((e) => ageBetween(e, 30, 45))
const filteredVotersByName = voters.filter((e) => byName(e, ['Bob', 'Mary', 'Jeff']))

// console.log(filteredVotersByMaxAge, filteredVotersByAge, filteredVotersByName);


// 3
//Написать ф-цию bind(cxt, func)
// const letterFilter = bind('ababababa', [].filter)
// letterFilter((letter) => letter === 'a')   /// ['a', 'a', 'a', 'a', 'a']

const myBind = (ctx, fn) => {
  return (cb) => fn.call(ctx, cb)
}

const test = myBind('abababa', [].filter);
console.log(test((letter) => letter === 'a'))

// 4 Угадать число
function guessGame(attempts) {
  const answer = Math.floor(Math.random() * 10);
  return (number) => {
    attempts--;
    if(attempts < 0) {
      return console.log("no more attempts");
    }
    if(number > answer) {
      return console.log('too high')
    } else if (number < answer) {
      return console.log('too low')
    }
    attempts = -1;
    return console.log('correct');
  }
  //
}

// const playRound1 = guessGame(3); //допустим, правильный ответ = 5
// playRound1(5) // "too low"
// playRound1(7) // "too high"
// playRound1(5) // "correct"
// playRound1(5) // "no more attempts"
// const playRound2 = guessGame(5);
//....
