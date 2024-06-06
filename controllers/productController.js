// const products = require('../models/productModel')


// exports.getAllProductController =async (req,res)=>{
//     try{
//         const result = await products.find()
//         res.status(200).json(result)
//     }catch(err){
//         res.status(401).json(err)
//     }
// }


const products = require('../models/productModel');

exports.getAllProductController = async (req, res) => {
  try {
    const result = await products.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json(err);
  }
};


exports.getAproduct = async (req,res)=>{
    const {id} = req.params
    try{
        const item = await products.findOne({id})
        res.status(200).json(item)
    }catch(err){
        res.status(401).json(err)
    }
}
