// Generated by CoffeeScript 1.11.1
var _, default_config, glob;

glob = require('glob');

_ = require('lodash');

default_config = require('./config');

module.exports = function(api_key, referral_id) {
  var client, config, file, files, funktion, i, len, name;
  if (!api_key) {
    console.error("Error: api_key is required to do 1broker API calls");
    return null;
  }
  config = _.defaults({
    api_key: api_key,
    referral_id: referral_id
  }, default_config);
  files = glob.sync(__dirname + "/methods/*.*");
  client = {};
  for (i = 0, len = files.length; i < len; i++) {
    file = files[i];
    name = file.split("/").pop().split(".")[0];
    funktion = require(file);
    client[name] = _.partial(funktion, config);
  }
  return client;
};