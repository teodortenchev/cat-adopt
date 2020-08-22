import React, { useContext } from 'react';
import PageLayout from "../layouts/page-layout";
import styles from './index.module.css';
import WelcomeContent from '../../components/welcome-content';
import UserContext from '../../Context';

const HomePage = () => {

    const { isLoggedIn, appUser, isAdmin } = useContext(UserContext);

    return (
        <PageLayout>
            <div className={styles.container}>
                <WelcomeContent isAdmin={isAdmin} isLoggedIn={isLoggedIn} appUser={appUser} />
            </div>
        </PageLayout>
    )
}

export default HomePage;
