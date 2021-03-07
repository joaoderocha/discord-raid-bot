'use strict';

const { listOfPrefixes, listOfHandlers } = require('../features')


exports.messageHandler =async function messageHandler(message) {
  if (message.author.bot) {
    return;
  }

  const {content} = message;

  console.log('content',content);

  if (checkValidPrefix(content)) {
    return;
  }

  const [prefix, command, ...args] = resolveArguments(content);

  console.log('prefix',prefix.length,'command', command);

  const handler = getHandler(prefix, command);

  console.log('handler', handler);

  if (!handler) {
    return;
  }

  try {
    const response = await handler(message, ...args);

    message.reply(response);
  } catch (error) {
    message.reply('Something bad happened ):')
  }
}

function resolveArguments(messageContent) {
  const prefix = messageContent.charAt(0);

  const [,messageSufix] = messageContent.split(prefix);
  
  return [prefix, ...messageSufix.split(' ')]
}

function checkValidPrefix(messageContent) {
  return !listOfPrefixes.some((prefix) => {
    return messageContent.startsWith(prefix);
  });
}

function getHandler(prefix, command) {
  console.log('prefix:',prefix,'|| command:', command);

  console.log(listOfHandlers);

  return listOfHandlers[prefix][command];
}
