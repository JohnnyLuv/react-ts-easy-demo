import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'

import '../assets/style/signin.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}


function SignIn() {
  const history = useHistory()

  function onFinish(data: any) {
    console.log('Success:', data)
    localStorage.setItem('account', data.account)
    history.push('/')
  }


  return (
    <div className="signin-wrap">
      <Form className='signin-form' {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item label="account" name="account" rules={[{ required: true, message: '请输入账号！' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="password" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }} style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignIn