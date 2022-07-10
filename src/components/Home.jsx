import React from 'react';
import Info from './Info';
import Services from './Services';

const Home = (props) => {
    return ( 
        <React.Fragment>
           <Info/>
           <Services services={props.services} onSections={props.onSections}/>
        </React.Fragment>
     );
}
 
export default Home;