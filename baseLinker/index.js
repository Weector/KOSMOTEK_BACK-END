const { makeBaselinkerRequest } = require("./makeBaselinkerRequest");
const { getFullProductsDataFromBL } = require("./getProductsDataFromBL");
const { createProductsToInsert } = require("./createProductsToInsert");
const {
  getAllGategoriesFromBL,
  getRequiredCategories,
} = require("./getCategoriesListFromBL");
const { createCategoriesToInsert } = require("./createCategoriesToInsert");
const { createBrandsToInsert } = require("./createBrandsToInsert");

module.exports = {
  makeBaselinkerRequest,
  getFullProductsDataFromBL,
  createProductsToInsert,
  getAllGategoriesFromBL,
  getRequiredCategories,
  createCategoriesToInsert,
  createBrandsToInsert,
};
