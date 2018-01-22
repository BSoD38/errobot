var Discord = require('discord.io');

module.exports = {
    getUserByID: function (bot, channelID, userID){
        for(var user in bot.servers[bot.channels[channelID].guild_id].members){
            if(user == userID){
                return user;
            }
        }
        return null;
    },

    getUsersByMultipleIDs: function (bot, channelID){
        res = new Array(0);
        Array.from(arguments).slice(2).forEach(function(query){
            for(var user in bot.servers[bot.channels[channelID].guild_id].members){
                if(user == query){
                    res.push(user);
                } else {
                    res.push(null);
                }
            }
        });
        return res;
    },

    mentionToID: function(str){
        if(str.substr(0,2) == "<@!"){
            return str.substr(3, str.length - 2);
        } else if (str.substr(0,1) == "<@"){
            return str.substr(2, str.length - 2);
        } else {
            return null;
        }
    },

    textToEmoji: function(text){
        res = "";
        for(var word = 1; word < text.length; word++){
            for(var c = 0; c < text[word].length; c++){
                if(text[word][c].toLowerCase() != text[word][c].toUpperCase()){ //Check if character is a letter
                    res += ":regional_indicator_" + text[word][c].toLowerCase() + ":"; //Change character to lowercase and add to result
                } else {
                    res += text[word][c];
                }
            }
            res += "   ";
        }
        return res.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //Remove accents if any
    }
 }