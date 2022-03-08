import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query', 'error', 'warn', 'info'] })

const hobbies = [
    {
        name: 'Knitting',
        photo: 'knitting.jpg',
        active: false
    },
    {
        name: 'Rugby',
        photo: 'rugby.jpg',
        active: true
    },
    {
        name: 'Cooking',
        photo: 'cooking.jpg',
        active: true
    },
    {
        name: 'Anime',
        photo: 'anime.jpg',
        active: false
    }
]

const users = [
    {
        fullName: 'Nicolas',
        photo: 'nico.jpeg',
        email: 'nicolas@email.com',
        hobbies: {
            connect: [{ name: 'Knitting' }]
        }
    },
    {
        fullName: 'Rinor',
        photo: 'rinor.jpeg',
        email: 'rinor@email.com'
    },
    {
        fullName: 'Arita',
        photo: 'arita.jpeg',
        email: 'arita@email.com'

    }
]

async function createStuff() {
    // for (const hobby of hobbies) {
    //     //@ts-ignore
    //     await prisma.hobby.create({ data: hobby })
    // }

    for (const user of users) {
        //@ts-ignore
        await prisma.user.create({ data: user })
    }
}

createStuff()