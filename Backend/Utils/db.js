const mongoose = require ('mongoose');


const dbCon = async() =>{
    try {
        const con =  await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Database connected ${con.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}

module.exports = dbCon;