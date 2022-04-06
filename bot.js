const mineflayer = require("mineflayer");

var settings = {
    username: "Capo",
    host: "free8.falix.cc:49404",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", ()=>{
    bot.chat("Hello everyone!");
});

bot.setControlState('jump', true)

;