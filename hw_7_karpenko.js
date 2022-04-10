//DZ
// implement:
// forEach(arr, callback) ==> undefined
// map(arr, callback) ==> [elem1,...elemN]
// filter(arr, callback) ==> []
// reduce(arr, callback, acc) ==> acc
// find(arr, callback) ==> elem

const arr = [1,2,3,4,5];

const callback = (item) => {
    return item = item + 1;
}

const filterCallback = (item) => {
    return item <= 3 ;
}
const reduceCallback = (item, acc) => {
    return acc.push(item)
}
const findCallback = (item) => {
    return item === 5;
}

const forEach = (arr, callback) => {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index])
    }
};

// console.log(forEach(arr, callback))

const map = (arr, callback) => {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        newArr.push(callback(arr[index]))
    }
    return newArr;
};

// console.log(map(arr, callback));

const filter = (arr, callback) => {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if(callback(arr[index])) {
            newArr.push(arr[index])
        }
    }
    return newArr;
}

// console.log(filter(arr, filterCallback));

const reduce = (arr, callback, acc) => {
    let newAcc = acc
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], newAcc)
    }
    return newAcc;
};

// console.log(reduce(arr, reduceCallback, [0,1]));

const find = (arr, callback) => {
    for (let index = 0; index < arr.length; index++) {
        if(callback(arr[index])) return arr[index]
    }
}

// console.log(find(arr, findCallback));