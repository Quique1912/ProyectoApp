import { OfferService } from "../services/offer.service";
import express, {Response, Request, NextFunction} from 'express'

export class OfferController{
    static async getById(req:Request, res:Response, next:NextFunction){
        try{
            const id = req.params.id
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }
}

static async getAll(req:Request, res:Response, next:NextFunction){
    try{
        const id = req.params.id
        const offer = await OfferService.getById(id)
        res.status(200).json(offer)
    }catch(error){
        next(error)
    }
}

static async create(req: Request, res: Response, next: NextFunction){
    
}

static async delete(req: Request, res:Response, next: NextFunction){

}

static async update(req: Request, res:Response, next: NextFunction){
    
}

static async rate(req: Request, res:Response, next: NextFunction){
    
}

static async getRate(req: Request, res:Response, next: NextFunction){
    
}
}