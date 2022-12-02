import Users from "../../../models/Users";
import connectDb from "../../../middleware/mongoose";
import Table from 'react-bootstrap/Table';

const handler = async(req, res) =>{
    try{
        let data = await Users.find({});
        res.status(200).json(data);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

export default connectDb(handler);