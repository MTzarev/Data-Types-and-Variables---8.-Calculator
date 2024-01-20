function calculator(num1, operator, num2) {
    let result = 0;
    //     if (operator === "+") {
    //         result = num1 + num2
    //     } else if (operator === "/") {
    //         result = num1 / num2
    //     } else if (operator === "*") {
    //         result = num1 * num2
    //     }

    //     console.log(result.toFixed(2));
    // }
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;

    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10)