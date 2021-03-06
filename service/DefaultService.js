'use strict';


/**
 * Get a branded food item using a barcode
 * ## Get data for a branded food using the food's UPC/EAN barcode.  **You must have a Food API key to use this endpoint.** Get a [Food API key](https://chompthis.com/api/).  **Example**  > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```  **Tips**   * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.   * Perform a [check-digit](https://en.wikipedia.org/wiki/Check_digit#UPC) on the barcode you are using.   * Use a barcode from our website [ChompThis.com](https://chompthis.com/?r=api). Search for a food and use the barcode shown in the search results.   * It is possible that our database contains the food you're looking for, but does not have the same barcode you are using. This can happen if a manufacturer introduces a variation of the same food, or the barcode you got was from a 2 oz bag of chips when our database has the food packaged in a 4 oz bag.   * [Contact us](https://chompthis.com/contact.php?api=y) if you are having trouble. 
 *
 * code String #### UPC/EAN barcode  **Example** > ```&code=0842234000988``` 
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedBarcode_phpGET = function(code,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
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
 * ## Search for branded food items by name.  **You must have a Food API key to use this endpoint.** Get a [Food API key](https://chompthis.com/api/).  **Example** > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```  **Tips**   * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
 *
 * name String #### Search for branded food items using a general food name keyword. This does not have to exactly match the \"official\" name for the food.  **Example** > ```&name=Starburst``` 
 * limit Integer #### Set maximum number of records you want the API to return. The default value is \"**10**.\"  **Example** > ```&limit=10```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is \"**1**.\"  **Example** > ```&page=1```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedName_phpGET = function(name,limit,page,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
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
 * ## Search for branded food items using various parameters.  **You must have a Food API key to use this endpoint.** Get a [Food API key](https://chompthis.com/api/).  **Example** > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```  **Tips**    * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
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
 * limit Integer #### Set maximum number of records you want the API to return. The default value is \"**10**.\"  **Example** > ```&limit=10```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is \"**1**.\"  **Example** > ```&page=1```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns BrandedFoodObject
 **/
exports.foodBrandedSearch_phpGET = function(allergen,brand,category,country,diet,ingredient,keyword,mineral,nutrient,palm_oil,trace,vitamin,limit,page,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
    "brand_list" : [ "brand_list", "brand_list" ]
  }, {
    "minerals" : [ "minerals", "minerals" ],
    "package" : {
      "quantity" : 0,
      "size" : "size"
    },
    "keywords" : [ "keywords", "keywords" ],
    "country_details" : {
      "english_speaking" : 7,
      "non_english_speaking" : 1
    },
    "traces" : [ "traces", "traces" ],
    "description" : "description",
    "diet_flags" : [ {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    }, {
      "ingredient" : "ingredient",
      "is_allergen" : true,
      "ingredient_description" : "ingredient_description",
      "compatibility_level" : 4,
      "is_compatible" : "is_compatible",
      "diet_label" : "diet_label",
      "compatibility_description" : "compatibility_description"
    } ],
    "countries" : [ "countries", "countries" ],
    "has_english_ingredients" : true,
    "palm_oil_ingredients" : [ "palm_oil_ingredients", "palm_oil_ingredients" ],
    "serving" : {
      "size_fulltext" : "size_fulltext",
      "size" : "size",
      "measurement_unit" : "measurement_unit"
    },
    "nutrients" : [ {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    }, {
      "data_points" : 5,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 1,
      "description" : "description",
      "per_100g" : 6.027456183070403
    } ],
    "allergens" : [ "allergens", "allergens" ],
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
    "ingredient_list" : [ "ingredient_list", "ingredient_list" ],
    "vitamins" : [ "vitamins", "vitamins" ],
    "diet_labels" : {
      "vegetarian" : {
        "confidence_description" : "confidence_description",
        "confidence" : 9,
        "name" : "name",
        "compatibility_level" : 7,
        "is_compatible" : true
      },
      "vegan" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 5,
        "is_compatible" : true
      },
      "gluten_free" : {
        "confidence_description" : "confidence_description",
        "confidence" : 2,
        "name" : "name",
        "compatibility_level" : 3,
        "is_compatible" : true
      }
    },
    "name" : "name",
    "ingredients" : "ingredients",
    "categories" : [ "categories", "categories" ],
    "barcode" : "barcode",
    "brand" : "brand",
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
 * ## Get data for a specific ingredient or a specific set of ingredients.  **You must have a Food API key to use this endpoint.** Get a [Food API key](https://chompthis.com/api/).  **Example #1: Single Ingredient** > ```https://chompthis.com/api/v2/food/ingredient/search.php?api_key=API_KEY&find=raw broccoli```  **Example #2: Set of Ingredients** > ```https://chompthis.com/api/v2/food/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```  **Tips**   * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.  > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription. 
 *
 * find String Search our database for a single ingredient or a specific set of ingredients.  **Example #1: Single Ingredient** > ```&find=raw broccoli```  **Example #2: Set of Ingredients** > ```&find=raw broccoli,buttermilk waffle,mashed potatoes```  **Important Notes**    * Comma-separated lists cannot contain more than **10 ingredients**. You must perform additional API calls if you are looking up more than 10 ingredients. 
 * limit Integer #### Set maximum number of records you want the API to return, per search term. The default value is \"**1**.\"  **Example** > ```&limit=3```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns IngredientObject
 **/
