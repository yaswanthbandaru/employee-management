const express = require('express')
const post_graphile = require('./postgraphile')
import { AppDataSource } from "./data-source"
require('dotenv').config()

const app = express()
const port = process.env.PORT


AppDataSource.initialize().then(async () => {
    console.log("Connected to the database...")
}).catch(error => console.log(error))

app.use(post_graphile)

app.listen(port, () => { console.log(`Server is listening at http://localhost:${port}/`) }) 