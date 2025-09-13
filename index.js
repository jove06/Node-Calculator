// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

const rs = require("readline-sync");
const operatorsConfig = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};


function getOperation(options) {
  return rs.question(`What operation would you like to perform? ${options.join(", ")} \n`, 
  {
    limit: options, 
    limitMessage: "That is not a valid operation!"
  });
}

function getANumber(order){
  return rs.questionInt(`Please enter the ${order} number: `, {
    limitMessage: "This is not a number!"
  });
}

function getNumbers(){
  return ["first", "second"].map(getANumber);
}

function calculate(a, b, op, config) {
  return config[op](a, b);
}

function  main(config) {
  const arrOperators = Object.keys(config);
  const userOp = getOperation(arrOperators);
  const [firstNumber, secondNumber] = getNumbers();
  const result = calculate(firstNumber, secondNumber, userOp, config);
  console.log(`The result is: ${result}`);
}

main(operatorsConfig);

