import express from "express";
import dotenv from 'dotenv';

//load variables
dotenv.config();

//start server
const app = express();

app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3000

//home route 
app.get('/' , (req,res) => {
    res.sendFile('index.html' , {root : "public"});
});

app.get('/redirectToCheckout', (req, res) => {
    res.redirect('/Checkout.html');
  });





app.listen(PORT , () => {
    console.log(`Server started on port : ${PORT}`);
})