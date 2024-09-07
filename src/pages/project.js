import React, { useState, useEffect } from 'react';
import styles from '../styles/project.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

const Project = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state || {}; // Extract the project from state
    console.log(project);
    console.log(project.owner);
    const [ownerName, setOwnerName] = useState(''); // State to store the owner's name
    const [imageUrls, setImageUrl] = useState([]); // State to store the image URL

    useEffect(() => {
        // Fetch the owner's name when the component loads
        const fetchOwnerName = async () => {
            try {
                const docRef = doc(db, "users", project.owner);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const fieldValue = docSnap.data().name; // Fetch the 'name' field
                    console.log("Document data:", fieldValue);
                    setOwnerName(fieldValue); // Set the owner's name
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        const fetchImageUrl = async () => {
            try {
                const docRef = doc(db, "Health Care", project.id); // Replace with the correct collection and project id
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const url = docSnap.data().images; // Assuming 'imageUrl' is the field name
                    setImageUrl(url); // Set the image URL state
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching image URL:", error);
            }
        };

        fetchOwnerName();
        fetchImageUrl();

    }, [project.owner , project.id]);

    const handleNavigate = (project) => {
        navigate('/donationBox', { state: { project } }); // Pass the project object in the state
    };

    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel img');


    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    function addComment() {
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentsList = document.getElementById('commentsList');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.innerText = commentText;
            commentsList.appendChild(newComment);
            commentInput.value = '';
        }
    }

    const tabs = document.querySelectorAll('.story_tab');
    const allContent = document.querySelectorAll('.story');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(tab => { tab.classList.remove('active') });
            tab.classList.add('active');

            var line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";

            allContent.forEach(content => { content.classList.remove('active') });
            allContent[index].classList.add('active');
        });
    });

    if (!project) {
        return <p>No project data found.</p>;
    }

    return (
        <section>
            <section className={styles.heading}>
                <h1>{project.name}<i className={`${styles.fas} ${styles.fa_check_circle}`}></i></h1>
                <p><b>Fundraising campaign by {ownerName}</b></p>
            </section>
            <div className={styles.container}>
                <div className={styles.middle}>
                    <div className={styles.project}>
                        <div className={styles.carousel}>
                            <button className={styles.arrow} onClick={prevImage}></button>
                            {/* <img src="1000_iStock-481073846.jpg" alt="img1" className={styles.active} /> */}
                            {imageUrls.map((url, index) => (
                                <img key={index} src={url} alt={`${project.name} ${index + 1}`} className={styles.active} />
                            ))}
                            <button className={styles.arrow} onClick={nextImage}></button>
                        </div>
                        <div className={styles.story_updates}>
                            <div className={styles.tabs}>
                                <button className={`${styles.story_tab} ${styles.active}`}>Story</button>
                                <button className={styles.story_tab}>Updates</button>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.content}>
                                <div className={`${styles.story} ${styles.active}`}></div>
                                <p>{project.description}</p>
                            </div>
                            <div className={`${styles.story} ${styles.updates}`}>
                                <p> No updates yet.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.comments_section}>
                        <h2>Words of Support</h2>
                        <div className={styles.comment_form}>
                            <textarea placeholder="Leave a message..." id="commentInput"></textarea>
                            <button onClick={addComment}>Post Message</button>
                        </div>
                        <div className={styles.comments_list} id="commentsList"></div>
                    </div>
                </div>
                <div className={styles.donation_box}>
                    <h1>{project.raised}</h1>
                    <p><b>raised of {project.need}</b></p>
                    <div className={styles.progress_bar}>
                        <div className={styles.progress} style={{ width: `${(project.raised / project.need) * 100}%` }}></div>
                    </div>
                    <p className={styles.status}><b>{((project.raised / project.need) * 100).toFixed(0)}% funded</b></p>
                    <button className={styles.donate} onClick={() => handleNavigate(project)}><h2>Donate Now</h2></button>
                    <button className={styles.share} >
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-whatsapp"></i>
                        <b> Share with Friends</b>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Project;
