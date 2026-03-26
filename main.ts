/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program compare two random numbers.
*/

//variables
let firstnumber : number
let secondnumber : number 

//start
basic.showIcon(IconNames.Happy)
firstnumber = randint(0, 99)
secondnumber = randint(0, 99)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString( firstnumber .toString())
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
   
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString( secondnumber .toString())
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()

    if (firstnumber < secondnumber) { 
        basic.clearScreen()
        basic.showString(firstnumber.toString() + '<' + secondnumber.toString())
        basic.showIcon(IconNames.Happy)
    
    } else { 
        basic.clearScreen()
        basic.showString(firstnumber.toString() + '>' + secondnumber.toString())
        basic.showIcon(IconNames.Sad)
    }
})