// Change this to the name of the game you want
const WATCH_NAME = "OPPENHEIMER";

module.exports = (client) => client.user.setActivity(WATCH_NAME, { type: "WATCHING" });
