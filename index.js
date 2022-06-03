const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({ intents: 32767  });

client.on("ready", () => {
    console.log("Bot Is READY!")
});

client.on("messageCreate", (message) => {
    const prefix = "cl"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("lol")

    }

});


client.login(process.env.TOKEN)

