import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


const hobies = [
    {
        name: 'walking',
        photo: 'img.jpg',
        active: true
    },
    {
        name: 'running',
        photo: 'img.jpg',
        active: true
    },
    {
        name: 'coding',
        photo: 'img.jpg',
        active: false
    }
]

const users = [
    {
        fullName: 'Grigori Godolja',
        photo: 'img.jpg',
        email: 'grigorgodole@mail.com',
        hobbies: {
            connect: [{ name: 'Knitting' }, { name: 'Rugby' }]
        }
    },
    {
        fullName: 'Nicolas Marcora',
        photo: 'img.jpg',
        email: 'nicolasmarcora@mail.com',
        hobbies: {
            connect: [{ name: 'Rugby' }, { name: 'Anime' }]
        }
    },
    {
        fullName: 'Ed putans',
        photo: 'img.jpg',
        email: 'edputans@mail.com',
        hobbies: {
            connect: [{ name: 'Knitting' }, { name: 'Cooking' }]
        }
    }

]




async function createStuf() {

    for (const hobby of hobies) {
        await prisma.hobby.create({ data: hobby })
    }

    for (const user of users) {
        await prisma.user.create({ data: user })
    }


}

createStuf()