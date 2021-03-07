'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

const {messageHandler} = require('./messageHandler');

function connect() {
  return new Promise((resolve) => {
    client.on('ready', () => {
      console.log("I AM ALIVE");
      resolve(true);
    });

    client.login(process.env.TOKEN);
  })
}

client.on('message', messageHandler);

module.exports = {
  connect,
}
