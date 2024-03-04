import express,{Request,Response} from 'express';
import  cors from "cors";
import "dotenv/config"
import mongoose from 'mongoose';

const app = express();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() =>console.log('connection established successfully with mongodb'));
    
app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.send("hello world!");
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})




































