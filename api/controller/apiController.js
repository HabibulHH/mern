
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true });

module.exports=function(app){

    app.post('/api/savedata/',(req,res)=>{
        console.log(req.body);
        var User=mongoose.model('Users',{
            name:{
                type:String,
                required:true,
                minlength:2

            },
            age:{
                type:String
            }
        });
        const user = new User({
            name:req.body.firstName,
            age:req.body.lastName
        })
        user.save().then((result)=>{
            res.send({status:200});
        },(error)=>{
            res.status(404).send(error);
        })
    })
    app.get('/api/getusers',(req,res)=>{

        res.json({name:"hira",age:23});
    })
}