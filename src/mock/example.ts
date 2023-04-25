import Mock from 'mockjs'

const data = {
  name: '小明',
  password: '123456'
}

export default {
  getUsers: ({ body }: any) => {
    // debugger
    body = JSON.parse(body)
    console.log(body)

    // console.log(Response)

    // 获取请求数据
    if (body.name === data.name && body.password === data.password) {
      return Mock.mock({
        status: '200',
        code: '0000',
        msg: '请求成功',
        data: [
          {
            name: '小明',
            age: '18'
          }
        ]
      })
    } else {
      return Mock.mock({
        status: '200',
        // code: '0000',
        message: '用户名或密码错误'
      })
    }
    // return Mock.mock({
    //   status: '200',
    //   // code: '0000',
    //   message: '用户名或密码错误'
    // })
  }
}
