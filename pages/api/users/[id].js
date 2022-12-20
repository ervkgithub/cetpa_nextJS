import Users from "../../../models/Users";
import connectDb from "../../../middleware/mongoose";

const handler = async(req, res) => {
    if(req.method == 'DELETE') {
        try{
           await Users.findOneAndDelete({_id:req.query.id});
           res.send("User Deleted");
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
    }
    if(req.method == 'PUT') {
        try{
           const user = await Users.findOne({_id:req.query.id});
           user.userid = req.body.userid,
           user.name = req.body.name,
           user.username = req.body.username,
           user.email = req.body.email,
           user.mobile = req.body.mobile,
           user.password = req.body.password
           await user.save();
           res.send("User Updated");
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
    }
}

export default connectDb(handler);