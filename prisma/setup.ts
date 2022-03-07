import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()




const users = [
    {
        fullName: 'Grigori Godolja',
        email: 'grigorgodole@mail.com',
        photo: 'img.jpg'
    },
    {
        fullName: 'Nicolas Marcora',
        email: 'nicolasmarcora@mail.com',
        photo: 'img.jpg'
    }

]

const hobies = [
    {
        name: 'My first post',
        photo: 'Welcome to my first post',
        active: true,
        userId: 1
    },
    {
        name: 'My second post',
        photo: 'Welcome to my second post',
        active: true,
        userId: 1
    },
    {
        name: 'This is cool',
        photo: 'My first post, too!',
        active: true,
        userId: 2
    }
]


async function createStuff() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
    for (const hobbie of hobies) {
        await prisma.hobie.create({ data: hobbie })
    }

}

createStuff()