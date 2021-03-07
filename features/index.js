'use strict';

const {prefix: raidHostingPrefix, avaliableCommands: raidHostingAvaliableCommands} = require('./raidHosting');


const listOfPrefixes = [
  raidHostingPrefix,
]


const listOfHandlers = 
  {
    [raidHostingPrefix]: {
      ...raidHostingAvaliableCommands,
    }
  }


module.exports = {
  listOfPrefixes,
  listOfHandlers,
}
