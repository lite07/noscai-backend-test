import * as express from 'express'
import { validateBody } from '../middleware/body-validation'
import { CreateScheinRequest } from '../models/request/create-schein-request'
import { ScheinsController } from '../controllers/scheins-controller'
const router = express.Router()

router.get("/", ScheinsController.getSchein)
router.post("/", validateBody(CreateScheinRequest), ScheinsController.createSchein)

module.exports = router