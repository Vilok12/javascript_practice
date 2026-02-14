import exp from'express'
import { ProductModel } from '../models/productmodel.js'
import { model } from 'mongoose'
import { hash } from 'bcryptjs'
export const ProductApp=exp.Router()

// add products
ProductApp.post('/product',async(req,res)=>{
    let newproduct=req.body
    let newproductdoc=await new ProductModel(newproduct)
    console.log(newproductdoc)
    newproductdoc.save()
    res.status(200).json({message:"user created",payload:newproductdoc})

})

// get all products
ProductApp.get('/product',async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({message:"products are :",payload:products})
})