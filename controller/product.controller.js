const Product = require('../models/product.model')
const getProducts= async (req,res)=>{
    try {
        const products =await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:message.error,success:false});        
    }
}

const getProduct =async(req,res)=>{
    try {
        const product =await Product.create(req.body);
        product.save();
        res.status(200).json({success:true,message:product})
    } catch (error) {
        res.status(500).json({message:message.error})        
    }
}
const createProduct =async(req,res)=>{
    try {
        const product =await Product.create(req.body);
        product.save();
        res.status(200).json({success:true,message:product})
    } catch (error) {
        res.status(500).json({message:message.error})        
    }
}
const updateProducts =async(req,res)=>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Page nor found"});
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({updatedProduct})
    } catch (error) {
        res.status(500).json({message:message.error})        
    }
}
const deleteProduct =async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
        res.status(404).json({message:"There is no product like that"});
        }
    res.status(200).json({message:`The prodouct ${id} is delete`})
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}
module.exports = {
    getProducts,getProduct,createProduct,updateProducts,deleteProduct
}