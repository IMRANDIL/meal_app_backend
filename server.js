require('dotenv').config()

const express = require('express');
const cors = require('cors');

const router = require('./Router/router');

const app = express();




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(router)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}😃`);
})