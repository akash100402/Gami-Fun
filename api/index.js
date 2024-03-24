import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()



mongoose.connect(
  process.env.MONGO_URI
).then(() => {
    console.log('MongoDB is connected');
}).catch(err => {
    console.log(err);
});

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
})