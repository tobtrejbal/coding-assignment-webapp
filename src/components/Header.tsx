import React from "react"
import './Header.css';

interface HeaderProps {
    productImgUrl: string,
    productTitle: string,
}

interface HeaderState {

}

/**
 * Header component. Contains product image and title.
 */
class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <div className="header">
                <div className="header-div-img">
                    <img src= {this.props.productImgUrl}/>
                </div>
                <div className="header-div-title">
                    <h1>{this.props.productTitle}</h1>
                </div>
            </div>
        );
    }
}

export default Header