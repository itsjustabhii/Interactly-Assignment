import express from 'express'
import bodyParser from 'body-parser'

import createContact from './routes/createContact.js'
const app = express()
const PORT = 5000

//Initialise Bodyparser
app.use(bodyParser.json())  //will be uising JSON 

app.use('/', createContact)
//Routes
app.get('/', (req, res) => {
    res.send('Hello From Home Page!')
})

//Make our server listen to a PORT
app.listen(PORT, () => console.log(`Server Running on PORT: http://localhost:${PORT}`))
