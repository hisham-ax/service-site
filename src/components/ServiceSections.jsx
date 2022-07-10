import React from 'react';
import { useNavigate } from 'react-router';


const ServiceSections = (props) => {
    const navigate = useNavigate();
    return ( 
        <React.Fragment>
            <div className="flexbale">
                <h3>خدمات {props.curentSection[0].service} </h3>
                <hr/>
                <div className="box-flex" style={{cursor:'pointer'}}>
                    {props.curentSection[0].name.map(n => (
                        <div key={n.id}  onClick={() =>{
                            navigate('/services/serviceSections/freelancers')
                            props.onGet(n)
                        }}>
                            
                            <img src={n.image} alt=""/>
                            <span>{n.job}</span>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ServiceSections;