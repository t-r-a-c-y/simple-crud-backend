const express = require('express');
const app = express();
const Product = require('./models/product.model.js')
const ProductRoutes = require('./routes/product.routes.js')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const mongoose= require('mongoose');
const port =4000;
mongoose.connect("mongodb+srv://tracytesi69:COVafX4wErEbONAc@backenddb.vhvc0im.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("you are connected");
}).catch((err)=>{
    console.log(`the error is ${err}`);
})

app.use("/api/product",ProductRoutes)

// app.get('/',async (req,res)=>{
//     try {
//         const products =await Product.find();
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message:message.error,success:false});        
//     }
// })

// app.post('/api/products',async(req,res)=>{
//     try {
//         const product =await Product.create(req.body);
//         product.save();
//         res.status(200).json({success:true,message:product})
//     } catch (error) {
//         res.status(500).json({message:message.error})        
//     }
// })
// app.get('/api/product/find/:id', async(req,res)=>{
//     try {
//         const {id} = req.params
//         const product = await Product.findById(id);
//         if(!product){
//             res.status(404).json({message:"the product not found"});
//         }
//         res.status(404).json(product)
//     } catch (error) {
//         res.status(500).json({message:message.error})
//     }
// })
// app.put('/api/product/update/:id',async(req,res)=>{
//     try {
//         const {id} =req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message:"Page nor found"});
//         }
//         const updatedProduct = await Product.findById(id)
//         res.status(200).json({updatedProduct})
//     } catch (error) {
//         res.status(500).json({message:message.error})        
//     }
// })
// app.delete('/api/product/delete/:id',async(req,res)=>{
//     try {
//         const {id} = req.params
//         const product = await Product.findByIdAndDelete(id)
//         if(!product){
//         res.status(404).json({message:"There is no product like that"});
//         }
//     res.status(200).json({message:`The prodouct ${id} is delete`})
//     } catch (error) {
//         res.status(500).json({message:message.error})
//     }
// })
app.listen(port,()=>{
    console.log('Server is running at port 4000');
});