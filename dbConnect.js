const mongoose = require("mongoose")





async function getConnect(){
    try{
        mongoose.connect("mongodb+srv://khandanish:khan1234@cluster0.vdwsofb.mongodb.net/crud")
        console.log("DataBase is Connected!!!")
    }
    catch(error){
        console.log(error);
    }
}
getConnect()


