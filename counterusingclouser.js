//3.	Write a program to create a counter using closures. The counter should have two functions increment and decrement 
function createCounter(initialValue = 0) {
let count = initialValue;


return {
    increment: function () {
        count++;
        return count;
    },
    decrement: function () {
        count--;
        return count;
    },
    getValue: function () {
        return count; 
    }
};
}
const counter = createCounter();

console.log("Initial Value:", counter.getValue()); 


console.log("Increment:", counter.increment()); 
console.log("Increment:", counter.increment()); 


console.log("Decrement:", counter.decrement()); 
console.log("Decrement:", counter.decrement()); 

const anotherCounter = createCounter(10);
console.log("Initial Value of anotherCounter:", anotherCounter.getValue()); 
console.log("Increment:", anotherCounter.increment()); 
console.log("Decrement:", anotherCounter.decrement());
