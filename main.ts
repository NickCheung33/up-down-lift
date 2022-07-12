MakerCloud_KOI.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
    if (receivedMessage == "up") {
        for (let index = 0; index < 4; index++) {
            powerbrick.Servo(powerbrick.Servos.S8, 25)
        }
    } else {
        if (receivedMessage == "down") {
            for (let index = 0; index < 4; index++) {
                powerbrick.Servo(powerbrick.Servos.S8, -25)
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        powerbrick.Servo(powerbrick.Servos.S8, 25)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        powerbrick.Servo(powerbrick.Servos.S8, -25)
    }
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
MakerCloud.setupWifi("", "")
MakerCloud_KOI.connectMakerCloudMQTT()
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
