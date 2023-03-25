const mongoClient=require('../database/connection')
const empEnroll =async  (req,res)=>{
    const empdata=req.body
    try {
       const result =await mongoClient.insertToDB(empdata);
       console.log( result); 
       return res.status(200).send(result)
    } catch (error) {
        
     console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
    
}

const getallempdata=async (req,res)=>{
    const query=req.body
    console.log(query);
    
   
    try{
        const result =await mongoClient.findallInDB(query);
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }


    const getempdataofsalary=async (req,res)=>{
    const query={salary:{$gt:"30000"}};
    
    console.log(query);
    try{
        const result =await mongoClient.findInDB(query)
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }


 const getempdatofexp=async (req,res)=>{
    const query={overallExp:{$gte:"2"}};
    
    console.log(query);
    try{
        const result =await mongoClient.findexpInDB(query)
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }
 const getempdataofexpandgrad=async (req,res)=>{
    const query={"overallExp":{'$gt':"1"},"yearGrad":{'$gt':"2015"}};
    
    console.log(query);
    try{
        const result =await mongoClient.findgradandexpInDB(query)
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }
 const Updateofempdatasalary=async (req,res)=>{
    const query=({"salary":"30000"},{'$set':{"salary":"35000"}});
    
    console.log(query);
    try{
        const result =await mongoClient.UpdateInDB(query)
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }
 const Deleteindb=async (req,res)=>{
    const query=({"lastCompany":"Y"});
    
    console.log(query);
    try{
        const result =await mongoClient.DeleteInDB(query)
        console.log("THE result is =>",result);
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something gone wrong in your operation"); 
     return res.status(500).send("something gone wrong in your operation")  
    }
 }

module.exports={
    empEnroll,  getallempdata,getempdataofsalary,getempdataofexpandgrad,getempdatofexp,Updateofempdatasalary,Deleteindb,
}