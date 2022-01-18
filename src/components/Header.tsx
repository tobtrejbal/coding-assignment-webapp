import React from "react"
import './Header.css';
import { Image } from 'react-bootstrap';

interface HeaderProps {
    productImgUrl: string,
    productTitle: string,
    productDescription: string,
}

interface HeaderState {

}

/**
 * Header component. Contains product image and title.
 */
export const Header = ({ productImgUrl, productTitle, productDescription }: HeaderProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Image src={productImgUrl} alt="title image of product" fluid />
                </div>
                <div className="col-sm">
                    <h1 className="header-title">{productTitle}</h1>
                    <p className="header-description">{productDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default Header