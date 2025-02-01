import { HTTPException } from "../exceptions/httpException";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()

export class OfferService{
    static async getByEmail(email:string){
        const findUser = await prisma.user.findUnique({where: {email}, omit:{password:true}})
        if(!findUser) throw new HTTPException(404,'User not found')
            return findUser
    }

    static async getById(id:number){
        const findUser = await prisma.user.findUnique({where: {id}})
        if(!findUser) throw new HTTPException(404,'User not found')
            return findUser
    }

    static async getAll(){
        const users = await prisma.user.findMany({
            omit: {password:true}
        })
        return users
    }
}