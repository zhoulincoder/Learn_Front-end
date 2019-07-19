const mongoose = require('mongoose');
const md5 = require('md5')
const { Schema } = mongoose
const UserSchema = new Schema ({
  role: {
    type: String,
    enum: ['superAdmin', 'admin', 'uer'],   //枚举类型  约定只有这几种
    default: 'user'
  },
  username: {
    type: String,
    trim: true,
    unique: true   // 唯一索引
  },
  email: {
    type: String,
    unique: true,  
    trim: true,  //去空格
    lowercase: true
  },
  password: {
    type: String,
    set: md5      //密码加密
  },
  description: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  toJSON: {
    transform(doc, ret) {
      // 取出删除id和密码
      ret.id = ret._id
      delete ret._id
      delete ret.password
    }
  },
  minimize:false
})
// 物理collection 的model 映射
mongoose.model('User', UserSchema)