import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { NavLink } from 'react-router-dom'

function LogIn() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <>
      <div className='flex justify-center items-center py-22'>
        <div className='w-80'>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            <p className='text-3xl text-center py-6'>Đăng Nhập</p>
            <Form.Item
              className='mb-8'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!'
                }
              ]}
            >
              <Input prefix={<UserOutlined className='site-form-item-icon py-2' />} placeholder='Username' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input prefix={<LockOutlined className='site-form-item-icon py-2' />} type='password' placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <div className='flex justify-between items-center'>
                <NavLink to='/register'>Đăng ký ngay !</NavLink>
                <a href='' className='text-rose-500 hover:text-rose-500'>
                  Quên mật khẩu?
                </a>
              </div>
            </Form.Item>

            <Form.Item className='text-center'>
              <Button type='danger' htmlType='submit' className='login-form-button px-6 bg-red-600 text-white'>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default LogIn
