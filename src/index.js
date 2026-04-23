
const app = require("./app");
const connectDB = require("./config/db");


//connect to mongoDb

function StartServer(){
    connectDB();

app.listen(3000,()=>{
    console.log("Server has been started");
})

}

StartServer();