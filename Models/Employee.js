const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required"]
    },
    email:{
        type:String,
        required:[true,"Email Address Must Required"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Must Required"]
    },
    project :{
        type:String,
        required:[true,"Project must be Required"]
    }
   
})
const Employee = new mongoose.model("Employee",EmployeeSchema)
module.exports = Employee