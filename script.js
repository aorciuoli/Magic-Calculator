class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement, forceNum) { //Constructs calculator
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
        console.log('Constructor Finished')
      }
    

    clear() { //clears all inputs and resets count. Does not remove force number
        console.log ('Clearing all...')
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        equalsPressed = false
        console.log("Equals Pressed: ", equalsPressed)
        count = 0
        console.log('Count: ', count)
    }
    
    delete(){ //deletes single digit or operation
        if (trickMode == true){
            console.log('Count: ', count)
            switch(count){
                case 0: //removes magic inputs in case someone messes up
                    month = 0
                    console.log('Month: ', month)
                    this.currentOperand = this.currentOperand.toString().slice(0, -1)
                    break
                case 1:
                    day = 0
                    console.log('Day: ', day)
                    this.currentOperand = this.currentOperand.toString().slice(0, -1)
                    break
                case 2:
                    year = 0
                    console.log('Year: ', year)
                    this.currentOperand = this.currentOperand.toString().slice(0, -1)
                    break
                default:
                    this.currentOperand = this.currentOperand.toString().slice(0, -1)
            }
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        }
        console.log('Deleted Operand')
    }

    appendNumber(number){ //appends numbers so you can type multi digit numbers like 123 or 1.23
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        if (trickMode == true){
            switch (count){
                case 0: //sets month to first number entered
                    month = this.currentOperand
                    console.log('Month: ', month)
                    break
                case 1: //sets day to second number entered
                    day = this.currentOperand
                    console.log('Day: ', day)
                    break
                case 2: //sets year to third number entered
                    year = this.currentOperand
                    console.log('Year: ', year)
                    break
                default: //ignores any inputs after
                    return
            }
        } else {
            return
        }
    }

    chooseOperation(operation){ //chooses the operation to perform
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        if (trickMode == true){
            count++ //increases count to track birthday information
        }else{
            return
        }
        console.log('Count: ', count)
    }

    compute(){ //handles the computations
        let computation
        const prev = parseFloat(this.previousOperand) //converts previus operand to a float
        const current = parseFloat(this.currentOperand) //converts current operand to a float
        if ((trickMode == true) && (equalsPressed == true)){
            if(forceNum != 0){
                switch(this.operation){ //cases for each possible operation and the computation to perform
                    case '+': //addition
                        computation = parseFloat(forceNum)
                        console.log('Addition')
                        break
                    case '-': //subtraction
                        computation = parseFloat(forceNum)
                        console.log('Subtraction')
                        break
                    case 'x': //multiplication
                        computation = parseFloat(forceNum)
                        console.log('Multiplication')
                        break
                    case '÷': //division
                        computation = parseFloat(forceNum)
                        console.log('Division')
                        break
                    default:
                        return
                }        
            }else{
                if (isNaN(prev) || isNaN(current)) return //if somehow a non-number is entered, it returns
                switch(this.operation){ //cases for each possible operation and the computation to perform
                    case '+': //addition
                        computation = prev + current
                        console.log('Addition')
                        break
                    case '-': //subtraction
                        computation = prev - current
                        console.log('Subtraction')
                        break
                    case 'x': //multiplication
                        computation = prev * current
                        console.log('Multiplication')
                        break
                    case '÷': //division
                        computation = prev / current
                        console.log('Division')
                        break
                    default:
                        return
                }
            }
        }else{
            if (isNaN(prev) || isNaN(current)) return //if somehow a non-number is entered, it returns
            switch(this.operation){ //cases for each possible operation and the computation to perform
                case '+': //addition
                    computation = prev + current
                    console.log('Addition')
                    break
                case '-': //subtraction
                    computation = prev - current
                    console.log('Subtraction')
                    break
                case 'x': //multiplication
                    computation = prev * current
                    console.log('Multiplication')
                    break
                case '÷': //division
                    computation = prev / current
                    console.log('Division')
                    break
                default:
                    return
            }
        }
        this.currentOperand = computation //sets current operand to computation generated
        this.operation = undefined //resets operation 
        this.previousOperand = '' //resets previous operand
    }

    getDisplayNumber(number){ //converts number to string so it can be displayed properly
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0]) //handles integer part
        const decimalDigits = stringNumber.split('.')[1] //handles decimal part (if any)
        let integerDisplay
        if (isNaN(integerDigits)){ //if integer digits aren't a number
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0}) //adds the commas
        }
        if (decimalDigits != null){ //if there are no decimals
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(){ //updates the display showing the current operand and previous operand/operation
            this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
            if (this.operation != null){
                this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            } else {
                this.previousOperandTextElement.innerText = ''
            }
            console.log('Display Updated')
    }

    monthSet(){
        let monthString = ''
        if (month > 12){
            month = 0
            monthString = 'XXXXX'
            console.log('Error: Invalid month')
        } else {
            switch(month){ //checks the month and converts it to a word
                case '1':
                    monthString = 'January'
                    console.log('Month: ', monthString)
                    break
                case '2':
                    monthString = 'February'
                    console.log('Month: ', monthString)
                    break
                case '3':
                    monthString = 'March'
                    console.log('Month: ', monthString)
                    break
                case '4':
                    monthString = 'April'
                    console.log('Month: ', monthString)
                    break
                case '5':
                    monthString = 'May'
                    console.log('Month: ', monthString)
                    break
                case '6':
                    monthString = 'June'
                    console.log('Month: ', monthString)
                    break
                case '7':
                    monthString = 'July'
                    console.log('Month: ', monthString)
                    break
                case '8':
                    monthString = 'August'
                    console.log('Month: ', monthString)
                    break
                case '9':
                    monthString = 'September'
                    console.log('Month: ', monthString)
                    break
                case '10':
                    monthString = 'October'
                    console.log('Month: ', monthString)
                    break
                case '11':
                    monthString = 'November'
                    console.log('Month: ', monthString)
                    break
                case '12':
                    monthString = 'December'
                    console.log('Month: ', monthString)
                    break
                default:
                    monthString = 'XXXXX'
                    month = 0
                    console.log('Month: ', monthString)
                    console.log('Error: Invalid month')
                    return 
            }
        }
        return monthString
    }

    fixYear(){
        let currDate = new Date()
        let yearFix
        let currYear = currDate.getFullYear()
        let halfYear = currYear - 2000
        if (year > currYear){ //checks to see if year is valid
            year = 0
            yearFix = year
            console.log('Year: ', yearFix)
            console.log('Error: Invalid year')
        } else if ((year > (currYear - 150)) && (year < currYear)){
            yearFix = year
            console.log('Year: ', yearFix)
        } else if ((year >= halfYear) && (year <= 99)){
            yearFix = year.toString()
            yearFix = '19' + yearFix
            yearFix = parseInt(yearFix)
            console.log('Year: ', yearFix)
        } else if ((year < 10) && (year > 0)){
            yearFix = year.toString()
            yearFix = '200' + yearFix
            yearFix = parseInt(yearFix)
            console.log('Year: ', yearFix)
        } else if ((year < halfYear) && (year >= 10)){
            yearFix = year.toString()
            yearFix = '20' + yearFix
            yearFix = parseInt(yearFix)
            console.log('Year: ', yearFix)
        } else {
            year = 0
            yearFix = year
            console.log('Year: ', yearFix)
            console.log('Error: Invalid year')
        }
        return yearFix
    }
    
    fixDay(){
        let dayFix
        if ((day > 31 ) || (day < 0)  || (month == 2 && day >= 29) || ((month == 4 || month == 6 || month == 9 || month == 11) && day >= 30)){
            day = 0
            dayFix = day
            console.log('Day: ', dayFix)
            console.log('Error: Invalid day')
        }else{
            dayFix = day
            console.log('Day: ', dayFix)
        }
        return dayFix
    }

    getBirthday(){ //gets birthday
        let monthString = ''
        let dayString = ''
        let yearString = ''
        monthString = this.monthSet()
        dayString = this.fixDay()
        yearString = this.fixYear()

        if (yearString == 0){
            yearString = 'XXXX'
        }

        if (dayString == 0){
            dayString = 'XX'
        }

        console.log('Month: ', monthString)
        console.log('Day: ', dayString)
        console.log('Year: ', yearString)

        if ((month == 0) && (day == 0) && (year == 0)){
            birthdayString = 'N/A'
        } else {
            birthdayString = monthString + ' ' + dayString + ', ' + yearString //outputs birthday as 'Month DD, YYYY'
            if (typeof(birthdayString) === undefined){
                birthdayString = 'N/A'
            }
            console.log('Birthday: ', birthdayString)
        }
        return birthdayString
    }

    getMonthDay(m, d){
        let monthDay = ''
        if (d < 10){  //converts month and day into single string for comparison
            monthDay = m.toString() + '0' + d.toString() //appends a 0 if the day is less than 10
            console.log("MonthDay: ", monthDay)
        } else {
            monthDay = m.toString() + d.toString()
            console.log("MonthDay: ", monthDay)
        }
        monthDay = parseInt(monthDay)
        return monthDay
    }

    getAstrological(){
        let monthDay = this.getMonthDay(month, day) //used to compute astrological sign
        console.log("MonthDay: ", monthDay)
        if (month == 0 && day == 0){ //checks to see if the month & year are valid
            astrologicalSign = 'N/A'
            console.log('Error: Invalid Month/Day')
        } else if ((month != 0) && (day == 0)){
            astrologicalSign = this.astrologicalEstimate()
        }else {
            if ((monthDay >= 101) && (monthDay <= 119)){ //all possibilites for Astrological sign
                astrologicalSign = 'Capricorn'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 120) && (monthDay <= 218)){
                astrologicalSign = 'Aquarius'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 219) && (monthDay <= 320)){
                astrologicalSign = 'Pisces'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 321) && (monthDay <= 419)){
                astrologicalSign = 'Aries'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 420) && (monthDay <= 520)){
                astrologicalSign = 'Taurus'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 521) && (monthDay <= 620)){
                astrologicalSign = 'Gemini'
                console.log('Astrological sign: ', astrologicalSign)
            }else if((monthDay >= 621) && (monthDay <= 722)){
                astrologicalSign = 'Cancer'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 723) && (monthDay <= 822)){
                astrologicalSign = 'Leo'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 823) && (monthDay <= 922)){
                astrologicalSign = 'Virgo'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 923) && (monthDay <= 1022)){
                astrologicalSign = 'Libra'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 1023) && (monthDay <= 1121)){
                astrologicalSign = 'Scorpio'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 1122) && (monthDay <= 1221)){
                astrologicalSign = 'Sagittarius'
                console.log('Astrological sign: ', astrologicalSign)
            }else if ((monthDay >= 1222) && (monthDay <= 1231)){
                astrologicalSign = 'Capricorn'
                console.log('Astrological sign: ', astrologicalSign)
            }else{
                astrologicalSign = 'N/A'
                console.log('Error: Invalid Month/Day')
                console.log('Asrological sign: ', astrologicalSign)
            }
        }
        return astrologicalSign
    }

    astrologicalEstimate(){
        let guess = ''
        switch(month){ //checks the month and converts it to a word
            case '1':
                guess = 'Capricorn or Aquarius'
                console.log ('Guess: ', guess)
                break
            case '2':
                guess = 'Aquarius or Pisces'
                console.log ('Guess: ', guess)
                break
            case '3':
                guess = 'Pisces or Aries'
                console.log ('Guess: ', guess)
                break
            case '4':
                guess = 'Aries or Taurus'
                console.log ('Guess: ', guess)
                break
            case '5':
                guess = 'Taurus or Gemini'
                console.log ('Guess: ', guess)
                break
            case '6':
                guess = 'Gemini or Cancer'
                console.log ('Guess: ', guess)
                break
            case '7':
                guess = 'Cancer or Leo'
                console.log ('Guess: ', guess)
                break
            case '8':
                guess = 'Leo or Virgo'
                console.log ('Guess: ', guess)
                break
            case '9':
                guess = 'Virgo or Libra'
                console.log ('Guess: ', guess)
                break
            case '10':
                guess = 'Libra or Scorpio'
                console.log ('Guess: ', guess)
                break
            case '11':
                guess = 'Scorpio or Sagittarius'
                console.log ('Guess: ', guess)
                break
            case '12':
                guess = 'Sagittarius or Capricorn'
                console.log ('Guess: ', guess)
                break
            default:
                guess = 'N/A'
                console.log('Error')
                return 
        }
        return guess
    }

    getChineseZodiac(){
        let yearCZ = 0 //used to compute CZ sign
        if (year == 0){ 
            chineseZodiacSign = 'N/A'
            console.log('Error: Invalid Year')
            yearCZ = ''
        } else {
            yearCZ = this.fixYear()
            console.log('CZ Year: ', yearCZ)
            yearCZ = parseInt(yearCZ) //makes the CZ year into an integer
            if ((yearCZ - 1948)%12 == 0){ //These loop every 12 years so I just had it subtract the earliest year I could find for a particular sign from their birth year and compute mod(12)
                chineseZodiacSign = 'Year of the Rat'
            }else if((yearCZ - 1949)%12 == 0){
                chineseZodiacSign = 'Year of the Ox'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1950)%12 == 0){
                chineseZodiacSign = 'Year of the Tiger'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1951)%12 == 0){
                chineseZodiacSign = 'Year of the Rabbit'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1952)%12 == 0){
                chineseZodiacSign = 'Year of the Dragon'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1953)%12 == 0){
                chineseZodiacSign = 'Year of the Snake'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1954)%12 == 0){
                chineseZodiacSign = 'Year of the Horse'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1955)%12 == 0){
                chineseZodiacSign = 'Year of the Goat'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1956)%12 == 0){
                chineseZodiacSign = 'Year of the Monkey'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1957)%12 == 0){
                chineseZodiacSign = 'Year of the Rooster'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1958)%12 == 0){
                chineseZodiacSign = 'Year of the Dog'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else if((yearCZ - 1959)%12 == 0){
                chineseZodiacSign = 'Year of the Pig'
                console.log('Chinese Zodiac Sign: ', chineseZodiacSign)
            }else{
                chineseZodiacSign = 'N/A'
                console.log('Error: Invalid Year')
                yearCZ = ''
            }
        }
        return chineseZodiacSign
    }

    getAge(){
        let currDate = new Date()
        console.log('Current Date: ', currDate)
        
        let currMon = currDate.getMonth() + 1
        console.log('Current Month: ', currMon, typeof(currMon))

        let currDay = currDate.getDate()
        console.log('Current Day: ', currDay, typeof(currDay))

        let currYear = currDate.getFullYear()
        console.log('Current Year: ', currYear, typeof(currYear))

        let currMD = this.getMonthDay(currMon, currDay)

        let birMonthDay = this.getMonthDay(month, day)
        console.log('Birth Month/Day: ', birMonthDay)
        
        let birYear = this.fixYear()
        console.log('Birth Year: ', birYear)
                
        if (birYear == 0){
            age = 'N/A'
            console.log('Error: Invalid Birthday')
        } else if ((day == 0) && (year != 0)){
            age = this.estimateAge(currMon, currYear, birYear)
            console.log(age)
        }else{
            if (birMonthDay < currMD){
                age = currYear - birYear
            } else if (birMonthDay > currMD){
                age = ((currYear - 1) - birYear)
            } else {
                age = 'N/A'
            }
        }
        return age
    }

    estimateAge(CM, CY, BY){
        let BM = month
        let estimate = ''
        let age1 = 0
        let age2 = 0
        if ((BM == 0) || (CM == BM)){
            age1 = CY - BY
            age2 = (CY - 1) - BY
            estimate = age1.toString() + ' or ' + age2.toString()
        } else if (CM > BM){
            estimate = CY - BY
            estimate = estimate.toString()
        }else if (CM < month){
            estimate = (CY - 1) - BY
        }else{
            estimate = 'N/A'
        }
        return estimate
    }
}


