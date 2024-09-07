import React, { useState, useEffect } from 'react';
import { useFirebase } from '../firebaseContext';
import { collection, onSnapshot, doc } from "firebase/firestore";
import styles from '../styles/healthcare.module.css';
import { useNavigate } from 'react-router-dom';

const Healthcare = () => {
    const { db } = useFirebase(); // Access Firestore instance from context
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "Health Care"),
            (snapshot) => {
                const projectsArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().projectName,
                    description: doc.data().description,
                    need: doc.data().amount,
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

            <section className={styles.card_container}>
                {projects.map((project) => (

// const navigate = useNavigate();

// const handleNavigate = () => {
//                     navigate('/project', { state: { project.id } }); // Pass the project
// };

//                 }

                <div className={styles.project_card} key={project.id}>
                    <div className={styles.image_container}>
                        <img src="/images/verified.jpg" alt="verified" className={styles.verified_icon} />
                        <img src="/images/kidneyPatient.jpg" alt="project_image" className={styles.project_image} />
                    </div>

                    <div className={styles.project_info}>
                        <span className={styles.category}>Healthcare</span>
                        <a href="project-details.html" className={styles.project_title}>
                            <h3>{project.name}</h3>
                        </a>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.progress_bar}>
                            <div className={styles.progress} style={{ width: `${(project.raised / project.need) * 100}%` }}></div>
                        </div>
                        <p className={styles.status}>{((project.raised / project.need) * 100).toFixed(0)}% funded</p>
                        <p className={styles.funding}>Raised: LKR {project.raised}</p>
                        <p className={styles.needed}>Need: LKR {project.need}</p>
                    </div>
                    <button className={styles.donate_button}>Donate</button>
                </div>
                ))}
            </section>
        </div>
    );
};

export default Healthcare;