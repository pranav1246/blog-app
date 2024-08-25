import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

import router from "./routes/router.js";
import Connection from "./database/db.js";

dotenv.config();
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', router);
if(process.env.NODE_ENV ==='production'){
    app.use(express.static("front-end/build"))
}

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.listen(PORT, () => console.log('server running on port', PORT));
const URL=process.env.MONGODB_URI ||`mongodb+srv://${username}:${password}@cluster0.xvgosz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
Connection(URL);
