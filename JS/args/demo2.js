//userObj   一个参数带来了新的问题，代码的函数编写者，user里面的key  要去了解
//当只需要用一部分，解构可以帮助，提高代码的可读性
function information({name, sex, height}) {
  console.log(name, height, sex)
}

const user = {
  name: '杨鹏',
  age: 22,
  height: 180,
  sex: 'boy',
  hobbies: ['玩耍']
}

information(user)