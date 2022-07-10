import React from 'react';

import image from '../images/Mask Group 28.svg';

class NewAccount  extends React.Component {
    state={
        users:this.props.users,
        allUsers:[],
        errors:{}
    }

    componentDidMount(){
        
    }
    handleSubmit = (e) => {
        // dont reload page (no hit server)
        e.preventDefault();
        // check from errors
        const errors = this.validate();

        if(errors) return;
    
        // call Backend server
        console.log('submit')
       this.state.allUsers.push(this.state.users)
        console.log(this.state.allUsers)
    }
    validate = () => {
        const errors = {};
        
        if(this.state.users.username.trim() === ""){
            errors.username = 'Username is required'
        }
        if(this.state.users.password.trim() === ""){
            errors.password = 'Password is required'
        }
        // set state
        this.setState({errors})
        return Object.keys(errors).length === 0? null : errors;
    }
    handleChange = (e) => {
        // clone
        const newUsers = {...this.state.users}
        // edite
        newUsers[e.target.name] = e.target.value
        // set state
        this.setState({users:newUsers})

    }

  
    render() { 
        return (
            <React.Fragment>
            <div className="create-account">
                <div className="head">
                    <h1> حساب  <span>جديد</span> </h1>
                </div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}> 
                        <input type="radio" id="freelancer" name="client"/>
                        <label htmlFor="freelancer">كمقدم خدمة</label>
                        <input type="radio" id="client" name="client"/>
                        <label htmlFor="client">كباحث عن خدمة</label>
                        <div className="form-client">
                            <input
                                onChange={this.handleChange}
                                type="text" 
                                name="username"
                                value={this.state.users.username}
                                placeholder="الاسم بالكامل"/>
                            <input
                                onChange={this.handleChange}
                                type="email" 
                                name="email" 
                                value={this.state.users.email}
                                placeholder="البريد لالكتروني"/>                           
                            <input
                                onChange={this.handleChange}
                                type="password" 
                                name="password"
                                value={this.state.users.password} 
                                placeholder=" كلمة المرور "/>
                            <input
                                onChange={this.handleChange} 
                                type="text" 
                                name="title"
                                value={this.state.users.title}
                                placeholder=" عنوانك"/>
                            <input
                                onChange={this.handleChange}
                                type="tel" 
                                name="phone"
                                value={this.state.users.phone}
                                placeholder="رقم التليفون"/>
                        </div>
                        <div className="freelance">
                            <label>المهنه</label>
                            <select>
                                {this.props.jobs.map((j) => (
                                   j.name.map(s => (
                                       <option key={s.id}>{s.job}</option>
                                   ))
                                ))}
                            </select>
                            <div>
                                <label>اثبات المهنه</label>
                                <input type="file"/>
                                <img src={image} alt="uplode your mission"/>
                            </div>
                            <div>
                                <label>صورة شخصية</label>
                                <input type="file"/>
                                <img src={image} alt="uplode your cover"/>
                            </div>
                        </div> 
                        <input type="checkbox" id="conditions"/>
                        <label htmlFor="conditions">الموافقة على الشروط والاحكام</label>
                        <input type="submit" value=" تسجيل حساب جديد"/>                     
                    </form>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
export default NewAccount;
// const NewAccount = (props) => {
//     // global variabal 
    
//     // assits functions
    
       

//     return( 
       
//      )
// }
// export default NewAccount;