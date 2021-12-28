import React from "react"
import './Header.css';

interface HeaderProps {
    productImgPath: string,
    productName: string,
}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <div className="header">
                <div className="header-div-img">
                    <img src= {this.props.productImgPath}/>
                </div>
                <div className="header-div-title">
                    <h1>{this.props.productName}</h1>
                </div>
            </div>
        );
    }
}

export default Header