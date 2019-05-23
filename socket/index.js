import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'

const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.render('index')
})

let server = app.listen(3000, () => {
  console.log('Listen port: 3000')
})
let io = socketIO(server)
// 这是一个服务器端
io.on('connection', (socket) => {
  console.log('connected')
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
  socket.on('message', (msg) => {
    console.log(msg)
    //定义一个方法将信息发送到客户端
    io.emit('message', msg)
  })
  

})