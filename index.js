// for config file and import product file
const express=require('express');
// const config=require('./config')
require('./config')//no need const
const Product=require('./product')//import product 
const app=express();

app.use(express.json());//ye request ke under data ko convert kr dega.

//use for post()
app.post('/create',async(req,resp)=>{
    let data= new Product(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result)
})

//*********get api****** */for all data get
app.get('/list',async (req,resp)=>{
    let data=await Product.find();//no need to pass schema but kr bhi sakte h.
    resp.send(data);
})
 /*************delete api************ */
// we are delete ur own choice like id,name ke based kr sakte h
app.delete('/delete/:_id',async(req,resp)=>{
    console.log(req.params);
    let data =await Product.deleteOne(req.params)
    resp.send(data);
})

/******************put api******** */
// we are update data ur own choice like id,name ke based kr sakte h
app.put('/update/:_id',async(req,resp)=>{
    console.log(req.params);
    let data =await Product.updateOne(
        req.params,//for dynamic data 
        /**for static data->*///{name:"max pro"} ,//1st for condn.
        {
            $set:req.body///update dynamic //static for{$set:{name:"S40",price:3000}}
            }
        )
    resp.send(data);
})


app.listen(5000)