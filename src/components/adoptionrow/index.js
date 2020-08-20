import React from 'react';
import styles from './index.module.css';
import approved from './../../images/approved2.gif'
import rejected from './../../images/rejected.gif'


const CatRow = ({ catName, catPhoto, status }) => {

    let approvalImage = '';
    if (status === 'Approved') {
        approvalImage = approved;
    } else if (status === 'Rejected') {
        approvalImage = rejected;
    }

    return (
        <div className={`${styles.catContainer} ${styles[status]}`}>
            <img className={styles.avatar} src={catPhoto || 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg'} alt="Adoption Request" />

            <div className={styles.info}>
                <strong>{catName || 'Kitty'}</strong> <br />
                <strong>Request Status: </strong> {status || 'Pending'}
            </div>

            <img className={styles.status} alt={status} src={approvalImage} />
        </div>
    )
}

export default CatRow;