const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION_STRING 
mongoose.connect(connectionString).then((res)=>{
    console.log("style Guru Server successfully  connected with monogoBD Atlas");
}).catch((reason)=>{
    console.log("MongoDB Connection failed");
    console.log(reason);
})