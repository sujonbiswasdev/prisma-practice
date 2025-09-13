import { PrismaClient } from '../generated/prisma'
const prisma = new PrismaClient()

async function main() {
    const createUser = await prisma.user.create({
       data:{
         name:"sujon",
         email:"sujon@gmail.com",
         password:"123"
       }
    });
    console.log(createUser,"create user response")    
}
// main()