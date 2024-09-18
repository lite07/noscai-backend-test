import { appDataSource } from "./data-source"
const express = require('express')
const app = express()
const port = 3000

appDataSource.initialize().then(() => {
  console.log("Database initialized")
}).catch(() => {
  console.log("Error when initializing database")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
