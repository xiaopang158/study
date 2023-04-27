import Mock from 'mockjs'
import example from './example'

// 用户登录
Mock.mock('/user/login', 'post', example.getUsers)

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
export default Mock
