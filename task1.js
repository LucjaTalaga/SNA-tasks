const data = require('./data.js');
const array = data.array;

const toDoList = [];
const phrase = 'toDO';

// iterates over the array and checks if the parameter2 contains substring 'toDO'
for (let i = 0; i < array.length; i++){
    if(array[i].parameter2.indexOf(phrase) !== -1){
        toDoList.push(array[i].parameter1);
    }
}

console.log(toDoList);