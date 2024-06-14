import express from 'express';
import { addAllDistricts,addNewDistrict,deleteAllDistricts,getAllDistricts, getDistrictById,getAllProductsByCategory} from '../controllers/district.js';
const router= express.Router();

router.post('/addalldistricts',addAllDistricts);
router.post('/addnewdistrict',addNewDistrict);
router.delete('/deletealldistricts',deleteAllDistricts);
router.get('/getalldistricts',getAllDistricts);
router.get('/getdistrictbyid/:id',getDistrictById);
router.get('/getproductsby',getAllProductsByCategory);

export default router;