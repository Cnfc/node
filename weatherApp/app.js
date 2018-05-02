
const fs = require('fs');
const request = require('request');


request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301lombardstreet',
  json: true
}, (err, responce, body) => {
  console.log(body);
});
