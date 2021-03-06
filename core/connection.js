'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

const {listOfAvailableCommands} = require('./raidHosting/commands')


function connect() {
  return new Promise((resolve) => {
    client.on('ready', () => {
      console.log("I AM ALIVE");
      resolve(true);
    });

    client.login(process.env.TOKEN);
  })
}

client.on('message',async (msg) => {
  if (msg.author.bot) {
    return;
  }

  if (!msg.content.startsWith('!')) {
    return;
  }

  const [,something] = msg.content.split('!');

  const [command, ...args] = something.split(' ');

  console.log(args);

  const handler = listOfAvailableCommands[command];

  if (!handler) {
    return;
  }

  try {
    const response = await handler(...args);

    msg.reply(response);
  } catch (error) {
    msg.reply(error)
  }
});

module.exports = {
  connect,
}
