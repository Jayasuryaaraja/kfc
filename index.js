const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello sachi");
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jayasuryaaraja:surya1133@cluster0.nswhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const PrductCollection = client.db("kfcDB").collection("internationalburger");

    app.post("/product",async (req,res) =>{
        const data = req.body;
        const result = await PrductCollection.insertOne(data);
        res.send(result);
    });

    app.get("/allproduct",async (req,res) => {
        const internationlburger = PrductCollection.find();
        const result = await internationlburger.toArray();
        res.send(result);
    });
    app.get("/product/:id",async(req,res) =>{
        const id = req.params.id;
        const filter = {_id: new Object(id) };
        const result = await PrductCollection.findOne(filter);
        res.send(result);
    });
    app.patch("/product/:id",async (req,res)=> {
        const id = req.params.id;
        const update  = req.body;
        const filter = {_id: new Object(id) };
        const updateDoc = {$set: { ...update } };
        const option = {upsert: true };
        const result = await PrductCollection.updateOneOne(
          filter,
          updateDoc,
          option
    );
        res.send(result);
    });
    app.delete("/product/:id",async (req,res) =>{
        const id = req.params.id;
        const filter = {_id: new Object(id) };
        const result = await PrductCollection.deleteOne(filter);
        res 
        .status(200)
        .json({ success: true,message: "data deleted sucessfully",result });
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log(`connected to mongodb running on: ${port}`);
});