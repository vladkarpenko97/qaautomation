//1. Функция startCounter(ms) - выводит числа от 0 до бесконечности, пока ее не прервет вызов ф-ции stopCounter
// Ф-ция stopCounter(counterId, ms) - прерыывает счетчик counterId через ms милисекунд

// const timerId = startCounter(500) ---> 0, ... 1, ... 2, ...3, ...
// stopCounter(timerId, 6) - останавливает счет


function startCounter(ms) {
    let i = 0;
    return setInterval(() => {
        //console.log(i++);
    }, ms);
}
function stopCounter(timerId, ms) {
    setTimeout(() => {
        clearInterval(timerId)
    }, ms);
}

// const timerId = startCounter(500)
// stopCounter(timerId, 2000)

// 2. Перебирает массив arr указанное кол-во раз (n) с интервалом ms милисекунд
// function iterateMultipletimes(arr, n, ms = 500)  {
//   ...
// }

function iterateMultipletimes(arr, n, ms = 500)  {
    let counter = n;
    let timer = null;

    timer = setInterval(() => {
        console.log(`Iteration #${n - counter + 1}`)
        arr.map((e) => console.log(e));
        counter--;
        if (counter <= 0 && timer) {
            clearInterval(timer); 
            return console.log('finish');
        }
    }, ms);
}

const arr = [1,2,3,4,5]
const iterationCount = 3;
const interval = 1000;

// iterateMultipletimes(arr, iterationCount, interval);

// 3. function iterateForwardBackward(arr, ms) {} - выводит элементы массива в прямом и обратном порядке с интервалом ms
// iterateForwardBackward(['a', 'b', 'c'], 500) ---> // 'a', ... 'b', ... 'c', ... 'c', ... 'b', ... 'a'

function iterateForwardBackward(arr, ms) {
    const border = arr.length;
    let isForward = true;
    let currentIteration = 0;

    const forward = (i) => {
        console.log(arr[i])
    }
    const backward = (i) => {
        console.log(arr[arr.length - 1 - i])
    }
    setInterval(() => {
        if(currentIteration % border === 0 && currentIteration !== 0) {
            isForward = !isForward 
        }
        if(isForward) {
            forward(currentIteration % border) 
        } else {
            backward(currentIteration % border)
        }
        currentIteration++
    }, ms);
}

// iterateForwardBackward(['a', 'b', 'c'], 1000);

// 1.1 **
// startCounter - см. задачу 1
// написать функцию stop, которая будет останавливать счетчик следующим образом:
// const timer = startCounter(500)
// stop(timer).after(3, 'sec') --> остановка произойдет через 3 секунды. Второй аргумент может принимать значение 'ms'

// 3.1 **
// Написать ф-цию iterate(arr), которая будет перебирать массив, как в задаче 3, но вызываться будет следуюшим образом:
//iterate([1,2,3]).forward().backward().forward().backward()
// Интервал пусть будет задан 500ms
