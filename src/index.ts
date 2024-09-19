import { appDataSource } from "./data-source"
import * as patient from "./routers/patient-router"
import * as scheint from "./routers/schein-router"

const express = require('express')
const app = express()
const port = 3000

appDataSource.initialize().then(() => {
  console.info("Database initialized")
}).catch(() => {
  console.error("Error when initializing database")
})

app.use(express.json());
app.use('/api/patients', patient)
app.use('/api/scheints', scheint)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
