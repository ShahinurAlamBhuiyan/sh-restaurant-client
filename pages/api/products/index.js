import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    // Get method to receive all data from the db
    if(method === "GET"){
        try{
            const allProducts = await Product.find();
            res.status(200).json(allProducts);
        }catch(err){
            res.status(500).json(err);
        }
    }

    // Post method to send all data to the database
    if(method === "POST"){
        try{
            const product = await Product.create(req.body);
            res.status(201).json(product);
        }catch(err){
            res.status(500).json(err);
        }
    }
  }