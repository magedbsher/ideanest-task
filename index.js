
import dotenv from "dotenv"

dotenv.config({})

import express from 'express'
import { dbConnection } from './db/models/connection.js'
import userRoutes from './src/modules/user/user.routes.js'
import organizationRoutes from "./src/modules/organization/organization.routes.js"
const app = express()
const port = 3000

app.use(express.json())



dbConnection()
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/org",organizationRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))