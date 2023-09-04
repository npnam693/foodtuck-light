import CoverPage from '../../components/CoverPage'
import { Button, Checkbox, Input } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const SignUp = () => {
    return (
        <div className='min-h-screen'>
            <CoverPage title='Login Page' currentPage='Login' listPath={[{title: 'Login', path: '/'}]} />
            <section className='w-full flex items-center justify-center '>
              <div className='w-4/12 shadow-[0_10px_40px_rgba(25,_90,_0,_0.3)] p-8 flex flex-col'>
                  <p className='font-bold text-[#333] text-xl mb-8'>Sign up</p>
                  
                  <Input placeholder='Name' className='rounded-none h-11 mb-4' prefix={<UserOutlined className='text-lg mr-2'/>}/>

                  <Input placeholder='Email' className='rounded-none h-11 mb-4' prefix={<MailOutlined className='text-lg mr-2'/>}/>
    
                  <Input placeholder='Password' className='rounded-none h-11 mb-4' prefix={<LockOutlined className='text-lg mr-2'/>}/>
    
                  <Checkbox className='overide-shop-checkbox mb-8'>Remember me?</Checkbox>
    
                  <Button className='rounded-none h-11 bg-primary text-white mb-4'>Sign Up</Button>
                  
                  <div className='flex items-center mb-4'>
                      <div className='flex-grow h-[1px] bg-[#E0E0E0] ' />
                      <div className='p-2 border border-1 border-[#E0E0E0]'>OR</div>
                      <div className='flex-grow h-[1px] bg-[#E0E0E0] '/>
                  </div>
                  
                  <div>
                      <Button className='w-full h-11 rounded-none mb-4'>Sign up with Google</Button>
                      <Button className='w-full h-11 rounded-none mb-4'>Sign up with Apple</Button>
                  </div>
              </div>
            </section>
        </div>
      )
    }

export default SignUp