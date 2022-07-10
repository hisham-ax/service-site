import React from 'react';

const ContactUs = () => {
    return ( 
        <React.Fragment>
            <div className="contact-us" id="contact">
                <div className="container">
                    <div className="contact text-center">
                        <h4> اتصل بنا </h4>
                        <input type="text" name="text" placeholder=" اسمك "/>
                        <input type="email" name="text" placeholder=" البريد الالكنروني "/>
                        <input type="password" name="text" placeholder=" كلمة المرور "/>
                        <textarea className="text-right" placeholder=" رسالتك "></textarea>
                        <input type="button" value="ارسال"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ContactUs;