import districts from '../models/district.js';
export const addAllDistricts=async( req,res)=>{
    const data=req.body;
    try{
        const totalData=await districts.insertMany(data);
        res.status(201).json(totalData);
    }
    catch(err){
        res.status(400).json("Data Not Added");
    }
}

export const deleteAllDistricts=async(req,res)=>{
    try{
        await districts.deleteMany({})
        res.status(201).json("Deleted");
    }
    catch(err){
        res.status(400).json("Data not deleted");
    }
}
export const addNewDistrict=async(req,res)=>{
    const data=req.body;
    try{
        const reponse=await districts.find()
        const updated=[...reponse, ...data];
        await districts.deleteMany({})
        await districts.insertMany(updated);
        res.status(201),json("data is updated");
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const getAllDistricts=async(req,res)=>{
    try{
        const data=await districts.find()
        res.status(201).json(data);
    }
    catch(err){
        res.status(400).json(err);
    }
}

export const getDistrictById = async (req, res) => {
    const districtId = req.params.id;
    try {
        const district = await districts.findById(districtId);

        if (!district) {
            return res.status(404).json({ message: 'District not found' });
        }
        res.status(200).json(district);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllFoods=async(req,res)=>{
    try{
        const totalData=await districts.find();
        const foodData=[];
        totalData.forEach(dist=>{
            dist.products.foods.forEach(item=>{
                foodData.push(item);
            });
        });
        res.status(201).json(foodData);
    }
    catch(err){
        res.status(400).json("failed to get foods data");
    }
}

export const getAllArtsAndCrafts=async(req,res)=>{
    try{
        const totalData=await districts.find();
        const artsandcraftsData=[];
        totalData.forEach(dist=>{
            dist.products.artsAndCrafts.forEach(item=>{
                artsandcraftsData.push(item);
            });
        });
        res.status(201).json(artsandcraftsData);
    }
    catch(err){
        res.status(400).json("failed to get foods data");
    }
}

export const getAllfashionAndApparel=async(req,res)=>{
    try{
        const totalData=await districts.find();
        const Data=[];
        totalData.forEach(dist=>{
            dist.products.fashionAndApparel.forEach(item=>{
                Data.push(item);
            });
        });
        res.status(201).json(Data);
    }
    catch(err){
        res.status(400).json("failed to get foods data");
    }
}

export const getAllHealthAndWellness=async(req,res)=>{
    try{
        const totalData=await districts.find();
        const Data=[];
        totalData.forEach(dist=>{
            dist.products.healthAndWellness.forEach(item=>{
                Data.push(item);
            });
        });
        res.status(201).json(Data);
    }
    catch(err){
        res.status(400).json("failed to get foods data");
    }
}

export const getAllHomeDecorAndFurnishing=async(req,res)=>{
    try{
        const totalData=await districts.find();
        const Data=[];
        totalData.forEach(dist=>{
            dist.products.homeDecorAndFurnishing.forEach(item=>{
                Data.push(item);
            });
        });
        res.status(201).json(Data);
    }
    catch(err){
        res.status(400).json("failed to get foods data");
    }
}