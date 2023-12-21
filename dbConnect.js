const mongoose = require("mongoose")





async function getConnect(){
    try{
        mongoose.connect("mongodb+srv://khandanish30599:khan@1234@cluster0.xyeo9sf.mongodb.net/CRUD Application")
        console.log("DataBase is Connected!!!")
    }
    catch(error){
        console.log(error);
    }
}
getConnect()


