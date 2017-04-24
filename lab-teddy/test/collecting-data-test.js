'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
const dataFiles = require('../lib/collecting-data.js');
let mocData = [ '436f707972696768', '4c6f72656d206970', '4c6f72656d206970' ];
describe('collecting-data.js', function(){
  it('should be an object', done => {
    fs.readFile(`${__dirname}/../data/one.text`, function(err, data){
      let bufferData = data;
      expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
      done();
    });
  });
});
describe('collecting-data.js', function(){
  it('should be an object', done => {
    fs.readFile(`${__dirname}/../data/two.text`, function(err, data){
      let bufferData = data;
      expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
      done();
    });
  });
});

describe('collecting-data.js', function(){
  it('should be an object', done => {
    fs.readFile(`${__dirname}/../data/three.text`, function(err, data){
      let bufferData = data;
      expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
      done();
    });
  });
});

describe('collecting-data.js', function(){
  it('should return an array', done => {
    dataFiles(function(fileArray){
      expect(fileArray).to.deep.equal(mocData);
      expect(fileArray[0]).to.equal(mocData[0]);
      done();
    });
  });
});
