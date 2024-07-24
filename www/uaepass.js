var exec = require('cordova/exec');

var UAEPass = {
  init: function (environment, clientID, clientSecret, redirectUrl) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'initPlugin', [environment, clientID, clientSecret, redirectUrl]);
    });
  },

  getWritePermission: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'getWritePermission', []);
    });
  },

  getCode: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'getCode', []);
    });
  },

  getAccessToken: function (code) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'getAccessToken', [code]);
    });
  },

  getProfile: function (accessToken) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'getProfile', [accessToken]);
    });
  },

  signDocument: function (documentURL) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'signDocument', [documentURL]);
    });
  },

  clearData: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, 'uaepass', 'clearData', []);
    });
  }
};

module.exports = UAEPass;
