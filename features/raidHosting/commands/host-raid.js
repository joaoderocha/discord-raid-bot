'use strict';

const raidList = require('./raidList.json');

exports.hostRaid = function hostRaid(message, raidName, timestamp, numberOfCharacters=1) {
  const raidProperties = raidList[raidName.toLowerCase()];
  
  if (!raidProperties) {
    return `I can only list those raids: ${Object.keys(raidList)}`;
  }

  const raidHostObject = {
    raidName,
    timestamp,
    maxCharacters: raidProperties.limitOfCharacter,
    currentNumberOfCharacters: numberOfCharacters
  }

  return `${raidHostObject}`;
}
