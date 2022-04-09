const mineflayer = require("mineflayer");

var settings = {
    username: "Capo",
    host: "game3.falix.cc",
    port: "61450",
    version: "1.18.1",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", ()=>{
    bot.chat("caca");
});

const caminar = bot.setControlState('forward', true)

;
