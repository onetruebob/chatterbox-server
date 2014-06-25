var fs = require('fs');

var fileReady = false;
var readFileData;

var saveData = function(id, dataToSave) {
  var JSONdata = JSON.stringify(dataToSave);

  fs.writeFile(id + '.json', JSONdata, function(err){
    if (err) throw err;
    console.log('saved '+ id + ' data');
  });
};

var startFileRead = function(id) {
  fs.readFile(id + '.json', function(err, fileData){
    if (err) throw err;
    console.log('file: ' + fileData);
    if(fileData){
      readFileData = JSON.parse(fileData);
    }
    fileReady = true;
  });
};

var checkFileStatus = function(){
  return fileReady;
};

var getFileData = function(){
  return readFileData;
};

module.exports = {};
module.exports.saveData = saveData;
module.exports.startFileRead = startFileRead;
module.exports.checkFileStatus = checkFileStatus;
module.exports.getFileData = getFileData;