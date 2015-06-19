'use strict';

var ProductsLib = function(){
  var self = this;
  var products = [];
  products.push({id: 1, name: 'Arroz', price: '400'});
  products.push({id: 2, name: 'Fideos', price: '250'});
  products.push({id: 3, name: 'Leche', price: '670'});
  products.push({id: 4, name: 'Agua Embotallada', price: '1200'});

  self.getAll = function(callback){
    callback(null, products);
  };

  self.getById = function(id, callback){
    //TODO: refactor using 'underscore' lib
    for(var i=0; i<products.length; i++){
      if (products[i].id === +id){
        return callback(null, products[i]);
      }
    }
    callback(new Error('NOT_FOUND'));
  };

  self.create = function(newProduct, callback){
    products.push(newProduct);
    callback(null);
  };

  self.update = function(id, newData, callback){
    //TODO: refactor using 'underscore' lib
    for(var i=0; i<products.length; i++){
      if (products[i].id === +id){
        products[i].name = newData.name;
        return callback(null, products[i]);
      }
    }
    callback(new Error('NOT_FOUND'));
  };

  self.delete = function(id, callback){
    //TODO: refactor using 'underscore' lib
    for(var i=0; i<products.length; i++){
      if (products[i].id === +id){
        products.splice(i, 1);
        return callback(null);
      }
    }
    callback(new Error('NOT_FOUND'));
  };
};

module.exports = new ProductsLib();
