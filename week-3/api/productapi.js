import exp from'express'
import { productmodel } from '../modules/productmodule.js'
import { model } from 'mongoose'
import { hash } from 'bcryptjs'
export const productapp=exp.Router()

// add products
productapp.post('/product',async(req,res)=>{
    let newproduct=req.body
    let newproductdoc=new productmodel(newproduct)
console.log(newproductdoc)
    newproductdoc.save()
    res.status(200).json({message:"user created",payload:newproductdoc})

})