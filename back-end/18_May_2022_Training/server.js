const express = require('express')
const cors = require('cors')
const axios = require('axios').default;
const app = express()  // Starting the application..
app.use(express.json())


app.use(cors())

const mongoose = require('mongoose');


//Creating Product Schema.
const {Schema} = mongoose;
const ProductSchema = new Schema({
    title: String,
    price: Number
})

const Product = mongoose.model('Product', ProductSchema);



// MongoDB Connection
const connectDB = async ()=> {
    const conn = await mongoose.connect('mongodb://localhost:27017/productDB',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Your Express Application is connected to Mongo Server!')
}

connectDB();

app.set('views', './views')
app.set('view engine', 'pug')


// Creating Rest Api's
app.post('/product', async (req, res)=>{
    const product = await Product.create(req.body);
    res.json(product);
    
})

app.get('/product', async (req, res)=>{
    const products = await Product.find();
    res.render('product', { products: products})
})


app.get('/comments', async(req, res)=> {
    // not access db, rather use fetch to get data
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    // const body = await response.json();
    console.log(response.data)
    res.json(response.data);
    // res.render('comments', { comments: response.data})
})
// app.get('/product', async (req, res)=>{
//     const products = await Product.find();
//     res.json(products)
// })



// Starting the server.
app.listen(5000, console.log('Server is listening on port 5000'))