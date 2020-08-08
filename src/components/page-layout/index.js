import React from 'react';
import './index.css';
import UpperNav from '../header';

const PageLayout = (props) => {
    return (
        <div className="container">
            <UpperNav />
            <div className="container__body">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout;