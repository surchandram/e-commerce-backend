import mongoose from "mongoose";
const dbConnect = async ()=>{
    try{
        mongoose.set('strictQuery',false);
        const connected = mongoose.connect('mongodb+srv://sur:FMb2UlTPsA2uBxyp@nodejs-ecommerce-api.3thbrki.mongodb.net/e-commerce-api?retryWrites=true&w=majority&appName=nodejs-ecommerce-api');
        console.log(`Mongodb connected ${(await connected).connection.host}`);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;

//FMb2UlTPsA2uBxyp