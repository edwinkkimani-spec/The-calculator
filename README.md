           CALCULATOR !!!!            
  

#  JavaScript Calculator

A simple, interactive calculator built using **HTML, CSS, and JavaScript**.

This project was created to practice JavaScript fundamentals such as functions, variables, conditional statements, DOM manipulation, and event handling.

##  Features

- Addition
- Subtraction
- Multiplication
- Division
- Modulus
- Decimal numbers
- Clear (`AC`) button
- Interactive calculator buttons
- Calculator-style display
- Responsive and modern calculator design

##  Technologies Used

- *HTML5*  — Creates the calculator structure
- *CSS3* — Styles and designs the calculator
- *JavaScript* — Handles calculations and user interactions

##  Project Structure

  text
calculator/
│
├── index.html
├── index.css
├── index.js
└── README.md
````

##  How It Works

The calculator uses JavaScript functions to handle different actions.

### Adding Numbers

When a number button is clicked, the `addNumber()` function adds the number to the calculator display.

  javascript
function addNumber(number) {
    if (operator === "") {
        firstNumber += number;
        display.textContent = firstNumber;
    } else {
        secondNumber += number;
        display.textContent = firstNumber + " " + operator + " " + secondNumber;
    }
}


### Choosing an Operator

The `chooseOperator()` function stores the arithmetic operator selected by the user.

```javascript
function chooseOperator(selectedOperator) {
    operator = selectedOperator;
}
```

### Performing a Calculation

The `calculate()` function converts the stored values into numbers and performs the selected operation.

```javascript
function calculate() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let answer;

    if (operator === "+") {
        answer = num1 + num2;
    } else if (operator === "-") {
        answer = num1 - num2;
    } else if (operator === "*") {
        answer = num1 * num2;
    } else if (operator === "/") {
        answer = num1 / num2;
    } else if (operator === "%") {
        answer = num1 % num2;
    }

    display.textContent = answer;
}


## Example

The calculator can perform calculations such as:

*text
5 × 6 = 30
*

*text
10 + 15 = 25
*

*text
20 - 8 = 12
*

 *text
20 ÷ 4 = 5
*

##  How to Run the Project

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Make sure `index.html`, `index.css`, and `index.js` are in the correct location.
4. Open `index.html in your browser.

You can also use the **Live Server** extension in VS Code.

##  Learning Objectives

This project helped me practice:

* JavaScript variables
* Functions
* `if` / `else if` statements
* DOM manipulation
* `textContent`
* HTML event handlers
* Arithmetic operators
* Converting strings to numbers using `Number()`
* CSS Flexbox and Grid
* Structuring a web project

##  Future Improvements

Possible improvements include:

* Add keyboard support
* Add a backspace button
* Add negative numbers
* Improve decimal handling
* Add calculation history
* Add dark/light themes
* Improve mobile responsiveness
* Prevent division by zero
* Add more advanced mathematical operations

 Author

**Edwin Kimani**

Built as part of my journey learning **Software Engineering and JavaScript**.

`
