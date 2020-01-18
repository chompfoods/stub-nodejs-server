'use strict';


/**
 * Get a branded food item using a barcode
 * # Get data for a branded food using the food's UPC/EAN barcode.  __Example:__ ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE``` 
 *
 * code String UPC/EAN barcode  __Example:__ 0842234000988  __Resources:__ [Database search](https://chompthis.com/api/lookup.php)  _Read [this article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do) for tips and tricks._ 
 * returns BrandedFoodObject
 **/
exports.foodBrandedBarcode_phpGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a branded food item using an ID number
 * # Get data for a branded food using Chomp's internal ID number.  _Alternatively, set the \"source\" parameter to \"USDA\" and use the food's FDC ID._  __Example:__ ```https://chompthis.com/api/v2/food/branded/id.php?api_key=API_KEY&id=ID``` 
 *
 * id Integer Chomp branded food ID.  _Set \"source=USDA\" if you wish to pass in the food's FoodData Central ID (fdc_id)._  __Example #1:__ 15  __Resources:__ [Find branded food IDs](https://chompthis.com/api/lookup.php) 
 * source String Specify the data source (optional).  You must pass in \"USDA\" if you want to look up a food item using a USDA FDC ID.  __Example:__ USDA _(defaults to \"Chomp\")_  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedId_phpGET = function(id,source) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a branded food item by name
 * # Search for branded food items by name.  __Example:__ ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME``` 
 *
 * name String Branded food name  __Example:__ Starburst  __Resources:__ [Find branded food names](https://chompthis.com/api/lookup.php) 
 * limit Integer Set maximum number of records you want the API to return.  ___Note:__ The maximum value is 10._  __Example:__ 3 _(defaults to 10)_  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedName_phpGET = function(name,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get data for branded food items using various search parameters
 * # Search for branded food items using various parameters.  __Example:__ ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```  ___Tip:__ Get started by using the [Query Builder](https://chompthis.com/api/build.php)._ 
 *
 * allergen String Specify a required allergen ingredient (optional)  __Example__: Peanuts  __Resources__: [List of allergens](https://chompthis.com/api/data/allergen.php)  (optional)
 * brand String Specify a required brand (optional)  __Example__: Starbucks  __Resources__: [List of brands](https://chompthis.com/api/data/brand.php)  (optional)
 * category String Specify a required category (optional)  __Example__: Pasta Dishes  __Resources__: [List of categories](https://chompthis.com/api/data/category.php)  (optional)
 * country String Specify a required country (optional)  __Example__: United States  __Resources__: [List of countries](https://chompthis.com/api/data/country.php)  (optional)
 * diet String Specify a required diet (optional)  _Filters the search to only include food items that are considered compatible with the following diets: Vegan, Vegetarian, Gluten Free_  __Example__: Gluten Free  __Resources__: [List of diets](https://chompthis.com/api/data/lifestyle.php)  (optional)
 * ingredient String Specify a required ingredient (optional)  __Example__: Salt  __Resources__: [List of ingredients](https://chompthis.com/api/data/ingredient.php)  (optional)
 * keyword String Specify a required keyword (optional)  __Example__: Starbucks  __Resources__: [List of brands](https://chompthis.com/api/data/brand.php)  (optional)
 * mineral String Specify a required mineral (optional)  __Example__: Potassium  __Resources__: [List of minerals](https://chompthis.com/api/data/mineral.php)  (optional)
 * nutrient String Specify a required nutrition label item (optional)  __Example__: Caffeine  __Resources__: [List of nutrition label items](https://chompthis.com/api/data/nutrition.php)  (optional)
 * palm_oil String Specify a required palm oil ingredient (optional)  __Example__: E160a Beta Carotene  __Resources__: [List of palm oil ingredients](https://chompthis.com/api/data/palm-oil.php)  (optional)
 * trace String Specify a required trace ingredient (optional)  __Example__: Tree Nuts  __Resources__: [List of trace ingredients](https://chompthis.com/api/data/trace.php)  (optional)
 * vitamin String Specify a required vitamin (optional)  __Example__: Biotin  __Resources__: [List of vitamins](https://chompthis.com/api/data/vitamin.php)  (optional)
 * limit Integer Set maximum number of records you want the API to return.  ___Note:__ The maximum value is 10._  __Example:__ 3 _(defaults to 10)_  (optional)
 * page Integer Specify the search response page number.  _Each page will contain up to 10 items._  __Example__: 1 _(default)_  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedSearch_phpGET = function(allergen,brand,category,country,diet,ingredient,keyword,mineral,nutrient,palm_oil,trace,vitamin,limit,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 2,
      "non_english_speaking" : 6
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "total" : 5,
      "size_fulltext" : "size_fulltext",
      "size" : 1,
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      }, {
        "total" : 7.061401241503109,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 5.637376656633329,
        "per_serving" : 2.3021358869347655
      } ],
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "protein_conversion_factor" : 7.457744773683766,
    "packaging_photos" : {
      "nutrition" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "ingredients" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      },
      "front" : {
        "small" : "small",
        "thumb" : "thumb",
        "display" : "display"
      }
    },
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "common_name" : "common_name",
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : 6
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 8,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get raw/generic food ingredient item(s)
 * # Get data for a specific ingredient or a specific set of ingredients.  __Example:__ ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=STRING/LIST&list=BOOLEAN&raw=BOOLEAN``` 
 *
 * find Integer Specify the ingredient name(s).  __Example #1:__ broccoli  __Example #2:__ broccoli,cauliflower,spinach  ___Important Note:__ Set the \"is_list\" parameter to true before passing in a comma-separated list of ingredients._ 
 * list Boolean Specify if you are searching for multiple ingredients.  _Setting this to true will configure this endpoint so that it accepts a comma-separated list of ingredients._  _By default, this endpoint expects a single ingredient._  __Example:__ true _(defaults to false)_ 
 * raw Boolean Specify if you only want data for raw ingredients.  __Example:__ true _(defaults to true)_  (optional)
 * limit Integer Set maximum number of records you want the API to return.  ___Important Note:__ Setting this to \"1\" will return 1 record per search term._  __Example:__ 1 _(defaults to 1, max is 3)_  (optional)
 * returns IngredientObject
 **/
exports.ingredientSearch_phpGET = function(find,list,raw,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "protein_conversion_factor" : 0.8008281904610115,
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "description" : "description",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "common_name" : "common_name",
    "nutrients" : {
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ]
  }, {
    "protein_conversion_factor" : 0.8008281904610115,
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 6.84685269835264,
      "protein_value" : 1.0246457001441578,
      "fat_value" : 1.4894159098541704
    },
    "components" : [ {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 3,
      "pct_weight" : 9.018348186070783,
      "gram_weight" : 6.438423552598547,
      "name" : "name",
      "is_refuse" : true
    } ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 6,
        "name" : "name",
        "compatibility_level" : 9,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "description" : "description",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "common_name" : "common_name",
    "nutrients" : {
      "usda" : [ {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      }, {
        "data_points" : 1,
        "min" : 2.027123023002322,
        "median" : 7.386281948385884,
        "max" : 4.145608029883936,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "description" : "description",
        "id" : 9,
        "per_100g" : 3.616076749251911,
        "footnote" : "footnote",
        "source" : "source"
      } ]
    },
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 6.965117697638846,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