var trickMode = new Boolean(false) //boolean to see if it's in trick mode or not
var equalsPressed = new Boolean(false)
var month //numerical month
var day //numerical day
var year //numerical year
var birthdayString //full birthday as a string

var age //age

var astrologicalSign //Astrological sign as string
var chineseZodiacSign //Chinese Zodiac Sign as a string

var forceNum = 0//the force number
var count = 0 //count to log the first 3 inputs 

console.log('Count: ', count)
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const inputBox = document.getElementById('input')
const submitButton = document.getElementById('submit')

const forceDisplay = document.getElementById('num-display')
const birthday = document.getElementById('birthday')
const personAge = document.getElementById('age')
const astrological = document.getElementById('astrological')
const chineseZodiac = document.getElementById('chinese-zodiac')
const indic = document.getElementById('indicator')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, forceNum) //creates a new calculator

numberButtons.forEach(button => { //operates numbers
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})

operationButtons.forEach(button => { //operates 4 functions
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => { //operates equals button
    if (trickMode == true){ //if trick mode is on, display force number at end
        equalsPressed = true
        console.log("Equals Pressed: ", equalsPressed)
        calculator.compute()
        calculator.updateDisplay()

        calculator.getBirthday()
        birthday.innerHTML = birthdayString

        calculator.getAge()
        personAge.innerHTML = age

        calculator.getAstrological()
        astrological.innerHTML = astrologicalSign

        calculator.getChineseZodiac()
        chineseZodiac.innerHTML = chineseZodiacSign
        off()
    } else if (trickMode == false){ //else, operate as a normal calculator
        calculator.compute()
        calculator.updateDisplay()
    }
})


allClearButton.addEventListener('click', button => {  //operates clear button
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => { //operates delete button
    calculator.delete()
    calculator.updateDisplay()
})

function show() { //shows secret menu
    document.getElementById('menu').style.width = '350px'
    document.getElementById('main').style.marginLeft = '350px'
  }
  
function hide() { //hides secret menu
    document.getElementById('menu').style.width = '0'
    document.getElementById('main').style.marginLeft= '0'
  }

function reset(){ //resets all values
    console.log('Clearing all values...')
    off()
    calculator.clear()
    input.value = ''
    forceDisplay.innerHTML = ''

    forceNum = 0
    console.log('Force Number: ', forceNum)
    
    count = 0
    console.log('Count: ', count)

    month = 0
    console.log('Month: ', month)

    day = 0
    console.log('Day: ', day)

    year = 0
    console.log('Year: ', year)

    age = 0
    personAge.innerHTML = ''
    console.log('Age: ', age)

    birthdayString = ''
    birthday.innerHTML = ''
    console.log('Birthday: ', birthdayString)

    astrologicalSign = ''
    astrological.innerHTML = ''
    console.log('Astrological Sign: ', astrologicalSign)

    chineseZodiac.innerHTML = ''
    chineseZodiacSign = ''
    console.log('All Fields Reset')
}

function on(){ //turns on trick mode
    trickMode = true
    indic.style.backgroundColor = '#00dd0b' //turns on indicator
    console.log('Trick Mode: ', trickMode)
}

function off(){ //tursn off trick mode
    trickMode = false
    indic.style.backgroundColor = '#414040' //removes indicator
    console.log('Trick Mode: ', trickMode)
}

function setForceNum(){ //sets the force number
        forceNum = 0
        console.log('Force Number: ', forceNum)
        
        count = 0
        console.log('Count: ', count)

        month = 0
        console.log('Month: ', month)

        day = 0
        console.log('Day: ', day)

        year = 0
        console.log('Year: ', year)

        age = 0
        personAge.innerHTML = ''
        console.log('Age: ', age)

        birthdayString = ''
        birthday.innerHTML = ''
        console.log('Birthday: ', birthdayString)

        astrologicalSign = ''
        astrological.innerHTML = ''
        console.log('Astrological Sign: ', astrologicalSign)

        chineseZodiac.innerHTML = ''
        chineseZodiacSign = ''
        console.log('All Fields Reset')
        let forceString
        if (!input.value){
            input.value = '' //empties input box
            forceDisplay.innerHTML = '' //clears display
        }else{
            forceNum = parseFloat(input.value) //converts input to a float
            forceString = forceNum.toLocaleString('en') //converts float to a number with commas
            console.log('Force String: ', forceString)
            forceDisplay.innerHTML = forceString //displays the forcenumber
            input.value = '' //empties input box
            console.log('Force Number: ', forceNum)
            on()//turns trick mode on
        }
}

function toggleTrickMode(){ //toggle for 'trick mode' button
    if (trickMode == false){
        on()
    } else {
        off()
    }
}
submitButton.addEventListener('click', setForceNum)
