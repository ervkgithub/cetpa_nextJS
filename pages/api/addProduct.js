import Products from "../../models/Products";
import connectDb from "../../middleware/mongoose";

//POST Call to fetch some data
// http://localhost:3000/api/addProduct
const handler = async (req, res) => {

    if(req.method == 'POST') {
        console.log(req.body);
        try{
            let temp = new Products({
                // id: req.body.id,
                // title: req.body.title,
                // price: req.body.price,
                // description: req.body.description,
                // category: req.body.category,
                // image: req.body.image
                // id: "125",
                title: "title 4",
                price: 126,
                description: "desc 4",
                category: "cat 4",
                image: "img 4"
            })
    
            const response = await temp.save();
            //const response = await sql.query('INSERT INTO table..');

            res.status(201).json(response);
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
    }
    else {
        res.status(400).json({message: 'Method not alloweed.'})
    }
}

export default connectDb(handler);