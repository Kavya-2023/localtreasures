// routes/countryRoutes.js
import express from 'express';
import {
  addCountryData,
  addDistrictToState,
  addCountry,
  getProductsByState,
  getAllProductsByCategory,
  getAllProductsByDistrict,
  getProductById,
  getAllProductsByCategoryAndDistrict,
  getNearestProducts
} from '../controllers/country.js';


const router = express.Router();

router.post('/addCountryData', addCountryData);
router.post('/countries/:stateId/districts', addDistrictToState);
router.post('/addcountry', addCountry);
router.get('/products', getProductsByState); 
router.get('/productsbycategory', getAllProductsByCategory);
router.get('/productsbydistrict', getAllProductsByDistrict);
router.get('/products/:productId', getProductById);
router.get('/productsbydistrictandcategory',getAllProductsByCategoryAndDistrict)
router.get('/getnearestproducts',getNearestProducts)
export default router;
