let Group_ID = 1
radio.setGroup(Group_ID)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.East)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(0)
        basic.showNumber(Group_ID)
    }
})
