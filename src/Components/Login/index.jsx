import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { BACKEND_DOMAIN_API } from '../../global';
import './style.scss';

const validattion = Yup.object({
  email: Yup.string('Bạn cần nhập đúng định dạng email!').email('Bạn cần nhập đúng định dạng email!').required('Bạn cần cung cấp email!'),
  password: Yup.string().required('Bạn cần nhập mật khẩu!'),
})
const Login = () => {
  const navigate = useNavigate();
  const { values, touched, isValid, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validattion,
    onSubmit(values) {
      getAllUser(values);
    },
  });
  const getAllUser = async (user) => {
    const findAllUser = await axios.get(`${BACKEND_DOMAIN_API}/api/v1/users`);
    const findUserLogin = findAllUser.data.find((item) => item.email === user.email);
    if(findUserLogin && findUserLogin.password === user.password){
      localStorage.setItem('userLogin', JSON.stringify(findUserLogin));
      alert('Đăng nhập thành công!');
      navigate('/home');
    } else{
      alert('Sai tài khoản mật khẩu!');
    }
  }
  return (
    <div className='container-login-page'>
      <h1>Đăng nhập shop mindX</h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <label>Email <strong className='red'>*</strong></label>
          <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
        </div>
          {touched.email && !isValid && errors.email && (<p className='red'>{errors.email}</p>)}

        <div className='row'>
          <label>Password <strong className='red'>*</strong></label>
          <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
        </div>
          {touched.password && !isValid && errors.password && (<p className='red'>{errors.password}</p>)}

        <button type='submit'>Đăng nhập</button>  
        <input type="button" value='Đăng ký' onClick={ () => {
          navigate('/auth/register');
        }}/>
      </form>

    </div>
  )
}

export default Login