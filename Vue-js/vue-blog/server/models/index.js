const mongoose = require('mongoose')  //数据驱动
const path = require('path')
const requireAll = require('require-all')
const mongoUrl = `mongodb: //127.0.0.1: 27017/blog`

const User = mongoose.model('User')

requireAll({
  dirname: path.join(__dirname, './'),
  filter: /(.+)\.model\.js$/,
  //     分组的贪婪匹配
  recursive: true
})
mongoose.connection
  .openUri(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    user: '',
    pass: ''
  })
  .once('open', async () => {
    console.log('数据库链接成功');
    let user = new User({
      role: 'superAdmin',
      username:'root',
      password: '1234',
      email: '123@.com'
    });
    user.save()
  })