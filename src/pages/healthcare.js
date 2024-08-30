import React, { useState, useEffect } from 'react';
import { useFirebase } from '../firebaseContext';
import { collection,onSnapshot,doc} from "firebase/firestore";
import '../styles/healthcare.css';

const Healthcare = () => {
    const {db }= useFirebase(); // Access Firestore instance from context
    const [projects, setProjects] = useState([]);


   useEffect(() => {
    const unsubscribe = onSnapshot(
        collection(doc(db, "projects", "yjCSMLeRdUI87BGSlxOQ"), "healthcare"),
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
            <section class="title">
                <h2>Raise Funds To Save A Life</h2>
            </section>

            <section class="card_container">
                {projects.map((project) => (
                    <div class="project_card" key={project.id}>
                        <div class="image_container">
                            <img src="/images/verified.jpg" class="verified_icon" />
                            <img src="/images/kidneyPatient.jpg" class="project_image" />
                        </div>

                        <div class="project_info">
                            <span class="category">Healthcare</span>
                            <a href="project-details.html" class="project_title">
                                <h3>{project.name}</h3>
                            </a>
                            <p class="description">{project.description}</p>
                            <div class="progress_bar">
                                <div class="progress" style={{ width: `${(project.raised / project.need) * 100}%` }}></div>
                            </div>
                            <p class="status">{((project.raised / project.need) * 100).toFixed(0)}% funded</p>
                            <p class="funding">Raised: LKR {project.raised}</p>
                            <p class="needed">Need: LKR {project.need}</p>
                        </div>
                        <button class="donate_button" onclick="window.location.href='donation-page.html'">Donate</button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Healthcare;