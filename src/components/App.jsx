import React, {Component} from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
// import Services from './Services';
import About from './About';
import ContactUs from './Contactus';
import Navbar from './Navbar';
import ServiceSections from './ServiceSections';
import Freelancers from './freelancers';
import Footer from './Footer';
import NewAccount from './NewAccount';
import Login from './login';
import NotFound from './NotFound'
    // Images 
                 // قسم الصيانه
    import image16 from "../images/Mask Group 16.svg";
    import image17 from "../images/Mask Group 17.svg";
    import image18 from "../images/Mask Group 18.svg";
                // قسم رعاية منزلية
    import image20 from "../images/Mask Group 20.svg";
    import image21 from "../images/Mask Group 21.svg";
                // قسم خدمات نسائية
                // تصميم
    import image22 from "../images/Mask Group 22.svg";
    import image23 from "../images/Mask Group 23.svg";
    import image24 from "../images/Mask Group 24.svg"; 
               //قسم اتصالات     
    import image25 from "../images/Mask Group 25.svg";
    import image26 from "../images/Mask Group 26.svg"; 
    class App extends Component {
        state = {
        services:[
                {id:1,name:"صيانه"},
                {id:2,name:"رعاية منزلية"},
                {id:3,name:"نسائية"},
                {id:4,name:"تصميم"},
                {id:5,name:"نظافة"},
                {id:6,name:"اتصالات"},
                {id:7,name:"مصور"}
            ],
            serviceSections:[
              {
                  service:"صيانه",
                  name:[{id:1,image:image16,job:"ميكانيكي"},{id:2,image:image17,job:"صيانة اجهزة منزلية"},{id:3,image:image18,job:"سباك"},{id:4,image:image16,job:"كهربائي"}]
              },
              {
                  service:"رعاية منزلية",
                  name:[{id:1,image:image20,job:"رعاية كبار السن"},{id:2,image:image21,job:"حاضنه"}]
              },
              {
                  service:"نسائية",
                  name:[{id:1,image:image20,job:"اكلات منزلية"},{id:2,image:image20,job:"كوافير حريمي"}]
              },
              {
                  service:"تصميم",
                  name:[{id:1,image:image22,job:"تصميم فديوهات"},{id:2,image:image23,job:"تصميم خرائط"},{id:3,image:image24,job:"ديكور"},{id:4,image:image22,job:"تصميم مواقع"}]          
              },
              {
                  service:"نظافة",
                  name:[{id:1,image:image20,job:"سيرفس روم"},{id:2,image:image20,job:"نظافة منزلية"}]
              },
              {
                  service:"اتصالات",
                  name:[{id:1,image:image26,job:"اجهزة ارسال"},{id:2,image:image25,job:"كاميرات مراقبة"}]
              },
              {
                  service:"مصور",
                  name:[{id:1,image:image25,job:"تصوير منتجات"},{id:2,image:image25,job:"تصوير مناسبات"}]
              }
          ],
          users:[
              {username:"على محمود",email:"ali@gmail.com", password:"12345678", title:"الفيوم",phone:"20 3456789",job:"كهربائي"},
              {username:"سارة سامح",email:"sara@gmail.com", password:"12345678", title:"البحيرة",phone:"20 3456789",job:"رعاية كبار السن"},
              {username:"تامر مرسي",email:"tamer@gmail.com", password:"12345678", title:"المنيا",phone:"20 3456789",job:"ميكانيكي"},
              {username:"على طه",email:"tahaa@gmail.com", password:"12345678", title:"الاقصر",phone:"20 3456789",job:"سباك"},
              {username:"صالح مجدى",email:"saleh@gmail.com", password:"12345678", title:"قنا",phone:"20 3456789",job:"تصميم خرائط"},
              {username:"ياسر محمد",email:"yaser@gmail.com", password:"12345678", title:"البحر الاحمر",phone:"20 3456789",job:"كهربائي"},
              {username:"محمد سيد",email:"mohamed@gmail.com", password:"12345678", title:"سوهاج",phone:"20 3456789",job:"ديكور"},
              {username:"عبدالناصر سلمان",email:"abdelnaser@gmail.com", password:"12345678", title:"الفيوم",phone:"20 3456789",job:"كاميرات مراقبة"},
              {username:"منى عبدالموجود",email:"mona@gmail.com", password:"12345678", title:"الغربية",phone:"20 3456789",job:"نظافة منزلية"},
              {username:"سلمى محمود",email:"salma@gmail.com", password:"12345678", title:"مطروح",phone:"20 3456789",job:"كوافير حريمي"},
              {username:"مرفت محمد",email:"merft@gmail.com", password:"12345678", title:"المحله",phone:"20 3456789",job:"حاضنه"},
              {username:"مصطفى حسين",email:"mostafa@gmail.com", password:"12345678", title:"اسوان",phone:"20 3456789",job:"اجهزة ارسال"},
              {username:"حسن على",email:"hassn@gmail.com", password:"12345678", title:"دمياط",phone:"20 3456789",job:"تصميم فديوهات"},
              {username:"عبدالرحمن مجدى",email:"abdelrahman@gmail.com", password:"12345678", title:"المنصورة",phone:"20 3456789",job:"سيرفس روم"},
              {username:"محمود احمد",email:"mahmoud@gmail.com", password:"12345678", title:"الاسكندرية",phone:"20 3456789",job:"ميكانيكي"},
              {username:"سالم طلعت",email:"salem@gmail.com", password:"12345678", title:"القاهرة",phone:"20 3456789",job:"اكلات منزلية"},
              {username:"كريم عثمان",email:"careem@gmail.com", password:"12345678", title:"اسيوط",phone:"20 3456789",job:"سباك"},
              {username:"علاء فوزى",email:"careem@gmail.com", password:"12345678", title:"كفرالشيخ",phone:"20 3456789",job:"سباك"},
              {username:"سامي محمود",email:"samy@gmail.com", password:"12345678", title:"القاهرة",phone:"20 3456789",job:"تصوير مناسبات"},
              {username:"كمال علام",email:"kamal@gmail.com", password:"12345678", title:"المنوفية",phone:"20 3456789",job:"تصوير منتجات"},
              {username:"كمال علام",email:"kamal@gmail.com", password:"12345678", title:"المنوفية",phone:"20 3456789",job:"تصوير منتجات"},
              {username:"هشام عبدالرحمن",email:"hisham4a4d4m@gmail.com", password:"12345678", title:"اسيوط",phone:"20 3456789",job:"تصميم مواقع"}
          ],       
          curentSection:[],
          usersSection:[]
          }
    
    handleSections = (ser) => {
        // clone
        const serviceSections = [...this.state.serviceSections]
        const myService = serviceSections.filter(s => s.service === ser.name);
        // set State
        this.setState({curentSection:myService})
       
    }
    getFreelancers = (u) => {
        // clone
        const newUsers = [...this.state.users]
        // edit
        const getUsers = newUsers.filter(user => user.job === u.job)
        // set state
        this.setState({usersSection:getUsers})
    }
    // componentDidMount() {
       
    //     // Get The Data services
    //     const services = fetch('http://localhost:3000/services');
    //     const res = services.then(res =>res.json());
    //     const data = res.then(data => data)
    //     // set the state
    //     res.then(data => this.setState({services:data}))
    //      // Get The Data serviceSections
    //     const serviceSections = fetch('http://localhost:3000/serviceSections');
    //     const serviceSectionsData = serviceSections.then(res => res.json());
    //     // set the state
    //     serviceSectionsData.then(data => this.setState({serviceSections:data}))
    //      // Get The Data users
    //      const users = fetch('http://localhost:3000/users');
    //      const usersData = users.then(res =>res.json());
    //     // set the state
    //     usersData.then(data => this.setState({users:data}))
    //      // Get The Data curentSection
    //      const curentSection = fetch('http://localhost:3000/curentSection');
    //      const curentSectionData = curentSection.then(res =>res.json());
    //     // set the state
    //     curentSectionData.then(data => {
    //         this.setState({curentSection:data})
    //         console.log(data)
    //     })
    //     // Get The Data usersSection
    //     const usersSection = fetch('http://localhost:3000/usersSection');
    //     const usersSectionData = usersSection.then(res =>res.json());
    //     // set the state
    //     usersSection.then(data => this.setState({usersSection:data}))
    // }
    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <Routes>
                        {/* Basic Routes */}
                        <Route path='/' element={<Home services={this.state.services}
                        onSections={this.handleSections}/>} />
                        {/* <Route path='/services' element={<Services/>}/> */}
                        <Route path='/about' element={<About/>}/>
                        {/* <Route path='/contactus' element={<ContactUs/>}/> */}
                        <Route path='/services/serviceSections' element={
                            <ServiceSections
                            services={this.state.services}
                            images={this.state.images}
                            curentSection={this.state.curentSection}
                            onGet={this.getFreelancers}
                            />}/>
                            <Route path='/services/serviceSections/freelancers' element={
                            <Freelancers users={this.state.usersSection}/>}/>
                            <Route path='/newAccount' element={<NewAccount 
                                jobs={this.state.serviceSections}
                                users={this.state.users}/>} />
                            <Route path='/login' element={<Login/>}/>              
                            <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
                <ContactUs/>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default App;
