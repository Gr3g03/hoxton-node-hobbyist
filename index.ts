import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient({ log: ['query', 'error', 'warn', 'info'] })



app.get('/hobbies', async (req, res) => {

    let hobbies = await prisma.hobby.findMany({ include: { User: true } })
    res.send(hobbies)
})



app.get('/users', async (req, res) => {

    let users = await prisma.user.findMany({ include: { Hobby: true } })
    res.send(users)
})

// app.get('/users/:id', async (req, res) => {

//     const idParam = Number(req.params.id)

//     const user = await prisma.user.findFirst({
//         where: { id: idParam },
//         include: { userHobbies: true }
//     })

//     if (user) {
//         res.send(user)
//     }

//     else {
//         res.status(404).send({ error: 'User not found.' })
//     }

// })

// app.post('/users', async (req, res) => {

//     const { email, fullname, photo } = req.body

//     const newUser = {
//         email: email,
//         fullname: fullname,
//         photo: photo
//     }

//     await prisma.user.create({ data: newUser })

// })


app.listen(4000, () => {
    console.log(`Server up: http://localhost:4000`)
})