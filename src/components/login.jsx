import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const newAccount = () => {
        navigate('/newAccount')
    } 
    return ( 
        <React.Fragment>
            <div className="login-user">
                <div className="head">
                    <h1> <span> تسجيل </span> الدخول </h1>
                </div>
                <form>
                    <div className="input">
                        <input type="text" name="username" placeholder="البريد لالكتروني"/>
                        <input type="password" name="password" placeholder=" كلمة المرور "/>
                        <Link to='#'>هل نسيت كلمة المرور</Link>
                        <input type="submit" value=" تسجيل الدخول"/>
                    </div>
                </form>
                <button className='button-new-account' onClick={newAccount}>حساب جديد</button>
            </div>
        </React.Fragment>
     );
}
 
export default Login;