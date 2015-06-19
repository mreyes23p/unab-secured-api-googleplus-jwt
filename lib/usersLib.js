'use strict';
var _   = require('underscore');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var UsersLib = function(){
    var self = this;
    var users = []; 

    users.push({id: 1, username: 'mreyescano', password: 'pass1234'});

    self.findOne = function(username, password, callback){
        //TODO: refactor. It should been gotten from db and password with a hash md5
        var usersList = _.filter(users, function(item){
            return (item.username === username) && (item.password === password);	
        });

        if (usersList.length > 0){
            callback(null, usersList[0]);
        } else {
            callback(new Error('NOT_FOUND'));
        }
    };

    self.getToken = function(userId, callback){
        //TODO: refactor. get secret string from a configuration file
        var secret = 'secretpass';
        var token = jwt.sign(userId, secret, {
            expiresInMinutes: 1440 // expires in 24 hours
        });

        callback(null,token);
    };

    self.validateThirdPartyAccessToken = function(thirdParty, accessToken, callback){
        
        //If thirdParty is Google, query to
        //https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=accessToken
        
        callback(null);

    };

};

module.exports = new UsersLib();
