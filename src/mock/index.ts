import Mock from 'mockjs'
import example from './example'

const data = {
  name: '小明',
  password: '123456'
}

// const login = function ({ body }: any) {
//   console.log(body)

//   body = JSON.parse(body)

//   // 获取请求数据
//   if (body.name === data.name || body.password === data.password) {
//     return Mock.mock({
//       status: '200',
//       code: '0000',
//       msg: '请求成功',
//       data: [
//         {
//           name: '小明',
//           age: '18'
//         }
//       ]
//     })
//   } else {
//     return Mock.mock({
//       status: '200',
//       // code: '0000',
//       message: '用户名或密码错误'
//     })
//   }
// }

// example 相关
Mock.mock('/api/users', 'get', function () {
  return Mock.mock({
    status: '200',
    msg: '请求成功',
    'data|3': [
      {
        name: '@cname', // Mock.Random.cname(),
        age: '@integer(20,50)'
      }
    ]
  })
})

// example 相关 POST请求
Mock.mock('/user/login1', 'post', example.getUsers)

export default Mock
