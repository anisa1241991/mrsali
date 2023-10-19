input.onButtonPressed(Button.A, function () {
    basic.showNumber(hummingbird.getSensor(SensorType.Dial, ThreePort.One))
})
hummingbird.startHummingbird()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    hummingbird.setRotationServo(FourPort.One, hummingbird.getSensor(SensorType.Dial, ThreePort.One))
    hummingbird.setPositionServo(FourPort.Two, hummingbird.getSensor(SensorType.Dial, ThreePort.One))
})
