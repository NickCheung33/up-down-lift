MakerCloud_KOI.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
    if (receivedMessage == "up") {
        for (let index = 0; index < 4; index++) {
            powerbrick.Servo(powerbrick.Servos.S8, -45)
            powerbrick.Servo(powerbrick.Servos.S1, 225)
        }
    } else {
        if (receivedMessage == "down") {
            for (let index = 0; index < 4; index++) {
                powerbrick.Servo(powerbrick.Servos.S1, -45)
                powerbrick.Servo(powerbrick.Servos.S8, 225)
            }
        }
    }
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
MakerCloud.setupWifi("", "")
MakerCloud_KOI.connectMakerCloudMQTT()
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
