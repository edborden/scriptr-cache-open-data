var http = require('http');
var requestConfig = {
  url: 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=DOHMH&$limit=20'
};
var response = http.request(requestConfig);
var body = JSON.parse(response.body);
console.log(JSON.stringify(body));
storageObject = {};
for(var i = 0 ; i < body.length; i++){
  storageObject["_" + i] = body[i];
};
storage.global.complaints = storageObject;