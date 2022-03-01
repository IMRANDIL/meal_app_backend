require('dotenv').config()

const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}😃`);
})