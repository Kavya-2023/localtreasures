import express from 'express';
import { addAllDistricts,addNewDistrict,deleteAllDistricts,getAllDistricts, getDistrictById,getAllFoods ,getAllArtsAndCrafts, getAllfashionAndApparel, getAllHealthAndWellness} from '../controllers/district.js';
const router= express.Router();

router.post('/addalldistricts',addAllDistricts);
router.post('/addnewdistrict',addNewDistrict);
router.delete('/deletealldistricts',deleteAllDistricts);
router.get('/getalldistricts',getAllDistricts);
router.get('/getdistrictbyid/:id',getDistrictById);
router.get('/getallfoods',getAllFoods);
router.get('/getallartsandcrafts',getAllArtsAndCrafts);
router.get('/getallfashionandapparel',getAllfashionAndApparel);
router.get('/getallhealthandwellness',getAllHealthAndWellness);
router.get('/getallhomedecorandfurnishing',getAllHealthAndWellness);

export default router;