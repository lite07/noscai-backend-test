import { Response } from "express";

export class ResponseUtils {
  static handleInternalServerError(ex: any, res: Response){
    console.error(ex)
    res.status(500).json({ message: `Internal server error. ${ex.message}` })
  }
}