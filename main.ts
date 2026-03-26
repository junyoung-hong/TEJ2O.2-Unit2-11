/* Copyright (c) 2026 MTHS All rights reserved
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program compare two random numbers.
*/

//start
basic.showIcon(IconNames.Happy)
const number1 = randint(0, 99)
const number2 = randint(0, 99)

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