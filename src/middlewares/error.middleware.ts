import { HTTPException } from "../exceptions/httpException";
import express, {Response, Request} from 'express'
import { NextFunction } from "express";

export const ErrorMiddleware = (error: HTTPException, req:Request, res:Response, next:NextFunction) => {
    try{
        const status = error.status || 500
        const message = error.message || 'Something went wrong'
        res.status(status).json({message})
    }catch(error){
        next(error)
    }
}