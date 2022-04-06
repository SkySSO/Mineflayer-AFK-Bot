const mineflayer = require("mineflayer");

var settings = {
    username: "Capo",
    host: "free8.falix.cc",
    port: "49404",
    version: "1.18.1",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", ()=>{
    bot.chat("caca");
});

bot.setControlState('jump', true)
;

const caminar = bot.setControlState('forward', true)

;