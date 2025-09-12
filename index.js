// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

var rs = require("readline-sync");


function getOp() {
  let options = ["/", "*", "-", "+"];
  let userOp = rs.question(
    `What operation would you like to perform? /, +, -, * \n`
  );
  
  while (!options.includes(userOp)) {
    console.log("That is not a valid operation");
    userOp = rs.question(
      `What operation would you like to perform? /, +, -, * \n`
    );
  }
  return userOp;
}

function getNum() {
  let num1 = rs.questionInt("Enter your first number: ");
  let num2 = rs.questionInt("Enter your second number: ");
  return [num1, num2];
}

function calculate(a, b, op) {
  if (op === "/") {
    return a / b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "+") {
    return a + b;
  }
}

function  main() {
  let userOp = getOp();
  let numbers = getNum();
  let result = calculate(numbers[0], numbers[1], userOp);
  console.log(`The result is: ${result}`);
}

main();

