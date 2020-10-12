import React, {Component} from 'react';
import '../../Assets/Styles/Views/Book/BookMain.scss';
import { Navbar } from '../../Components/Navbar/Navbar';
interface PropsType {
    lang: string
}
interface State{

}
export default class BookMain extends Component<PropsType, State>{
    render() {
        let dir = "";
        if(this.props.lang=='fa')
            dir = 'rtl';
        return (
            <>
                <Navbar lang='fa' />
                <div className={"main "+dir} >
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
            </>
        );
    }
}