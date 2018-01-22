var functions = require('./functions');

module.exports = {
    //Replies with Pong.
    ping: function(bot, channelID, sender) {
        bot.sendMessage({
            to: channelID,
            message: "<@" + sender + ">" + "\nPong!"
        });
    },

    //Sends an insult to the targeted user.
    insult: function(bot, channelID, senderName) {
        if (arguments.length == 3){
            bot.sendMessage({
                to: channelID,
                message: "Syntaxe de insult :\n`e!insult [[@pseudo] [@...]]`"
            });
            return;
        } else if(command.length == 4) {
            functions.getUserByID(bot, channelID, arguments[3])
            bot.sendMessage({
                to: channelID,
                message: "<@" + target + "> t'es qu'un sale con.\n-" + senderName + "."
            });
        } else {
            var names = new Array(0);
            for(var i=3; i < arguments.length - 1; i++){
                names.push(arguments[i]);
            }

            var ids = functions.getUsersByMultipleIDs(bot, channelID, names);
            for(var id in ids){
                if(id == null){
                    bot.sendMessage({
                        to: channelID,
                        message: "Un des utilisateurs ciblés n'existe pas !"
                    });
                    return;
                }
            }
        
            var reply = "";
            for(var id in ids){
                reply += "<@" + id + ">, ";
            }
            if()
            bot.sendMessage({
                to: channelID,
                message: "<@" + target + "> t'es qu'un sale con.\n-" + senderName + "."
            });
        }
    },

    //Sets the debugging setting.
    setDebug: function(bot, channelID, command){
        if(command[1] == "true"){
            isDebug = true;
            bot.sendMessage({
                to: channelID,
                message: "Debuggage activé."
            });
        } else if (command[1] == "false"){
            isDebug = false;
            bot.sendMessage({
                to: channelID,
                message: "Debuggage désactivé."
            });
        }
    },

    //Sets the public debugging setting.
    setPublicDebug: function(bot, channelID, command){
        if(isDebug == true){
            if(command[1] == "true"){
                isPublicDebug = true;
                bot.sendMessage({
                    to: channelID,
                    message: "Débuggage public activé."
                });
            } else if (command[1] == "false"){
                isPublicDebug = false;
                bot.sendMessage({
                    to: channelID,
                    message: "Débuggage public désactivé."
                });
            }
        }else{
            bot.sendMessage({
                to: channelID,
                message: "Changer ce paramètre ne sert à rien si le débuggage n'est pas activé."
            });
        }
    },

    //Converts the sender's text to an emoji version.
    fattenText: function(bot, channelID, command){
        if(command.length > 1){
            var send = functions.textToEmoji(command);
            if(send.length > 2000){
                bot.sendMessage({
                    to: channelID,
                    message: "Ce message est trop long ! Comme ma **bite virtuelle** en fait."
                });
            } else {
                bot.sendMessage({
                    to: channelID,
                    message: send
                });
            }
        } else {
            bot.sendMessage({
                to: channelID,
                message: "Usage :\n`e!fatten [votre phrase, avec ou sans espaces]`"
            });
        }
    },

    //Sends the invalid syntax message.
    invalidSyntax: function(bot, channelID, sender){
        bot.sendMessage({
            to: channelID,
            message: "<@" + sender + "> syntaxe invalide.\nTapez e!help pour une liste des commandes (WIP)."
        })
    }
 }