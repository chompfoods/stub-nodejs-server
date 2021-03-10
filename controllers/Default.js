'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.foodBrandedBarcode_phpGET = function foodBrandedBarcode_phpGET (req, res, next, code, user_id) {
  Default.foodBrandedBarcode_phpGET(code, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodBrandedName_phpGET = function foodBrandedName_phpGET (req, res, next, name, limit, page, user_id) {
  Default.foodBrandedName_phpGET(name, limit, page, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodBrandedSearch_phpGET = function foodBrandedSearch_phpGET (req, res, next, allergen, brand, category, country, diet, ingredient, keyword, mineral, nutrient, palm_oil, trace, vitamin, limit, page, user_id) {
  Default.foodBrandedSearch_phpGET(allergen, brand, category, country, diet, ingredient, keyword, mineral, nutrient, palm_oil, trace, vitamin, limit, page, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodIngredientSearch_phpGET = function foodIngredientSearch_phpGET (req, res, next, find, limit, user_id) {
  Default.foodIngredientSearch_phpGET(find, limit, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeId_phpGET = function recipeId_phpGET (req, res, next, id, user_id) {
  Default.recipeId_phpGET(id, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeIngredient_phpGET = function recipeIngredient_phpGET (req, res, next, list, limit, page, user_id) {
  Default.recipeIngredient_phpGET(list, limit, page, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeRandom_phpGET = function recipeRandom_phpGET (req, res, next, limit, user_id) {
  Default.recipeRandom_phpGET(limit, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeSearch_phpGET = function recipeSearch_phpGET (req, res, next, title, excluded_cuisine, included_cuisine, excluded_ingredient, included_ingredient, nutrients_required, limit, page, user_id) {
  Default.recipeSearch_phpGET(title, excluded_cuisine, included_cuisine, excluded_ingredient, included_ingredient, nutrients_required, limit, page, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
