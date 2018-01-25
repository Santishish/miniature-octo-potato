import express from 'express'
import path from 'path';
import mongoose from 'mongoose';
import Promise from "bluebird";
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => {
    console.log(`Servidor express corriendo en el puerto ${port}: \x1b[32m%s\x1b[0m`, 'online');
});
