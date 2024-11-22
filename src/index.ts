//import express vào dự án

import express from 'express'
import databaseService from './services/database.services'

const app = express() //dùng express tạo 1 server
const port = 8000 //server sẽ chạy trên cổng port 3000

app.listen(port, () => {
  console.log(`Project này đang chạy trên post ${port}`)
})

databaseService.connect()
