import React from 'react';
import '../../Assets/Styles/Components/Sidebar/Sidebar.scss';
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import RefreshIcon from '@material-ui/icons/Refresh';
import TuneIcon from '@material-ui/icons/Tune';
import ShareIcon from '@material-ui/icons/Share';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import profileBlack from '../../Assets/Images/Components/NavBar/profile_black.png';

interface Props {
    
}

export const Sidebar = (props: Props) => {
    return (
        <aside className="main-sidebar sidebar_fix">
            {/*<!-- sidebar-->*/}
            <section className="sidebar">

                {/*<!-- sidebar menu-->*/}
                <ul className="sidebar-menu tree" data-widget="tree">
                <li className="user-profile treeview">
                    <a id="user-profile">
                    <img src={profileBlack} alt="user" />
                    <span>
                        <span className="d-block font-weight-600 font-size-16">{/*<%= current_user.display_dashboard_name %>*/}</span>
                        <span className="email-id">اعتبار شما :{/*t('dashboard.yourCredit.title')*/} {/*<%= number(credit, 'fa').to_s + (credit < 0 ? "-" : "+") %>*/} تومان</span>
                        </span>
                    </a>
                </li>

                <li className="treeview ">{/*<%= action_name == "" ? "active" : "" %>*/}
                    <Link to="/book">
                        <AddCircleIcon />
                        <span>رزرو عکاس{/*t('dashboard.book.linkTitle')*/}</span>
                    </Link>
                </li>

                <li className="treeview ">{/*<%= action_name == "complete_project" || action_name == "show_dashboard" || action_name == "share_list_dashboard" ? "active" : "" %*/}
                    <a href="/galleries">
                        <DashboardIcon />
                        <span>پروژه های پرداخت شده{/*t('dashboard.payedProjects.linkTitle')*/}</span>
                    </a>
                </li>


                <li className="treeview ">{/*<%= action_name == "not_payed_projects" ? "active" : "" %>
            */}
                    <a href="/galleries/not_payed">
                    <RefreshIcon />
                    <span>پروژه های آماده پرداخت{/*t('dashboard.readyProjects.linkTitle')*/}</span>
                    </a>
                </li>



                <li className="treeview ">{/*<%= action_name == "invoices_dashboard" ? "active" : "" %>"
            */}
                    <a href="/galleries/my_invoices_dashboard">
                    <ShoppingCartOutlinedIcon />
                    <span>خرید های فروشگاه{/*t('dashboard.shopPayedItems')*/}</span>
                    </a>
                </li>

                <li className="treeview ">{/*<%= action_name == "profile" ? "active" : "" %>
            */}
                    <a href="/galleries/profile">
                    <TuneIcon rotate={90}/>
                    <span>حساب کاربری{/*t('dashboard.myAccount')*/}</span>
                    </a>
                </li>

                <li className="treeview "> {/*<%= action_name == "refer_dashboard" ? "active" : "" %>*/}
                    <a href="/users/refer_dashboard">
                    <ShareIcon />
                    <span>دعوت از دوستان{/*t('dashboard.inviteFriends')*/}</span>
                    </a>
                </li>

                </ul>
            </section>
            </aside>
    )
}
