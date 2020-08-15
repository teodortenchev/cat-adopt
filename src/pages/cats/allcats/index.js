import React, { useState, useEffect } from 'react';
import Title from '../../../components/title'
import PageLayout from "../../layouts/page-layout-nobg";

import firebase from '../../../utils/firebase';

const AllCatsPage = (props) => {

    const [cats, setCats] = useState([]);
    const [roles, setRoles] = useState([]);


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
            <ul>
                {cats.map(cat => (
                    <li key={cat.id}><h1>{cat.name}</h1></li>
                ))}
            </ul>
        </PageLayout>
    )
}

export default AllCatsPage;