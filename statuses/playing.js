const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  GAME_NAME = "The name of the game",
  LARGE_IMAGE = "Main Image name",
  SMALL_IMAGE = "Small Image name",
  BIG_HOVER = "Hover text on main image",
  TINY_HOVER = "Hover text on small image",
  SECOND_TEXT = "Second row text",
  THIRD_TEXT = "Third row text";

module.exports = (client, CLIENT_ID) =>
rpcGenerator.getRpcImage(CLIENT_ID, SMALL_IMAGE)
   .then(small =>
         
rpcGenerator.getRpcImage(CLIENT_ID, LARGE_IMAGE)
  .then(large => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName(GAME_NAME)
      .setType("PLAYING")
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(large.id)
      .setAssetsLargeText(BIG_HOVER)
      .setAssetsSmallImage(small.id)
      .setAssetsSmallText(TINY_HOVER)
      .setDetails(SECOND_TEXT)
      .setState(THIRD_TEXT)
      .setStartTimestamp(Date.now())
      .toDiscord()
  )));
