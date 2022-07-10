import React from 'react';

import photo from '../images/freelancer.jpg';
import electrical from '../images/electrical.jpg'
const Card = (props) => {
    return (
  
        <div className="user-card mb-3">
            <div className="card-head">
                <img src={electrical} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <img src={photo} className="profile-image" alt="..."/>
                <h5 className="name">الاسم : {props.user.username} </h5>
                <p className="job">الوظيفة :{props.user.job}</p>
                <p className="title">العنوان : {props.user.title} </p>
                <p className="phone">رقم التلفون :{props.user.phone}</p>
                <div className="evaluation">
                    <span><i className="fa-thin fa-star-sharp"></i></span>
                    <span><i className="fa-thin fa-star-sharp"></i></span>
                    <span><i className="fa-thin fa-star-sharp"></i></span>
                    <span><i className="fa-thin fa-star-sharp"></i></span>
                    <span><i className="fa-thin fa-star-sharp"></i></span>
                </div>
            </div>
            <div className="overflow">
                <span>Contact Me</span>
            </div>
        </div>

     );
}
 
export default Card;