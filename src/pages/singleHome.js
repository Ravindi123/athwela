import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import styles from '../styles/singleHome.module.css';
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from '../firebase'; 
import { Carousel } from 'react-responsive-carousel';
import 'boxicons';

const SingleHome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state || {};
    const [imageUrls, setImageUrl] = useState([]);
    const [comments, setComments] = useState(''); 
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        
        const fetchImageUrls = async () => {
            try {
                const docRef = doc(db, "Health Care", project.id); // Replace with correct collection and project ID
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const images = docSnap.data().images || [];
                    setImageUrl(images);
                } else {
                    console.log("No images found!");
                }
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        const fetchComments = async () => {
            try {
                const docRef = doc(db, "Health Care", project.id); // Replace with correct collection and project ID
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const commentsData = docSnap.data().comments || [];
                    setAllComments(commentsData); // Set fetched comments
                } else {
                    console.log("No comments found!");
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

       
        fetchComments();
    }, [db]);

    // const changeImage = (e) => {
    //     var mainImage = document.getElementById("main-image");
    //     mainImage.src = e.src;
    // };

    const addComment = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                const userName = userDocSnap.exists() ? userDocSnap.data().name : "Anonymous";

                const newComment = {
                    name: userName,
                    comment: comments
                };

                const docRef = doc(db, "Health Care", project.id); 
                await updateDoc(docRef, {
                    comments: arrayUnion(newComment) 
                });

                setAllComments(prevComments => [...prevComments, newComment]);
                setComments(''); 
                console.log("Comment added successfully");
            } else {
                console.log("User not authenticated");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };
      
    return (
        <section className="singleHomeContainer">
            <section className={styles.home_project_banner}>
                <h1>Sri Lankadhara Society</h1>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className={styles.carouselBox}>
                    {imageUrls.map((url, index) => (
                        <div key={index}>
                            <img src={url} alt={`${project.name} ${index + 1}`} className={styles.carousel} />
                        </div>
                    ))}
                </Carousel>
            </section>

            <section className={styles.home_project_details}>
                <div className={styles.main_content}>
                    <div className={styles.home_project_article}>
                        <h2>DESCRIPTION</h2>
                        <p>
                            The Sri Lankadhara Society Senior Citizens Home, established in 1967, provides a safe and caring environment for 30 elderly women...
                        </p>
                        <a href="#" className={styles.donate_btn}>Donate Now</a>
                    </div>
                </div>

                <div className={styles.sidebar_content}>
                    <div className={styles.home_project_info}>
                        <h2>CONTACT DETAILS</h2>
                        <div className={styles.profile_content}>
                            <p className={styles.info_title}>Address</p>
                            <p className={styles.info}>95,<br />W.A. de Silva Mawatha,<br />Colombo 6,<br />Sri Lanka</p>
                        </div>
                        <hr className={styles.styled_line} />
                        <div className={styles.profile_content}>
                            <p className={styles.info_title}>Telephone Number</p>
                            <p className={styles.info}>+94112588838</p>
                        </div>
                        <hr className={styles.styled_line} />
                        <div className={styles.profile_content}>
                            <p className={styles.info_title}>Email Address</p>
                            <p className={styles.info}>info@srilankadhara.org</p>
                        </div>

                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>

                    <div className={styles.home_project_map}>
                        <h2>LOCATION</h2>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=..."
                            style={{ width: '100%', height: '200px', border: '0', borderRadius: '8px' }}
                            allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </section>

            <section className={styles.comments_section}>
                <h2>Words of Support</h2>
                <div className={styles.comment_form}>
                    <textarea
                        placeholder="Leave a message..."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                    <button onClick={addComment}>Post Message</button>
                </div>

                <div className={styles.comments_list}>
                    {allComments.length > 0 ? (
                        allComments.map((comment, index) => (
                            <div key={index} className={styles.comment}>
                                <img src="donated.jpeg" alt={comment.name} />
                                <div className={styles.comment_info}>
                                    <p><b>{comment.name}</b></p>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.none}>No comments yet. Be the first to leave a message!</p>
                    )}
                </div>
            </section>
        </section>
    );
};

export default SingleHome;
