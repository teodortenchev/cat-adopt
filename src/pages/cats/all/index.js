import React, { useState, useEffect } from 'react';
import Title from '../../../components/title'
import PageLayout from '../../layouts/page-layout';
import ContentWrapper from '../../../components/content-wrapper'
import firebase from '../../../utils/firebase';
import CatCard from '../../../components/cat';
import styles from './index.module.css';
import { Cube } from 'react-preloaders';
import AllKittiesGone from '../../../components/nokitties'


const AllCatsPage = () => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").where("pendingAdoption", "==", false).get().then(setLoading(true));
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData().then(setLoading(false));
    }, []);


    return (
        <PageLayout>
            <ContentWrapper>
                <div className={styles.title}>
                    <Title title="Available for Adoption" />
                </div>
                <Cube customLoading={loading} />
                {cats.length === 0 ? <AllKittiesGone /> : cats.map(cat => (
                    <div className={styles.cat} key={cat.id}>
                        <CatCard name={cat.name} breed={cat.breed} story={cat.story} id={cat.id} image={cat.imageUrl} />
                    </div>
                ))}


            </ContentWrapper>
        </PageLayout>
    )
}

export default AllCatsPage;