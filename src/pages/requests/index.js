import React, { useState, useEffect } from 'react';
import Title from '../../components/title'
import PageLayout from '../layouts/page-layout'
import ContentWrapper from '../../components/content-wrapper';
import firebase from '../../utils/firebase';
import styles from './index.module.css';
import { Cube } from 'react-preloaders';
import AdoptionRowAdmin from '../../components/adoptionrow-admin';

const PendingAdoptionsPage = (props) => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").where("pendingAdoption", "==", true)
                .where("adoptionStatus", "==", "Pending").get().then(setLoading(true));
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData().then(setLoading(false));
    }, [cats]);

    async function approve(catId) {
        await firebase.approveAdoption(catId);
        console.log("APPROVED")
    }
    async function reject(catId) {
        await firebase.rejectAdoption(catId);
        console.log("REJECTED")


    }

    return (
        <PageLayout>
            <ContentWrapper>
                <Cube customLoading={loading} />

                <div className={styles.container}>
                    <Title title="Pending Adoptions" />
                    {cats.map(cat => (
                        <div className={styles.cat} key={cat.id}>
                            <AdoptionRowAdmin cat={cat} approve={e => approve(cat.id)}
                                reject={e => reject(cat.id)} />
                        </div>
                    ))}

                </div>

            </ContentWrapper>
        </PageLayout>
    )
}

export default PendingAdoptionsPage;