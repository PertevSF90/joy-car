function links () {
    if (JoyCar.linefinder(SensorLCRSelection.Left)) {
        JoyCar.turn(
        FRDirection.Forward,
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
        FRDirection.Forward,
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
basic.forever(function () {
    if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        links()
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        rechts()
    } else {
        JoyCar.drive(FRDirection.Forward, 20)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
