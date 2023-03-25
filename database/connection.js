const { query } = require('express')
const {MongoClient}=require('mongodb')

const url ="mongodb://127.0.0.1:27017"

const client=new MongoClient(url)

const insertToDB= async (data)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.insertOne(data)
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}

const findallInDB= async (data)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.find({query}).toArray()
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}
const findInDB= async (data)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.find({query}).toArray()
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}
const findexpInDB= async (data)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.find({query}).toArray()
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}
const findgradandexpInDB= async (data)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.find({query}).toArray()
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}
const UpdateInDB= async (filter,value)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.updateOne(filter,value)
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}

const DeleteInDB= async (filter)=>{
    try {
        const database=client.db('Human_resource')
   const collection= database.collection("Empolyees")
   await client.connect()
   const dbres=await collection.deleteOne(filter)
   await client.close()
   return dbres

    } catch (error) {
       return error.message ;
    }
    
}





module.exports={
    insertToDB, findInDB, findallInDB,findexpInDB,findgradandexpInDB, UpdateInDB,DeleteInDB,
}