exports.foodIngredientSearch_phpGET = function(find,limit,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "protein_conversion_factor" : 2.027123023002322,
    "score" : "score",
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 3.616076749251911,
      "protein_value" : 7.061401241503109,
      "fat_value" : 9.301444243932576
    },
    "components" : [ {
      "data_points" : 1,
      "pct_weight" : 4.145608029883936,
      "gram_weight" : 7.386281948385884,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 1,
      "pct_weight" : 4.145608029883936,
      "gram_weight" : 7.386281948385884,
      "name" : "name",
      "is_refuse" : true
    } ],
    "name" : "name",
    "search_term" : "search_term",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "common_name" : "common_name",
    "nutrients" : [ {
      "data_points" : 2,
      "min" : 6.027456183070403,
      "median" : 5.962133916683182,
      "max" : 1.4658129805029452,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 5,
      "description" : "description",
      "per_100g" : 0.8008281904610115,
      "footnote" : "footnote"
    }, {
      "data_points" : 2,
      "min" : 6.027456183070403,
      "median" : 5.962133916683182,
      "max" : 1.4658129805029452,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 5,
      "description" : "description",
      "per_100g" : 0.8008281904610115,
      "footnote" : "footnote"
    } ],
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 1.0246457001441578,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 1.0246457001441578,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    } ]
  }, {
    "protein_conversion_factor" : 2.027123023002322,
    "score" : "score",
    "calorie_conversion_factor" : {
      "carbohydrate_value" : 3.616076749251911,
      "protein_value" : 7.061401241503109,
      "fat_value" : 9.301444243932576
    },
    "components" : [ {
      "data_points" : 1,
      "pct_weight" : 4.145608029883936,
      "gram_weight" : 7.386281948385884,
      "name" : "name",
      "is_refuse" : true
    }, {
      "data_points" : 1,
      "pct_weight" : 4.145608029883936,
      "gram_weight" : 7.386281948385884,
      "name" : "name",
      "is_refuse" : true
    } ],
    "name" : "name",
    "search_term" : "search_term",
    "categories" : [ "categories", "categories" ],
    "footnote" : "footnote",
    "common_name" : "common_name",
    "nutrients" : [ {
      "data_points" : 2,
      "min" : 6.027456183070403,
      "median" : 5.962133916683182,
      "max" : 1.4658129805029452,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 5,
      "description" : "description",
      "per_100g" : 0.8008281904610115,
      "footnote" : "footnote"
    }, {
      "data_points" : 2,
      "min" : 6.027456183070403,
      "median" : 5.962133916683182,
      "max" : 1.4658129805029452,
      "name" : "name",
      "measurement_unit" : "measurement_unit",
      "rank" : 5,
      "description" : "description",
      "per_100g" : 0.8008281904610115,
      "footnote" : "footnote"
    } ],
    "portions" : [ {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 1.0246457001441578,
      "measurement_unit" : "measurement_unit",
      "description" : "description",
      "footnote" : "footnote"
    }, {
      "data_points" : 1,
      "modifier" : "modifier",
      "gram_weight" : 1.0246457001441578,
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


/**
 * Get a recipe by ID
 * ## Get a specific recipe using an ID.  **You must have a Recipe API key to use this endpoint.** Get a [Recipe API key](https://chompthis.com/api/recipes/).  **Example** > ```https://chompthis.com/api/v2/recipe/id.php?api_key=API_KEY&id=RECIPE_ID``` 
 *
 * id String #### A recipe ID. Recipe IDs are exposed in the /recipe/search and /recipe/ingredient endpoints.  **Example** > ```&list=tdm_1143_0459d0028fcf8990724785b9e6775037``` 
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns RecipeObject
 **/
exports.recipeId_phpGET = function(id,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
  }, {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
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
 * Get recipes using a list of ingredients
 * ## Get recipes that include all ingredients from a list.  **You must have a Recipe API key to use this endpoint.** Get a [Recipe API key](https://chompthis.com/api/recipes/).  **Example #1** > ```https://chompthis.com/api/v2/recipe/ingredient.php?api_key=API_KEY&list=INGREDIENT```  **Example #2** > ```https://chompthis.com/api/v2/recipe/ingredient.php?api_key=API_KEY&list=INGREDIENT,INGREDIENT,INGREDIENT``` 
 *
 * list String #### A single ingredient, or a comma-separated list of up to 3 ingredients. Recipes with each of these ingredients will be returned. **You can pass in up to 3 ingredients at a time.**  **Example** > ```&list=cheese,tomato,milk``` 
 * limit Integer #### Set maximum number of records you want the API to return. The default value is \"**3**.\"  **Example** > ```&limit=3```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 3 records. You must increment the page number to access the next 3 records, and so on. The default value is \"**1**.\"  **Example** > ```&page=1```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns RecipeObject
 **/
exports.recipeIngredient_phpGET = function(list,limit,page,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
  }, {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
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
 * Get random popular recipes
 * ## Get random recipes that have instructions and nutrients  **You must have a Recipe API key to use this endpoint.** Get a [Recipe API key](https://chompthis.com/api/recipes/).  **Example** > ```https://chompthis.com/api/v2/recipe/random.php?api_key=API_KEY``` 
 *
 * limit Integer #### Set maximum number of records you want the API to return. The default value is \"**5**.\"  **Example** > ```&limit=5```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns RecipeObject
 **/
exports.recipeRandom_phpGET = function(limit,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
  }, {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
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
 * Get recipes using a title and optional filters
 * ## Get recipes using a title and optional filters.  **You must have a Recipe API key to use this endpoint.** Get a [Recipe API key](https://chompthis.com/api/recipes/).  **Example**  > ```https://chompthis.com/api/v2/recipe/search.php?api_key=API_KEY&title=TITLE``` 
 *
 * title String #### A recipe title  **Example** > ```&title=Banana Bread``` 
 * excluded_cuisine String #### A specific cuisine you want excluded from results  **Example** > ```&excluded_cuisine=Italian```  (optional)
 * included_cuisine String #### A specific cuisine you want included in results  **Example** > ```&included_cuisine=Chinese```  (optional)
 * excluded_ingredient String #### Recipes with this ingredient will be excluded from results  **Example** > ```&excluded_ingredient=egg```  (optional)
 * included_ingredient String #### Only recipes with this ingredient will be returned  **Example** > ```&included_ingredient=apple```  (optional)
 * nutrients_required Integer #### Optionally require all recipes to include nutrition info. Recipes with, or without, nutrition info are returned by default.  **Example** > ```&nutrients_required=1```  (optional)
 * limit Integer #### Set maximum number of records you want the API to return. The default value is \"**5**.\"  **Example** > ```&limit=3```  (optional)
 * page Integer #### This is how you paginate the search result. By default, you will see the first 5 records. You must increment the page number to access the next 5 records, and so on. The default value is \"**1**.\"  **Example** > ```&page=1```  (optional)
 * user_id String #### **Only required for Premium subscribers.** The unique identifier assigned to each user on your platform. This can be any string of letters or numbers and doesn't have to relate to your own database. [Learn more](https://desk.zoho.com/portal/chompthis/en/kb/articles/monthly-active-users)  **Example** > ```&user_id=fehef8w4ha```  (optional)
 * returns RecipeObject
 **/
exports.recipeSearch_phpGET = function(title,excluded_cuisine,included_cuisine,excluded_ingredient,included_ingredient,nutrients_required,limit,page,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
  }, {
    "base_ingredients" : [ "base_ingredients", "base_ingredients" ],
    "diabetic_exchanges" : [ "diabetic_exchanges", "diabetic_exchanges" ],
    "keywords" : [ "keywords", "keywords" ],
    "meta" : {
      "images" : {
        "standard" : "standard",
        "small" : "small",
        "thumbnail" : "thumbnail",
        "extra_large" : "extra_large",
        "large" : "large",
        "extra_small" : "extra_small",
        "grid_view" : "grid_view"
      },
      "created" : "created",
      "cuisine" : "cuisine",
      "modified" : "modified",
      "source" : "source",
      "url" : "url",
      "nutrients_notice" : "nutrients_notice"
    },
    "author" : "author",
    "topics" : [ "topics", "topics" ],
    "ingredients" : [ {
      "quantity" : "quantity",
      "description" : "description"
    }, {
      "quantity" : "quantity",
      "description" : "description"
    } ],
    "attributes" : {
      "servings" : "servings",
      "prep_time" : "prep_time",
      "serving_size" : "serving_size",
      "total_time" : "total_time"
    },
    "id" : "id",
    "categories" : [ "categories", "categories" ],
    "title" : "title",
    "nutrients" : {
      "vitamins" : [ null, null ],
      "carbs" : [ null, null ],
      "daily_values" : [ null, null ],
      "fat" : [ null, null ],
      "calories" : [ {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      }, {
        "title" : "title",
        "value" : "value",
        "percent" : "percent"
      } ]
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

