MakerCloud_KOI.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
    if (receivedMessage == "up") {
        powerbrick.Servo(powerbrick.Servos.S8, -45)
        powerbrick.Servo(powerbrick.Servos.S1, 225)
    } else {
        if (receivedMessage == "down") {
            powerbrick.Servo(powerbrick.Servos.S1, -45)
            powerbrick.Servo(powerbrick.Servos.S8, 225)
        }
    }
})
MakerCloud.configRxTxPwbrick(MakerCloud.SerialPorts.PORT2)
MakerCloud.setupWifi("", "")
basic.pause(1000)
MakerCloud_KOI.connectMakerCloudMQTT()
basic.pause(1000)
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
