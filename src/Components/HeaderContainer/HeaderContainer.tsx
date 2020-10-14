import React, { Component } from 'react';
import { isMobile } from "react-device-detect";

interface Props {
    collapsed:boolean,
    lang:string
}

export default class HeaderContainer extends Component<Props, {}> {
    
    render() {
        let dir = "";
        if(this.props.lang=='fa')
            dir = 'rtl ';
        let baseHeaderClassName = "sidebar-mini ";
        let extraHeaderClassName="";
        if(isMobile)
        {
            extraHeaderClassName = (this.props.collapsed)?'':'sidebar-open';
        }
        else
        {
            extraHeaderClassName = (this.props.collapsed)?'sidebar-collapse':'';
        }
        return (
            <div className={dir+baseHeaderClassName+extraHeaderClassName}>
                {this.props.children}
            </div>
        )
    }
}
