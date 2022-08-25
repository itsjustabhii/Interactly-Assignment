import express from "express";
import {v4 as uuidv4} from 'uuid'


const router = express.Router()

let data_store = []

//To view all the contact details entered.
router.get('/getContact', (req, res) => {
    res.send(data_store)
})

//To Add the data to Database
router.post('/createContact', (req, res) => {
    const data = req.body
    
    //data_store.push()
    data_store.push({...data, id: uuidv4()})  //generates a new userID for each entry and pushes it to the contact details

    res.send(`User with the username ${data.firstName} added to the database`)
})

//To get the userID
router.get('/:id', (req,res) => {
    const {id}= req.params
    const foundUser = data_store.find((data) => data.id === id)
    res.send(foundUser)
})

//To delete a contact list entry by using the ID
router.delete('/:id', (req, res) => {
    const {id} = req.params

    data_store = data_store.filter((data) => data.id != id)     //Deletes the user who's id is matching the string

    res.send(`User with the id ${id} deleted from the database.`)
})


//To update a contact
router.patch('/updateContact/:id', (req, res) => {
    const {id} = req.params
    const {firstName, lastName, email, mobileNum} = req.body

    const userToBeUpdated = data_store.find((data) => data.id === id)

    if(firstName) {
        data.firstName = firstName
    }

    if(lastName) {
        data.lastName = lastName
    }

    if(email) {
        data.email = email
    }

    if(mobileNum) {
        data.mobileNum = mobileNum
    }

    res.send(`User with the id ${id} has been updated`)
})

export default router