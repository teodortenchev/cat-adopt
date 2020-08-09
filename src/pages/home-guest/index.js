import React from 'react';
import PageLayout from "../layouts/page-layout";
import './index.css';
import Title from '../../components/title';

const HomePageGuest = () => {
    return (
        <PageLayout>
            <div className="body">
                <Title title= "Looking to adopt a cat?" />
                <p>The Cat Adopt Foundation shelter has countless deserving cats in need of loving homes. 
                    Register and search our website to find the perfect companion for your family. 
                    Our cats can easily travel to Europe, the US and Canada. The process is very straightforward 
                    and we will help you every step of the way.</p>
            </div>
        </PageLayout>
    )
}

export default HomePageGuest;