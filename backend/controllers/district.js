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

export const getAllProductsByCategory = async (req, res) => {
  const { category } = req.query;

  try {
    const totalData = await districts.find();
    let products = [];

    totalData.forEach(dist => {
      if (dist.products[category]) {
        dist.products[category].forEach(item => {
          products.push(item);
        });
      }
    });

    if (products.length === 0) {
      return res.status(404).json({ message: `No products found for category: ${category}` });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: "Failed to get products data", error: err.message });
  }
};