import React, { useState, useEffect } from 'react';
import { useFirebase } from '../firebaseContext';
import { collection, onSnapshot } from "firebase/firestore";
import styles from '../styles/elders.module.css';
import 'boxicons';

const EldersHome = () => {
    const { db } = useFirebase(); // Access Firestore instance from context
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "Adults Home"),
            (snapshot) => {
                const projectsArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().homeName,
                    address: doc.data().address,
                    description: doc.data().description,
                    owner: doc.data().owner,
                    imageUrls: doc.data().images,
                }));

                setProjects(projectsArray);
                console.log(projectsArray);
            }
        );

        // Cleanup function to unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
    }, [db]);

    return (
        <div>
            <section className={styles.title}>
                <h2>Registered Elder's Homes</h2>
            </section>

            <section className={styles.product_container}>
                {projects.map((project) => (
                        <div className={styles.box} key={project.id}>
                            <img src="children-images/item1.jpg" alt=""/>
                                <h3>{project.name}</h3>
                                <div className={styles.content}>
                                    <span className={`${styles.project_info} ${styles.description}`}><box-icon type='solid' name='map'></box-icon>{project.address}</span>

                                </div>
                                <div className={styles.actions}>

                                    <span className={styles.donate_button}>Donate</span>
                                </div>
                        </div>
                ))}
                    </section>
        </div>
    );
};

export default EldersHome;