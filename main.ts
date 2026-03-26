/* Copyright (c) 2026 MTHS All rights reserved
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program compare two random numbers.
*/

//variables
let number1 : number 
let number2 : number 

//start
basic.showIcon(IconNames.Happy)
number1 = randint(0, 99)
number2 = randint(0, 99)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString( number1 .toString())
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
   
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString( number2 .toString())
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()

    if (number1 < number2) { 
        basic.clearScreen()
        basic.showString(number1.toString() + '<' + number2.toString())
        basic.showIcon(IconNames.Happy)
    
    } else { 
        basic.clearScreen()
        basic.showString(number1.toString() + '>' + number2.toString())
        basic.showIcon(IconNames.Sad)
    }
})