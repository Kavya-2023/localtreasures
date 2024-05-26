import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  cost: String,
  url: String,
  quantity: String,
  location: {
    lat: Number,
    long: Number,
  },
  address: String,
  sellers: [sellerSchema],
});

const districtSchema = new mongoose.Schema({
  id: Number,
  name: String,
  products: {
    foods: [productSchema],
    artsAndCrafts: [productSchema],
    fashionAndApparel: [productSchema],
    healthAndWellness: [productSchema],
    homeDecorAndFurnishing: [productSchema],
  },
});

const District = mongoose.model('District', districtSchema);

export default District;
