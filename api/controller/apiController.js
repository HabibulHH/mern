
const {mongoose} = require('../DB/mongoconnect');
var  {User} = require('../DB/usermodel');
module.exports=function(app){

    app.post('/api/savedata/',(req,res)=>{
        console.log(req.body);
        
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
    app.get('/api/getAllUsers',(req,res)=>{

        User.find().then((result)=>{
            res.send({status:200,data:result});
        },(error)=>{
            res.status(404).send(error);
        });
    })
}