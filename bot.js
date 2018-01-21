var Discord = require('discord.io');
var commands = require('./commands');
var authfile = require('./auth.json');
var bot = new Discord.Client({
    autorun: true,
    token: authfile.token
});
isDebug = true; //Shows debug info on console.
isPublicDebug = false; //Shows debug info to everyone on the channel.

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message.substr(0, 2) == 'e!'){
        //Command handling
        var command = message.slice(2).split(' ');

        //Debug info
        if(isDebug == true){
            console.log("User " + user + "(" + userID + ") has entered command " + command);
        }

        if(isPublicDebug){
            bot.sendMessage({
                to: channelID,
                message: "Commande tapée : `" + command + "`"
            });
        }

        switch(command[0]){
            case "ping":
            commands.ping(bot, channelID, userID);
            break;

            case "insult":
            commands.insult(bot, channelID, command, user);
            break;

            case "debug":
            commands.setDebug(bot, channelID, command);
            break;

            case "publicdebug":
            commands.setPublicDebug(bot, channelID, command);
            break;
            
            case "fatten":
            commands.fattenText(bot, channelID, command);
            break;

            default:
            commands.invalidSyntax(bot, channelID, userID);
            break;
        }
    }
});