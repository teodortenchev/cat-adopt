import React from 'react';
import './index-nobg.css';
import UpperNav from '../../../components/header';

const PageLayoutNoBG = (props) => {
    return (
        <div>
            <UpperNav />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayoutNoBG;