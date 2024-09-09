// models/Property.js 

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  labels: [String],
  developer: String,
  categories: [String],
  categories1: [String],
  imageUrl: String,
  name: String,
  by: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
  location: String,
  price: String,
  status: String,
  configuration: String,
  possession: String,
  units: Number,
  land: String,
  residence: String,  // Fixed the typo from 'recidence' to 'residence'
  builtup: String,
  blocks: String,
  floor: String,
  noofunits: Number,
  rera: String,
  point1: String,
  point2: String,
  point3: String,
  point4: String,
  point5: String,
  about: String,
  dis1: String,
  dis2: String,
  dis3: String,
  dis4: String,
  dis5: String,
  dis6: String,
  dis7: String,
  dis8: String,
  dis9: String,
  dis10: String,
  pdf1: String,
  payment: String,
  unitytype: String,
  size: String,
  range: String,
  booking: String,
  token: String,
  pdf2: String,
  plans: String,
  floorImg1: String,
  floorImg2: String,
  floorImg3: String,
  floorImg4: String,
  floorImg5: String,
  floorImg6: String,
  floorImg7: String,
  floorImg8: String,
  floorImg9: String,
  floorImg10: String,
  pdf3: String,
  amenities: String,
  logoText1: String,
  logoText2: String,
  logoText3: String,
  logoText4: String,
  logoText5: String,
  logoText6: String,
  logoText7: String,
  logoText8: String,
  logoText9: String,
  logoText10: String,
  lastImg: String,
  lastText: String,
  icon: [String],
  rera: [String],
});

module.exports = mongoose.model('Property', propertySchema);
