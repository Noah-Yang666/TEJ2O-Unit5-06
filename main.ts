/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah
 * Created on: March 2026
 * This program operates the servo to turn
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

// pressing Button A
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// pressing Button B
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
