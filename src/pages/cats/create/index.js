import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from '../../../components/form-control'
import Title from '../../../components/title'
import PageLayoutAdmin from "../../layouts/page-layout-admin";
import Button from '../../../components/button/submit-button';
import FormWrapper from '../../../components/form-wrapper';
import styles from './index.module.css'
import defaultPicture from '../../../images/unknownkitty.png';
import firebase from '../../../utils/firebase';


const CatCreatePage = (props) => {

    const [name, setDisplayName] = useState('');
    const [age, setAge] = useState(0);
    const [story, setStory] = useState('');
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null)
    const history = useHistory();

    async function create() {

        if (name === '') {
            setError('Cat name must not be empty');
            return;
        }
        if (imageUrl === '') {
            setImageUrl(defaultPicture);
        }

        try {
            await firebase.createCat(name, age, story, breed, imageUrl)
            history.push('/cats/all');

        } catch (error) {
            setError(error.message);
        }

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'name') {
            setDisplayName(value)
        }
        else if (name === 'age') {
            setAge(value);
        }
        else if (name === 'story') {
            setStory(value);
        }
        else if (name === 'breed') {
            setBreed(value)
        }
        else if (name === 'imageUrl') {
            setImageUrl(value);
        }
    }

    return (
        <PageLayoutAdmin>
            <FormWrapper>
                <Title title="Add New Cat" />
                <div className={styles.error}>{error}</div>

                <FormControl htmlFor="name" fieldName="name" type="text" name="name"
                    value={name} placeholder="Your Name (e.g. John Doe)" id="name"
                    onChange={(event) => onChangeHandler(event)} />


                <FormControl htmlFor="age" fieldName="age" type="number" name="age"
                    value={age} placeholder="Age in months" id="age"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="story" fieldName="story" type="text" name="story"
                    value={story} placeholder="Story" id="story"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="breed" fieldName="breed" type="text" name="breed"
                    value={breed} placeholder="breed" id="breed"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="imageUrl" fieldName="imageUrl" type="text" name="imageUrl"
                    value={imageUrl} placeholder="imageUrl" id="imageUrl"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Confirm" onClick={create} />
            </FormWrapper>
        </PageLayoutAdmin>
    )
}

export default CatCreatePage;