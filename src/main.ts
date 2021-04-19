import { Response } from "express"
const express = require('express')

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send({ success: 1 }).end()
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})