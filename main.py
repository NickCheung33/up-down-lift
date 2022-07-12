def on_register_topic_message_handler(receivedMessage):
    if receivedMessage == "up":
        powerbrick.servo(powerbrick.Servos.S8, -45)
        powerbrick.servo(powerbrick.Servos.S1, 225)
    if receivedMessage == "down":
        powerbrick.servo(powerbrick.Servos.S1, -45)
        powerbrick.servo(powerbrick.Servos.S8, 225)
MakerCloud_KOI.register_topic_message_handler("BVKZV6T5", on_register_topic_message_handler)

MakerCloud.setup_wifi("waiwai", "51352343")
MakerCloud_KOI.connect_maker_cloud_mqtt()
MakerCloud_KOI.subscribe_topic("BVKZV6T5")