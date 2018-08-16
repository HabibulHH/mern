const {mongoose} = require('./mongoconnect');
const User=mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        minlength:2

    },
    age:{
        type:String
    }
});
module.exports={User};