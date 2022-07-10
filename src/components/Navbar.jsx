import React from 'react';
import { NavLink, Link,useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const newAccount = () => {
        navigate('/newAccount')
    }
    const login = () => {
        navigate('/login')
    }
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg header" dir="rtl">
                <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Brand</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">من نحن</NavLink>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact">اتصل بنا</a>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/service-site">الرئيسية</NavLink>
                            </li>
                            <li className="nav-item">
                            {/* <NavLink className="nav-link" to="/contactus">اتصل بنا</NavLink> */}
                            </li>
                        </ul>
                        <button className="btn btn-primary me-3" onClick={newAccount}>حساب جديد</button>
                        <button className="btn btn-primary" onClick={login}>تسجيل الدخول</button>           
                    </div>
                </div>
            </nav>
        </React.Fragment>
     );
}
export default Navbar;
