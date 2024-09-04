import React, { useState } from 'react';
import styles from '../styles/homeRegistration.module.css';
import {  db,app, storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const HomeRegistration = () => {
    const [projectName, setName] = useState('');
    const [tel, setTel] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState([]);
    const [instagram, setInstagram] = useState(null);
    const [socialmedia, setSocialMedia] = useState('');
    const [images, setImages] = useState('');
    const [homeType, setHomeType] = useState(''); // State to track selected home type

    const handleHome = async (e) => {
        e.preventDefault();

        if (!homeType) {
            console.log("Please select a home type (Children's Home or Adults Home).");
            return;
        }

        try {
            // Upload images to Firebase Storage
            const imageUrls = await Promise.all(
                [...images].map(async (image) => {
                    const imageRef = ref(storage, `images/${image.name}`);
                    await uploadBytes(imageRef, image);
                    return await getDownloadURL(imageRef);
                })
            );

            // Determine the collection name based on selected home type
            const collectionName = homeType === 'option1' ? "Children's Home" : "Adults Home";

            // Store project details in the correct Firestore collection
            await setDoc(doc(db, collectionName, projectName), {
                projectName,
                description,
                address,
                email,
                city,
                tel,
                images: imageUrls,
                district,
                facebook,
                instagram,
                socialmedia,
            });

            console.log("Project registered and data stored successfully in", collectionName);
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleHomeTypeChange = (e) => {
        setHomeType(e.target.value);
    };

    return (
        <section className={styles.form_container}>
            <h2>Register a Children's/ Adults' home</h2>
            <form onSubmit={handleHome}>
                <div className={styles.radioGroup}>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={handleHomeTypeChange} />
                        <label className={styles.form_check_label} htmlFor="inlineRadio1">Children's Home</label>
                    </div>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handleHomeTypeChange} />
                        <label className={styles.form_check_label} htmlFor="inlineRadio2">Adult's Home</label>
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="project-name">Home Name:</label>
                    <input type="text" id="project-name" name="project-name" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="description">Telephone</label>
                    <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setTel(e.target.value)} />
                </div>
                <div>
                    <div className={styles.form_group}>
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="inputState" className="form-label">District</label>
                        <select id="inputState" className="form-select" onChange={(e) => setDistrict(e.target.value)}>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="exampleFormControlInput1" className="form-label">If you have a website, link for the website</label>
                        <input type="email" className={styles.form_control} id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="social-media">Social Media Profiles:</label>
                        <input className={styles.url_text} type="url" id="facebook" name="facebook" placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)} />
                        <input className={styles.url_text} type="url" id="instagram" name="instagram" placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)} />
                        <input className={styles.url_text} type="url" id="other-social-media" name="other-social-media" placeholder="Others" onChange={(e) => setSocialMedia(e.target.value)} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="inputAddress" className="form-label">Images</label>
                        <div>
                            <input type="file" className="form-control" id="inputGroupFile02" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.checkboxContainer}>
                            <input className={styles.form_check_input} type="checkbox" value="" id="flexCheckCheckedDisabled" />
                            <label className={styles.form_check_label} htmlFor="flexCheckCheckedDisabled">
                                I hereby declare that the information provided is accurate.
                            </label>
                        </div>
                    </div>
                    <button className={styles.button} type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default HomeRegistration;