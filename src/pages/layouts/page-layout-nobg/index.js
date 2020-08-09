import React from 'react';
import './index.css';
import UpperNav from '../../../components/header';

const PageLayoutNoBG = (props) => {
    return (
        <div className="container">
            <UpperNav />
            <div className="container__body">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayoutNoBG;