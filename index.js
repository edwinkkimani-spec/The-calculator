
let display= document.getElementById("display")
let firstNumber ="";
let secondNumber ="";
let operator= "";

function addNumber(number){

  if(operator === "") {
    firstNumber += number
    display.textContent = firstNumber;;
  } else{
     secondNumber += number
       display.textContent =firstNumber + " " + operator + " " + secondNumber;
    }
   
  }
  
 function clearCalculator(){
   firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = ""
   
  }
  function chooseOperator(selectedOperator) {
    operator = selectedOperator;
    display.textContent = firstNumber +" "+selectedOperator;

  }

  function calculate () {
     let num1 = Number(firstNumber);
     let num2 = Number(secondNumber);
     let answer;
  
      if (operator === "+"){
        answer = num1+num2;

  }else if (operator === "-"){
     answer= num1-num2;

    }else if (operator === "*"){
        answer = num1*num2;

      }else if (operator === "%"){
        answer = num1%num2;

       }else if (operator === "/"){
        answer = num1 / num2;
      }


       display.textContent = answer ;
  }
  

  







