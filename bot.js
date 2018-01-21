var Discord = require('discord.io');
var auth = require('./auth.json');
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == '!!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'insult':
                bot.sendMessage({
                    to: channelID,
                    message: "T'es vraiment qu'un sale con !"
                });
            // Just add any case commands if you want to..
         }
     }
});