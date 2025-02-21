import mongoose from "mongoose";
const DBconnection = () => {
    mongoose.connect(process.env.DB_URI, {
        serverSelectionTimeoutMS: 5000
    }).then(res => {
        console.log(`DB connected successfully`);
    }).catch(err => {
        console.log(`Fail to connect to DB server`);
    })
}

export default DBconnection