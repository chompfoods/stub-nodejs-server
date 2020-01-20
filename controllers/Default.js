'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.foodBrandedBarcode_phpGET = function foodBrandedBarcode_phpGET (req, res, next) {
  var code = req.swagger.params['code'].value;
  Default.foodBrandedBarcode_phpGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodBrandedId_phpGET = function foodBrandedId_phpGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var source = req.swagger.params['source'].value;
  Default.foodBrandedId_phpGET(id,source)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodBrandedName_phpGET = function foodBrandedName_phpGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  var limit = req.swagger.params['limit'].value;
  Default.foodBrandedName_phpGET(name,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodBrandedSearch_phpGET = function foodBrandedSearch_phpGET (req, res, next) {
  var allergen = req.swagger.params['allergen'].value;
  var brand = req.swagger.params['brand'].value;
  var category = req.swagger.params['category'].value;
  var country = req.swagger.params['country'].value;
  var diet = req.swagger.params['diet'].value;
  var ingredient = req.swagger.params['ingredient'].value;
  var keyword = req.swagger.params['keyword'].value;
  var mineral = req.swagger.params['mineral'].value;
  var nutrient = req.swagger.params['nutrient'].value;
  var palm_oil = req.swagger.params['palm_oil'].value;
  var trace = req.swagger.params['trace'].value;
  var vitamin = req.swagger.params['vitamin'].value;
  var limit = req.swagger.params['limit'].value;
  var page = req.swagger.params['page'].value;
  Default.foodBrandedSearch_phpGET(allergen,brand,category,country,diet,ingredient,keyword,mineral,nutrient,palm_oil,trace,vitamin,limit,page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodIngredientSearch_phpGET = function foodIngredientSearch_phpGET (req, res, next) {
  var find = req.swagger.params['find'].value;
  var list = req.swagger.params['list'].value;
  var raw = req.swagger.params['raw'].value;
  var limit = req.swagger.params['limit'].value;
  Default.foodIngredientSearch_phpGET(find,list,raw,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
