import express from "express";
import { createClient } from "redis";

const app = express()
app.use(express.json())

const client = createClient()
client.connect()

app.post('/submit', (req,res) => {
    const {problemId, userId, code, language} = req.body
    client.lPush('submission', JSON.stringify({problemId, userId, code, language}))

    res.json({
        message : "Succesfull received"
    })
})

app.listen(3000)