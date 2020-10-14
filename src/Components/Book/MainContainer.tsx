import React, { Component } from 'react';
import { isMobile } from "react-device-detect";

interface Props {
    collapsed:boolean,
    lang:string
}

export default class MainContainer extends Component<Props, {}> {
    
    render() {
        let dir = "";
        if(this.props.lang=='fa')
            dir = 'rtl ';
        
        let mainDivStyles:React.CSSProperties = {};
        if(!isMobile && !this.props.collapsed)
        {
            mainDivStyles ={
                marginRight:'250px'
            }
        }
        return (
            <div className={"main "+dir} style={mainDivStyles}>
                {this.props.children}
            </div>
        )
    }
}
