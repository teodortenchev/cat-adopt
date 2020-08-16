import React, { useState, useEffect } from 'react';
import Title from '../../../components/title'
import PageLayout from '../../layouts/page-layout';
import ContentWrapper from '../../../components/content-wrapper'

import firebase from '../../../utils/firebase';
import CatCard from '../../../components/cat';
import styles from './index.module.css';

const AllCatsPage = (props) => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").get();
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);


    return (
        <PageLayout>
            <ContentWrapper>

                {cats.map(cat => (
                    <div className={styles.cat}>
                    <CatCard name={cat.name} breed={cat.breed} story={cat.story} id={cat.id} />
                    </div>
                ))}

            </ContentWrapper>
        </PageLayout>
    )
}

export default AllCatsPage;