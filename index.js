const mineflayer = require("mineflayer");

var settings = {
    username: "Omnipresent",
    host: "Sponko18.aternos.me",
    port: "15754",
    version: "1.19.2",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", ()=>{
    bot.chat("Bow down to me");
});

const caminar = bot.setControlState('forward', true)

;
