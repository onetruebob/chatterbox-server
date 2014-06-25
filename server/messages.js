// System for storying messages
var fileHelper = require('./fileHelper.js');

var initialized = false;

var msgStorage = {};

var nextObjId = 0;

var createMessage = function (msgObj) {
  msgObj.objectId = nextObjId;
  msgObj.createdAt = new Date();
  msgObj.updatedAt = msgObj.createdAt;
  nextObjId++;

  //insert into our message stor
  msgStorage[msgObj.objectId] = msgObj;
  console.log('message storage ', msgStorage);

  //Request to save the message store
  fileHelper.saveData('messages', msgStorage);
};

var validateMessage = function (msgObj) {
  // if((!msgObj.hasOwnProperty('roomname')) || (typeof msgObj.roomname !== 'string')) {
  //   return false;
  // }
  if((!msgObj.hasOwnProperty('username')) || (typeof msgObj.username !== 'string')) {
    return false;
  }

  return true;
};

var getMessages = function (){
  var result = [];

  if(fileHelper.checkFileStatus) {
    msgStorage = fileHelper.getFileData();
    nextObjId = Object.keys(msgStorage).length;
  }

  for(var message in msgStorage) {
    result.push(msgStorage[message]);
  }

  return {'results': result};
};

//Tell the file helper to get the file so
//hopefully it's here before the client makes it's first request
fileHelper.startFileRead('messages');

module.exports = {};
module.exports.createMessage = createMessage;
module.exports.validateMessage = validateMessage;
module.exports.getMessages = getMessages;
