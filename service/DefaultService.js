'use strict';


/**
 * Get a branded food item using a barcode
 * ## Get data for a branded food using the food's UPC/EAN barcode.  **Example**  > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```  **Tips**   * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks. 
 *
 * code String #### UPC/EAN barcode  **Example** > ```&code=0842234000988``` 
 * returns BrandedFoodObject
 **/
exports.foodBrandedBarcode_phpGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
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
 * ## Get data for a branded food using Chomp's internal ID number.  **Example** > ```https://chompthis.com/api/v2/food/branded/id.php?api_key=API_KEY&id=ID```  **Tips**   * Find a food's ID by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.   * Alternatively, set the \"source\" parameter to \"USDA\" and use the food's FDC ID. 
 *
 * id Integer #### The ID number of a branded food item.  **Example #1: Using Chomp ID** > ```&id=15```  **Example #2: Using FDC ID** > ```&id=FDC_ID&source=USDA``` 
 * source String #### Configure the endpoint to accept food IDs from various data sources. This endpoint defaults to Chomp but can accept FDC IDs.  **Example** > ```&source=Chomp```  **Tips**   * Pass in ```&source=USDA``` if you want to look up food items using a USDA FDC ID.  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedId_phpGET = function(id,source) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
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
 * ## Search for branded food items by name.  **Example** > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```  **Tips**   * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
 *
 * name String #### Search for branded food items using a general food name keyword. This does not have to exactly match the \"official\" name for the food.  **Example** > ```&name=Starburst``` 
 * limit Integer #### Set maximum number of records you want the API to return.  **Example** > ```&limit=10```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on.  **Example** > ```&page=1```  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedName_phpGET = function(name,limit,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
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
 * ## Search for branded food items using various parameters.  **Example** > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```  **Tips**    * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
 *
 * allergen String #### Filter the search to only include branded foods that contain a specific allergen.  **Example** > ```&allergen=Peanuts```  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * brand String #### Filter the search to only include branded foods that are owned by a specific brand.  **Example** > ```&brand=Starbucks```  (optional)
 * category String #### Filter the search to only include branded foods from a specific category.  **Example** > ```&category=Plant Based Foods```  (optional)
 * country String #### Filter the search to only include branded foods that are sold in a specific country.  **Example** > ```&country=United States```  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * diet String #### Filter the search to only include branded foods that are considered compatible with a specific diet.  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * ingredient String #### Filter the search to only include branded foods that contain a specific ingredient.  **Example** > ```&ingredient=Salt```  (optional)
 * keyword String #### Filter the search to only include branded foods that are associated with a specific keyword.  **Example** > ```&keyword=Organic```  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * mineral String #### Filter the search to only include branded foods that contain a specific mineral.  **Example** > ```&mineral=Potassium```  (optional)
 * nutrient String #### Filter the search to only include branded foods that contain a specific nutrient.  **Example** > ```&nutrient=Caffeine```  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * palm_oil String #### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.  **Example** > ```&palm_oil=E160a Beta Carotene```  (optional)
 * trace String ### Filter the search to only include branded foods that contain a specific trace ingredient.  **Example** > ```&trace=Tree Nuts```  **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.  (optional)
 * vitamin String #### Filter the search to only include branded foods that contain a specific vitamin.  **Example** > ```&vitamin=Biotin```  (optional)
 * limit Integer #### Set maximum number of records you want the API to return.  **Example** > ```&limit=10```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on.  **Example** > ```&page=1```  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedSearch_phpGET = function(allergen,brand,category,country,diet,ingredient,keyword,mineral,nutrient,palm_oil,trace,vitamin,limit,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "name" : "name",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 6,
      "non_english_speaking" : 1
    },
    "description" : "description",
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "chomp" : {
        "size" : "size"
      },
      "usda" : {
        "size_fulltext" : "size_fulltext",
        "size" : "size",
        "measurement_unit" : "measurement_unit"
      }
    },
    "nutrients" : {
      "chomp" : [ {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      }, {
        "total" : 5.962133916683182,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "per_100g" : 6.027456183070403,
        "per_serving" : 1.4658129805029452
      } ],
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "protein_conversion_factor" : 1.4894159098541704,
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
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "ingredients" : {
      "chomp" : "chomp",
      "usda" : "usda"
    },
    "common_names" : [ "common_names", "common_names" ],
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "traces" : [ "traces", "traces" ],
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 9,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "footnote" : "footnote",
    "allergens" : [ "allergens", "allergens" ],
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
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
 * ## Get data for a specific ingredient or a specific set of ingredients.  **Example #1: Single Ingredient** > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=broccoli&raw=true```  **Example #2: Set of Ingredients** > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=broccoli,cauliflower,spinach&list=true&raw=true```  **Tips**   * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
 *
 * find Integer Search our database for a single ingredient or a specific set of ingredients.  **Example #1: Single Ingredient** > ```&find=broccoli```  **Example #2: Set of Ingredients** > ```&find=broccoli,cauliflower,spinach&list=true```  **Important Notes**    * Set the \"list\" parameter to \"true\" before passing in a comma-separated list of ingredients.   * Comma-separated lists cannot contain more than **15 ingredients**. You must perform additional API calls if you are looking up more than 15 ingredients. 
 * list Boolean #### Setting ```&list=true``` will configure this endpoint to allow searching for ingredients using a comma-separated list. By default, this endpoint will **only** return results for the first ingredient.  **Example** > ```&list=true``` 
 * raw Boolean #### Optionally filter the search result to only include raw ingredients.  **Example** > ```&raw=true```  (optional)
 * limit Integer #### Set maximum number of records you want the API to return, per search term.  **Example** > ```&limit=3```  (optional)
 * returns IngredientObject
 **/
exports.foodIngredientSearch_phpGET = function(find,list,raw,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "protein_conversion_factor" : 0.8008281904610115,
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "common_names" : "common_names",
    "description" : "description",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "nutrients" : {
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ]
  }, {
    "protein_conversion_factor" : 0.8008281904610115,
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 1.0246457001441578,
      "protein_value" : 7.386281948385884,
      "fat_value" : 1.2315135367772556
    },
    "components" : [ {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 9,
      "pct_weight" : 6.683562403749608,
      "gram_weight" : 8.762042012749001,
      "name" : "name",
      "is_refuse" : true
    } ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 4,
        "name" : "name",
        "compatibility_level" : 1,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 7,
        "name" : "name",
        "compatibility_level" : 6,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "common_names" : "common_names",
    "description" : "description",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "nutrients" : {
      "usda" : [ {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      }, {
        "data_points" : 4,
        "min" : 7.061401241503109,
        "median" : 3.616076749251911,
        "max" : 9.301444243932576,
        "name" : "name",
        "measurement_unit" : "measurement_unit",
        "rank" : 2,
        "description" : "description",
        "id" : 5,
        "per_100g" : 2.3021358869347655,
        "footnote" : "footnote"
      } ]
    },
    "portions" : [ {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 3,
      "modifier" : "modifier",
      "gram_weight" : 6.438423552598547,
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

