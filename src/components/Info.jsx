import React from 'react';
import Background from '../images/Group 299.svg'
const Info = () => {
    return ( 
        <React.Fragment>
            <div className="our-info over-flow">
                <div>
                    <img src={Background} alt="bg-info"/>
                </div>   
                <div className="contanier">
                    <div className="info-content text-center">
                        <h1>اطلب خدمتك اونلاين</h1>
                        <p>خدمات متنوعه يمكنك طلبها اونلاين يصلك القائم بالخدمة حتى منزلك ويمكنك الدفع اونلاين</p>
                        <button>استكشف الخدمات</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
export default Info;