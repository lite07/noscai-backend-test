import { Request, Response } from "express";

export class ScheinsController {
    static async createSchein(req: Request, res: Response){
        res.send("Hello")
    }
}