const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

const { PREFIX, TOKEN, CHANNEL } = require('./util');

const colors = [11988127, 16772255, 16777215, 16740607, 649983, 13342767];

const emojies = ["🥰", "🎉", "💖", "💞", "💓", "💕", "💘"]

const { wishes, images } = require('./messages');

client.once('ready', () => {
    console.log(`HEATHENS BOT READY!!!\n${images.length} images loaded\n${wishes.length} messages loaded\n${colors.length} colors loaded\n${emojies.length} emojies loaded`);
    client.channels.cache.get(CHANNEL).send("I'm online");
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot || !message.guild) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        const lat = Math.round(client.ws.ping);
        message.channel.send(`Pong in **${lat} ms** :tada:`);
    }
    if(command === 'start') {
        var interval = setInterval (function () {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const wish = wishes[Math.floor(Math.random() * wishes.length)];
            const emoji = emojies[Math.floor(Math.random() * emojies.length)];
            const wishEmbed = new MessageEmbed()
            .setTitle("Happy New Year 🎉")
            .setColor(color)
            .setDescription(`${emoji} ${wish} ${emoji}`)
            .setTimestamp();
            message.guild.channels.cache.get(CHANNEL).send(wishEmbed)
            .catch(console.error);
        }, 60000); 

        var image = setInterval (function () {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const image = images[Math.floor(Math.random() * images.length)];
            const wishEmbed = new MessageEmbed()
            .setTitle("Happy New Year 🎉")
            .setColor(color)
            .setImage(image)
            .setTimestamp();
            message.guild.channels.cache.get(CHANNEL).send(wishEmbed)
            .catch(console.error);
        }, 90000);
    }
    
});

client.login(TOKEN);