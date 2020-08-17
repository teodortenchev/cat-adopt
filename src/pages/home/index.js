import React from 'react';
import PageLayout from "../layouts/page-layout";
import styles from './index.module.css';
import Title from '../../components/title';
import SimpleLink from '../../components/link'

const HomePageGuest = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title="Looking to adopt a cat?" />
                <div className={styles.text}>
                    <p>The Cat Adopt Foundation shelter has countless deserving cats in need of loving homes.
                     <SimpleLink title="Register" styleType="main-page" to="/register" /> and search our website to find the perfect companion for your family.
                    Our cats can easily travel to Europe, the US and Canada. The process is very straightforward
                    and we will help you every step of the way.</p>
                    <p>You can always <SimpleLink title="browse the cats" styleType="main-page" to="/cats/all" /> that are up for adoption, but if you want to begin the process
                        of adopting a kitty you must <SimpleLink title="sign up for an account" styleType="main-page" to="/register" />.
                    </p>
                </div>
            </div>
        </PageLayout>
    )
}

export default HomePageGuest;
