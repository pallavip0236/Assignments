//1.	Write a program to demonstrate the difference between global, function and block scope in javascript
// Global Scope
let globalVariable = "I am global!";

function demonstrateScope() {
    // Function Scope
    let functionScopedVariable = "I am function-scoped!";
    console.log("Inside function:");
    console.log(globalVariable); 
    console.log(functionScopedVariable); 

    if (true) {
        let blockScopedVariable = "I am block-scoped!";
        var functionScopedAgain = "I am still function-scoped!";
        console.log(blockScopedVariable); 
        console.log(functionScopedAgain); 
    }

    try {
        console.log(blockScopedVariable); 
    } catch (error) {
        console.log("Error accessing blockScopedVariable:", error.message);
    }

    
    console.log(functionScopedAgain); 
}


console.log("Global Scope:");
console.log(globalVariable); 

try {
    console.log(functionScopedVariable); 
} catch (error) {
    console.log("Error accessing functionScopedVariable:", error.message);
}

demonstrateScope();

if (true) {
    let blockScopedOutsideFunction = "I am block-scoped outside function!";
    var functionScopedOutsideFunction = "I act like function scope!";
    console.log(blockScopedOutsideFunction); 
}

try {
    console.log(blockScopedOutsideFunction);
} catch (error) {
    console.log("Error accessing blockScopedOutsideFunction:", error.message);
}

console.log(functionScopedOutsideFunction);
