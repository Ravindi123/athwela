import React, { useState, useEffect } from 'react';
import { useFirebase } from '../firebaseContext';
import { collection, onSnapshot, doc } from "firebase/firestore";
import styles from '../styles/elders.module.css';

const EldersHome = () => {
    const { db } = useFirebase(); // Access Firestore instance from context
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "Health Care"),
            (snapshot) => {
                const projectsArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    need: doc.data().need,
                    raised: doc.data().raised,
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
                <h2>Raise Funds To Save A Life...</h2>
            </section>

            <section className={styles.product_container}>
                {projects.map((project) => (
                        <div className={styles.box} key={project.id}>
                            <img src="children-images/item1.jpg" alt=""/>
                                <h3>&nbsp Bhakthiwedantha Child Center</h3>
                                <div className={styles.content}>
                                    <span className={`${styles.project_info} ${styles.description}`}><i class="fa fa-map-marker">&nbsp &nbsp Negombo Rd, Mobola, Wattala</i></span>

                                </div>
                                <div className={styles.actions}>

                                    <a href="#" className={styles.donate_button}>Donate</a>
                                </div>
                        </div>
                ))}
                    </section>
        </div>
    );
};

export default EldersHome;