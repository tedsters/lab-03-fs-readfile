'use strict';

const fs = require('fs');

module.exports = function(err, callback){
  if (err) throw err;
  let dataArray = [];
  fs.readFile(`${__dirname}/../data/one.text`, function(err, data){
    if(err) throw err;
    dataArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.text`, function(err, data){
      if(err) throw err;
      dataArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.text`, function(err, data){
        if(err) throw err;
        dataArray.push(data.toString('hex', 0, 8));
        callback(dataArray);
      });
    });
  });
};
