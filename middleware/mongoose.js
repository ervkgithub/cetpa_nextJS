import mongoose from "mongoose";

const connectDb = handler => async(req, res) => {
    if(mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect('mongodb+srv://w3sweb:bzYIvEWShQ829LVh@cluster0.lzsdt7s.mongodb.net/ecommerce?retryWrites=true&w=majority')
    return handler(req, res);
}

export default connectDb;



