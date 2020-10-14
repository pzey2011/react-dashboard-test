import React, {Component} from 'react';
import { isMobile } from "react-device-detect";
import '../../Assets/Styles/Views/Book/BookMain.scss';
import MainContainer from '../../Components/Book/MainContainer';
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
interface PropsType {
    lang: string
}
interface State{
    collapsed:boolean
}
export default class BookMain extends Component<PropsType, State>{
    constructor(props:PropsType) {
        super(props);

        this.state = {
            collapsed: (!isMobile)?false:true
        };
    }
    render() {
        
        const toggleCollapse = () => {
            this.setState({collapsed:!this.state.collapsed})
        };

        return (
            <HeaderContainer collapsed={this.state.collapsed} lang={this.props.lang}>
                <Navbar toggleCollapse={toggleCollapse}/>
                <Sidebar />
                    <MainContainer collapsed={this.state.collapsed} lang={this.props.lang}>
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
                    </MainContainer>
            </HeaderContainer>
        );
    }
}