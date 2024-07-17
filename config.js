import mongoose from 'mongoose';

export const connect = async()=>{
    await mongoose.connect("mongodb+srv://ayushjaiswal312:dn48H6iMWWwjRyRt@cluster0.9xasrmo.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db is connected");
}
