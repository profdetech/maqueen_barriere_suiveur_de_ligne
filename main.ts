radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (receivedNumber == 34) {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("branchez sur P1")
    basic.showString("Groupe radio 66")
    basic.showString("ouvrir nombre 12")
    basic.showString("fermer nombre 34")
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
radio.setGroup(66)
basic.forever(function () {
	
})
