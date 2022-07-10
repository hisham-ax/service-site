import React from 'react';
import { useNavigate } from 'react-router';
// Images
import image1 from '../images/Mask Group 9.svg';
import image2 from '../images/Mask Group 10.svg';
import image3 from '../images/Mask Group 11.svg';
import image4 from '../images/Mask Group 12.svg';
import image5 from '../images/Mask Group 13.svg';
import image6 from '../images/Mask Group 14.svg';
import image7 from '../images/Mask Group 15.svg';

const Services = props => {
    const navigate = useNavigate();
    let i = 0;
    const images =[image1,image2,image3,image4,image5,image6,image7];
    return ( 
        <React.Fragment>
            <div className="our-services over-flow text-center" id='services'>
                <div>
                    <h3>خدمات</h3>
                </div>
                <div className="info-service">
                    {props.services.map(service=>(
                        <div 
                            key={service.id} 
                            className="service float-right" 
                            onClick={()=> {
                                props.onSections(service)
                                navigate('/services/serviceSections')
                                }}>
                            <img src={images[i++]} alt=''/>
                            <h5>{service.name}</h5>
                        </div>
                    ))}
                </div> 
            </div>
            {/* <Routes>
                <Route path ='/services/serviceSections' element={
                        <ServiceSections services ={props.services}/>}/>
            </Routes> */}
        </React.Fragment>
     );
}
 
export default Services;