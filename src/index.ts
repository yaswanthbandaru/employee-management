const express = require('express')
import { AppDataSource } from "./data-source"

const app = express()
const port = process.env.PORT


AppDataSource.initialize().then(async () => {

    console.log("Connected to the database...")
    
}).catch(error => console.log(error))
