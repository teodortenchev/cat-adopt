import React from 'react';
import './index.css';
import UpperNav from '../../../components/header';

const PageLayout = (props) => {
    return (
        <div>
            <UpperNav />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout;