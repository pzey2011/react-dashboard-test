import React, {Component} from 'react';
import { isMobile } from "react-device-detect";
import '../../Assets/Styles/Views/Book/BookMain.scss';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
interface PropsType {
    lang: string
}
interface State{
    collapse:boolean
}
export default class BookMain extends Component<PropsType, State>{
    constructor(props:PropsType) {
        super(props);

        this.state = {
            collapse: (!isMobile)?false:true
        };
    }
    render() {
        
        const toggleCollapse = () => {
            this.setState({collapse:!this.state.collapse})
        };
        let dir = "";
        if(this.props.lang=='fa')
            dir = 'rtl ';
        let baseHeaderClassName = "sidebar-mini ";
        let extraHeaderClassName="";
        let mainDivStyles:React.CSSProperties = {};
        
        if(isMobile)
        {
            extraHeaderClassName = (this.state.collapse)?'':'sidebar-open';
        }
           
        else
        {
            if(!this.state.collapse)
                mainDivStyles ={
                    marginRight:'250px'
                }
            extraHeaderClassName = (this.state.collapse)?'sidebar-collapse':'';
        }

        return (
            <div className={dir+baseHeaderClassName+extraHeaderClassName}>
                <Navbar toggleCollapse={toggleCollapse}/>
                <Sidebar />
                <div className={"main "+dir} style={mainDivStyles} >
                    <div className="container">
                        <div className="wrapper field-types">
                            <h3>۱- چه نوع عکاسی می خواهید؟
                                <small> (انتخاب کنید) </small>
                            </h3>
                            <div className="speciality-type">
                                <div className="type-box border">
                                    کسب و کار
                                </div>
                                <div className="type-box">
                                    شخصی
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="specialities">
                                <ul className="row">
                                    <li className="col-xs-4 col-sm-4 .col-md-3">
                                        <div className="specialty">
                                            <img src="https://app.kadro.co/uploads/shoot_type/avatar/7/large_personal.png" alt="" />
                                            <span className="center">چهره - پروفایل</span>
                                        </div>
                                    </li>
                                    <li className="col-xs-4 col-sm-4 .col-md-3">
                                        <div className="specialty">
                                            <img src="https://app.kadro.co/uploads/shoot_type/avatar/7/large_personal.png" alt="" />
                                            <span className="center">چهره - پروفایل</span>
                                        </div>
                                    </li>
                                    <li className="col-xs-4 col-sm-4 .col-md-3">
                                        <div className="specialty">
                                            <img src="https://app.kadro.co/uploads/shoot_type/avatar/7/large_personal.png" alt="" />
                                            <span className="center">چهره - پروفایل</span>
                                        </div>
                                    </li>
                                    <li className="col-xs-4 col-sm-4 .col-md-3">
                                        <div className="specialty">
                                            <img src="https://app.kadro.co/uploads/shoot_type/avatar/7/large_personal.png" alt="" />
                                            <span className="center">چهره - پروفایل</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}