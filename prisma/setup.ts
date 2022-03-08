import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



const users = [
    {
        fullName: 'Grigori Godolja',
        photo: 'img.jpg',
        email: 'grigorgodole@mail.com'
    },
    {
        fullName: 'Nicolas Marcora',
        photo: 'img.jpg',
        email: 'nicolasmarcora@mail.com'
    },
    {
        fullName: 'Ed putans',
        photo: 'img.jpg',
        email: 'edputans@mail.com'
    }

]

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


const usersHobbies = [
    {
        userId: 1,
        hobyId: 2
    },
    {
        userId: 1,
        hobyId: 3
    },
    {
        userId: 2,
        hobyId: 3
    },
    {
        userId: 3,
        hobyId: 2
    }
]


async function createStuf() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }

    for (const hobby of hobies) {
        await prisma.hobby.create({ data: hobby })
    }

    for (const usersHobby of usersHobbies) {
        await prisma.userHobbies.create({ data: usersHobby })
    }
}

createStuf()