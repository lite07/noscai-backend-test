import { Request, Response } from "express";
import { ScheinService } from "../services/schein-service";
import { ResponseUtils } from "../utils/response";
import { ScheinRepository } from "../repositories/schein-repository";
import { appDataSource } from "../data-source";
import { Schein } from "../entity/schein";

export class ScheinsController {
    static async getSchein(_: Request, res: Response){
      try{
        const scheinData = await new ScheinRepository(appDataSource.getRepository(Schein)).getAllSchein();

        res.json({data: scheinData})
      }catch(ex){
        ResponseUtils.handleInternalServerError(ex, res)
      }
    }

    static async createSchein(req: Request, res: Response){
      try{
        const validationError = await ScheinService.validateScheinValidationRules(req.body['validation_rules'])
        
        if(validationError) return res.status(400).json({ message: `validation_rules: ${validationError}` })

        const schein = new Schein()
        schein.type = req.body['type']
        schein.template = req.body['template']
        schein.validationRules = req.body['validation_rules']

        await new ScheinRepository(appDataSource.getRepository(Schein)).createSchein(schein);

        res.status(201).json({ data: req.body })
      }catch(ex){
        ResponseUtils.handleInternalServerError(ex, res)
      }
    }
}