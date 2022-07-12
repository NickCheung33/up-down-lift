MakerCloud_KOI.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
    if (receivedMessage == "up") {
        up()
    } else {
        if (receivedMessage == "down") {
            down()
        }
    }
})
function up () {
    powerbrick.Servo(powerbrick.Servos.S8, -45)
    powerbrick.Servo(powerbrick.Servos.S1, 225)
}
function down () {
    powerbrick.Servo(powerbrick.Servos.S1, -45)
    powerbrick.Servo(powerbrick.Servos.S8, 225)
}
MakerCloud.setupWifi("waiwai", "51352343")
MakerCloud_KOI.connectMakerCloudMQTT()
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
