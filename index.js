
function sayHello(name){
    return `Hello ${name}`
}
console.log(sayHello('Sean'))

//Exercise 2: isAdult()  

function isAdult(age){

    if(age >= 18){
    console.log('Adult')
    }else{
    console.log('Minor')
    }
    }
    isAdult(20);
    
      
    
    //Exercise 3: isCharAVowel()
    
      
    
    function isCharAVowel(vowel){
    if (vowel === 'a'){
    return true;
    } else if(vowel === 'e'){
    return true
    } else if(vowel === 'i'){
    return true
    } else if (vowel === 'o'){
    return true
    } else if (vowel === 'u'){
    return true
    } else {
    console.log('Not a vowel')
    }
    }
    console.log(isCharAVowel('a'))

    //Exercise 4: GenerateEmail()

    const generateEmail = (name, domain) => {
        console.log(`${name}${domain}`)
    }
    generateEmail ('nohsean6', '@gmail.com')

    function greetUser(greetName, timeOfDay){
        if(timeOfDay === 'Morning'){
            console.log(`Good morning, ${greetName}!`)
        } else if (timeOfDay === 'Evening'){
            console.log(`Good Evening, ${greetName}!`)
        } else if (timeOfDay === 'Afternoon'){
            console.log(`Good Afternoon, ${greetName}!`)
        } else {
            console.log(`Hello, ${greetName}`)
        } 
    }

    greetUser('Sean', 'Morning')

// Exercise 6: maxOfThree

    function maxOfThree(num1, num2, num3) {
        return Math.max(num1, num2, num3)
    }

    console.log(maxOfThree('2', '5', '59'))
      
// Exercise 7: calculateTip()

    function calculateTip(billAmount, tipPercentage){
        let tipAmount = billAmount * (tipPercentage / 100)
        return tipAmount
    }
    console.log(calculateTip('50','18'))


// Exercise 8: convertTemperature(0

 function convertTemperature(temperature, scale){
    let convert;

    if(scale === 'C') {
        convert = (temperature * 1.8 + 32)
 } else if(scale === 'F'){
        convert = (temperature - 32) * (5 / 9);
 } else {
    return "Invalid Input, Please try again with the correct input"
 }
 return convert;
}
 console.log(convertTemperature(3, 'F'))


// Exercise 9: basicCalculator()

    function basicCalculator(number1, number2, operator){
        if(operator === 'add'){
            return number1 + number2
        }else if(operator === 'subtract'){
            return number1 - number2
        }else if(operator === 'multiply'){
            return number1 * number2
        }else if(operator === 'divide'){
            return number1 / number2
        }else {
            return 'Please make sure you typed in the correct input and operator'
        }
    }
    console.log(basicCalculator(4, 4, 'divide'))

    function calculateGrade(numberscore){
        if(numberscore >= 90){
            return 'You Got a A!, Fantastic Job!'
        }else if(numberscore >= 80 && numberscore <= 89){
            return 'You got a B!, Great Job! Always room for improvement'
        }else if(numberscore >= 70 && numberscore <= 79){
            return 'You got a C! Good Job! You passed but make sure to study more next time!'
        } else if(numberscore >= 60 && numberscore <= 69){
            return 'You got a D! Nice Try! It could be a bit better! Lets Work on it one step at a time!'
        }else (numberscore < 60)
            return 'You have unfortunately have failed, Study More! You got this!'
        }
console.log(calculateGrade(83))

//Exercise 11: createUsername()

function createUsername(first, last){
    let username;
    let first9 = first.substring(0, 3);
    let last9 = last.substring(0, 3);
    let wordCount = first.length + last.length

    if(createUsername){
        username = `${first9}` + `${last9}` + wordCount
    }
    return username;
}
console.log(createUsername('Sean', 'Noh'))

// Exercise 12: numArgs()

    function numArgs(){
        return arguments.length
    }
    console.log(numArgs(1,2,3,4,5,6,7,8,9))