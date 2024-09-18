import { PatientsController } from "../controllers/patients-controller"

import * as express from 'express'
const router = express.Router()

router.get('/', PatientsController.getPatients)
router.post('/', PatientsController.createPatient)

module.exports = router