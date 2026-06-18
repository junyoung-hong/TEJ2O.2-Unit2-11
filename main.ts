/* Copyright (c) 2026 MTHS All rights reserved
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program compare two random numbers.
*/

// variables
basic.showIcon(IconNames.Happy)
const number1 = randint(0, 99)
const number2 = randint(0, 99)

// Pressed A
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString(convertToText(number1))
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// Pressed B
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString(convertToText(number2))
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// Shake the microbit
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()

    if (number1 < number2) {
        basic.clearScreen()
        basic.showString(convertToText(number1) + '<' + convertToText(number2))
        basic.showIcon(IconNames.Happy)

    } else if (number1 > number2) { 
        basic.clearScreen()
        basic.showString(convertToText(number1) + '>' + convertToText(number2))
        basic.showIcon(IconNames.Sad)

    } else { 
        basic.clearScreen()
        basic.showString(convertToText(number1) + '=' + convertToText(number2))
        basic.showIcon(IconNames.Surprised)
    }
})