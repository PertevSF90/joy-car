function links () {
    if (JoyCar.linefinder(SensorLCRSelection.Left)) {
        JoyCar.turn(
        FRDirection.Reverse,
        LRDirection.Left,
        100,
        1
        )
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
    }
}
function rechts () {
    if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        JoyCar.turn(
        FRDirection.Reverse,
        LRDirection.Right,
        100,
        1
        )
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
    }
}
function halt () {
    JoyCar.stop(StopIntensity.Soft)
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
}
JoyCar.light(ToggleSwitch.On)
JoyCar.brakelight(ToggleSwitch.On)
basic.forever(function () {
    JoyCar.drive(FRDirection.Forward, 20)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
    if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        rechts()
    }
    if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        links()
    }
    for (let Index2 = 50; Index2 >= JoyCar.sonar(); Index2--) {
        halt()
    }
})
