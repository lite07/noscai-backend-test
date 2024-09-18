import { Request, Response } from "express";
import { PatientRepository } from "../repositories/patient-repository";
import { appDataSource } from "../data-source";
import { Patient } from "../entity/patient";

export class PatientsController {
    static getPatients = async function getPatients(_req: Request, res: Response) {
        try{
            const patientsData = await new PatientRepository(appDataSource.getRepository(Patient)).getAllPatient();

            res.status(200).json({ data: patientsData })
        }catch(ex){
            res.status(500).json({ message: ex })
        }
    }

    static async createPatient(req: Request, res: Response){
        try{
            const patient = new Patient()

            patient.name = req.body['name']
            patient.dateOfBirth = new Date(req.body['date_of_birth'])
            patient.insuranceNumber = req.body['insurance_number']
            patient.metadata = req.body['metadata']

            await new PatientRepository(appDataSource.getRepository(Patient)).createPatient(patient);

            res.status(201).json({data: patient})
        }catch(ex){
            console.error(ex);
            res.status(500).json({message: ex})
        }
    }
}