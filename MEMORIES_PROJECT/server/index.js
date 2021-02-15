import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts', postRoutes);
 
app.use(bodyParser.json({limit: "30mb", entended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", entended: true}))
app.use(cors());

//mongodb
const CONNECTION_URL = 'mongodb+srv://teambird:teambird@cluster0.wv4az.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParse: true, useUnifiedTopology: true})
        .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) =>console.log(error.message));
mongoose.set('useFindAndModify', false);