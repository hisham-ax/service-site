import React from 'react';
import Card from './Card'
const Freelancers = (props) => {
    return ( 
        <React.Fragment>
            <div className="freelancers" style={{direction:'rtl',padding:'100px 0'}}>
                <div className="cards">
                    {props.users.map(user => (  
                        <Card key={props.users.indexOf(user)} user={user}/>
                    ))}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Freelancers;