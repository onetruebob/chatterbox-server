// System for storying messages

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

  for(var message in msgStorage) {
    result.push(msgStorage[message]);
  }

  return {'results': result};
};

module.exports = {};
module.exports.createMessage = createMessage;
module.exports.validateMessage = validateMessage;
module.exports.getMessages = getMessages;
