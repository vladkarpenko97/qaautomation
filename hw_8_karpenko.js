const wishlist = [
    { title: 'Tesla Model S', price: 90000 },
    { title: '4 carat diamond ring', price: 45000 },
    { title: 'Fancy hacky Sack', price: 5 },
    { title: 'Gold fidgit spinner', price: 2000 },
    { title: 'A second Tesla Model S', price: 90000 },
  ];
//////////////////////
function shoppingSpree(arr) {

let sumOfPrice = 0;
arr.forEach((item) => {
    sumOfPrice += item.price
})
 return sumOfPrice
} // 227005 -- сумма всех покупок
console.log(shoppingSpree(wishlist))



function shoppingList(arr) {
    let list = []
    arr.forEach((item) => {
            list.push(item.title)
        })
         return list
} 
// console.log(shoppingList(wishlist))


// - список покупок [titles]
 function priceList(arr) {
         const namesObj = arr.reduce((acc, user) => {
    return { ...acc, [user.title]: user.price };
  }, {});
  return namesObj
 } // объект {'Tesla Model S' : 90000, ....}
//console.log(priceList(wishlist))
///////////////////////////////////////////////


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
  //сколько всего людей проголосовало
function getTotalVoters(vot) {
    const totalVolters = vot.filter((voter) => voter.voted)
return totalVolters.length
}
//console.log(getTotalVoters(voters))

// Построить объект, который будет хранить следующую статистику:
// Сколько всего людей в возрасте 18-25 в выборке
// Сколько людей в возрасте 18-25 голосовали
// то же самое для возрастных групп 26-35 и 36+

function getVoterStats(arr) {
    const voterStat = {
numYoungVotes: 0,
numYoungPeople: 0,
numMidVotesPeople: 0,
numMidsPeople: 0,
numSeniorVotesPeople: 0,
numSeniorPeople: 0
    }
    arr.forEach((person) => {
        if(person.age >= 18 && person.age <= 25){
            voterStat.numYoungPeople += 1
            if(person.voted){
                voterStat.numYoungVotes += 1
            }
        }else if(person.age >= 26 && person.age <= 35){
            voterStat.numMidsPeople += 1
            if(person.voted){
                voterStat.numMidVotesPeople += 1
            }
        }else if(person.age >= 36){
            voterStat.numSeniorPeople += 1
            if(person.voted){
                voterStat.numSeniorVotesPeople += 1
            }
        }
    })
    return voterStat
}
//console.log(getVoterStats(voters));
/*
{ 
numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numSeniorVotesPeople: 3,
numSeniorPeople: 4 
}
*/

reduce(() => {}, {
  numYoungVotes: 0,
numYoungPeople: 0,
numMidVotesPeople: 0,
numMidsPeople: 0,
numSeniorVotesPeople: 0,
numSeniorPeople: 0
})

function getVoterStats(arr) {
        const countVoters = arr.reduce((voterStat, person) => { 
            if(person.age >= 18 && person.age <= 25){
                            voterStat.numYoungPeople += 1
                            if(person.voted){
                                voterStat.numYoungVotes += 1
                            }
                        }else if(person.age >= 26 && person.age <= 35){
                            voterStat.numMidsPeople += 1
                            if(person.voted){
                                voterStat.numMidVotesPeople += 1
                            }
                        }else if(person.age >= 36){
                            voterStat.numSeniorPeople += 1
                            if(person.voted){
                                voterStat.numSeniorVotesPeople += 1
                            }
                        }
                        return voterStat
    },{
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numSeniorVotesPeople: 0,
        numSeniorPeople: 0
            })
return countVoters
}
//console.log(getVoterStats(voters))
