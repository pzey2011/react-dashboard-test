import React from 'react';
import '../../Assets/Styles/Components/Navbar/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt , faBars , faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


import profileWhite from '../../Assets/Images/Components/NavBar/profile_white.png';
import logo from '../../Assets/Images/Components/NavBar/logo.png';

interface Props {
    lang: string
}
export const Navbar = (props: Props) => {
    const [collapse, toggle] = React.useState(false); 
    
    const toggleCollapse = () => {
        toggle(!collapse);
    };
    let dir = "";
    if(props.lang=='fa')
        dir = 'rtl';
    return (
        <div className={dir+' '+((collapse)?'sidebar-collapse':'')}>
            <header className="main-header">
                <a href="https://www.kadro.co" className="logo d-none d-md-block" >
                    {/*<!-- logo-->*/}
                    <div className="logo-mini">
                        <span className="dark-logo"><img src={logo} alt="logo" /></span>
                    </div>
                    <div className="logo-lg text-center">
                        <h5 className="dark-logo">سامانه رزرو عکاس کادرو</h5>
                    </div>
                </a>
                <nav className="navbar">
                    <div className="menu-button">
                        <a id="scroll-to-top" className="sidebar-toggle" data-toggle="push-menu" role="button" onClick={toggleCollapse}>
                            <FontAwesomeIcon
                                icon={ faBars}
                                fixedWidth
                            />
                            <span className="sr-only">
                            
                            </span>
                        </a>
                    </div>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                        {/* <li className="dropdown change-lang-menu">
                                <a className="dropdown-toggle" data-toggle="dropdown" style={{fontSize:'18px'}}>
                                    <label className="">تغییر زبان:</label>
                                    {props.lang=='fa'?<img className={classes.myFlagImg} src={'/img/iran-flag.png'} />:<img className={classes.myFlagImg} src={'/img/united-kingdom-flag.png'} />}
                                    <FaChevronDown />
                                </a>

                                <ul className="dropdown-menu">
                                    <a className="dropdown-item" onClick={handleChangeLanguage.bind(null, '1')}><img className={classes.myFlagImg} src={'/img/iran-flag.png'} /></a>
                                    <br />
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={handleChangeLanguage.bind(null, '2')}><img className={classes.myFlagImg} src={'/img/united-kingdom-flag.png'} /></a>
                                </ul>
                            </li>*/}

                            {/*extra*/}
                            {/*
                            <% if cart_items.any? %>
                                <li class="dropdown messages-menu">
                                    <a href="/cart_items_list_dashboard" class="dropdown-toggle" data-remote="true">
                                        <i class="mdi mdi-cart-outline"></i>
                                    </a>
                                </li>
                            <% else %>
                            */}
                            <li className="dropdown">
                                <a href="/cart_items_list_dashboard" className="dropdown-toggle" data-remote="true">
                                    <i>
                                        <ShoppingCartOutlinedIcon />
                                    </i>
                                </a>
                            </li>
                            {/*<% end %>*/}
                            {/*<!-- User Account-->*/}
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                                    <span >
                                    واله
                                        {/*<%= current_user.display_dashboard_name %>*/}
                                    </span>
                                    <FontAwesomeIcon
                                        icon={ faChevronDown}
                                        fixedWidth
                                    />
                                    <img src={profileWhite} className="user-image rounded-circle" alt="User Image" />
                                </a>
                                <ul className="dropdown-menu animated flipInY">
                                    {/*<!-- User image -->*/}
                                    <li className="user-header bg-img"  data-overlay="3">{/*style={{backgroundImage: 'url(../images/user-info.jpg)'}}*/}
                                        <div className="flexbox align-self-center">
                                            <img src={profileWhite} className="float-left rounded-circle" alt="User Image" />
                                            <h4 className="user-name align-self-center">
                                                <span>{/*<%= current_user.display_dashboard_name %>*/}</span>
                                                <br />
                                                <small>{/*<%= current_user.mobile_number.tr('.0123456789', '/۰۱۲۳۴۵۶۷۸۹') %>*/}</small>
                                            </h4>
                                        </div>
                                    </li>
                                    {/*<!-- Menu Body -->*/}
                                    <li className="user-body">
                                        <a className="dropdown-item" href="/galleries/profile"><PersonIcon />حساب کاربری
                                            <br />
                                            {/*<%= number(credit, 'fa').to_s + (credit < 0 ? "-" : "+") %>*/}0 تومان</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/users/sign_out"><FontAwesomeIcon
                                            icon={ faSignOutAlt}
                                            fixedWidth
                                        />خروج</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
