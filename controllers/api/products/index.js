'use strict';

var productsLib = require('../../../lib/productsLib');
var secureApiLib = require('../../../lib/secureApiLib');

module.exports = function (router) {
  
  router.use('/', secureApiLib.jwtMiddleware);

  router.get('/', function (req, res) {

    productsLib.getAll(function(error, results){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    productsLib.getById(id, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.post('/', function (req, res) {

    var newProduct = req.body;

    productsLib.create(newProduct, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    productsLib.update(id, newData, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    productsLib.delete(id, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(204).end();

    });
  });


};
