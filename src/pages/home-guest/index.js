import React from 'react';
import PageLayout from "../../components/page-layout";
import './index.css';
import heroImage from '../../images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg';

const HomePageGuest = () => {
    return (
        <PageLayout>
            <div className="body">
                <h2>Looking to adopt a cat?</h2>
                <p>The Cat Adopt Foundation shelter has countless deserving cats in need of loving homes. 
                    Register and search our website to find the perfect companion for your family. 
                    Our cats can easily travel to Europe, the US and Canada. The process is very straightforward 
                    and we will help you every step of the way.</p>
            </div>
        </PageLayout>
    )
}

export default HomePageGuest;