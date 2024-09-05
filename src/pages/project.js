import React from 'react';
import styles from '../styles/project.module.css';

const Project = () => {

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

    return (
        <section>
            <section className={styles.heading}>
                <h1>Help Rahul recover from a rare neurological disorder <i className={`${styles.fas} ${styles.fa_check_circle}`}></i></h1>
                <p><b>Fundraising campaign by Ravindi Gunarathna</b></p>
            </section>
            <div className={styles.container}>
                <div className={styles.middle}>
                    <div className={styles.project}>
                        <div className={styles.carousel}>
                            <button className={styles.arrow} onClick={prevImage}></button>
                            <img src="1000_iStock-481073846.jpg" alt="img1" className={styles.active} />
                            <img src="patient_589302497_1000.jpg" alt="img2" />
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
                                <p>Meet Rahul, a resilient soul from Galle whose life took an unexpected turn when she was diagnosed with
                                    a rare neurological disorder. Overnight, everyday tasks became daunting challenges, and uncertainty
                                    clouded her future. Yet, in the face of adversity, Rahul's spirit remained unyielding.</p>
                                <p>Despite the physical and emotional toll of her condition, Rahul refused to let her illness define her.
                                    With the unwavering support of her family and the compassionate care of her doctors, she
                                    embarked on a journey of treatment and rehabilitation. Each day brought small victories — a smile regained,
                                    a step forward in therapy, a moment of peace amidst the storm.</p>
                                <p>Now, Rahul dreams of reclaiming her independence fully. Your donation can help turn her dreams into reality.
                                    Your support will fund critical medical treatments, rehabilitation services, and assistive technologies that
                                    will empower Rahul and others like her to live life to the fullest despite their challenges.</p>
                                <p>Join us in rewriting stories of resilience and triumph. Your generosity will not only provide hope for
                                    Rahul but also inspire countless others facing similar battles. Together, we can make a profound difference
                                    in the lives of those bravely fighting against illness.</p>
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
                    <h1>LKR.200,000.00</h1>
                    <p><b>raised of LKR.200,000,000.00</b></p>
                    <div className={styles.progress_bar}>
                        <div className={styles.progress} style={{ width: '11%' }}></div>
                    </div>
                    <p className={styles.status}><b>10% funded</b></p>
                    <button className={styles.donate}><h2>Donate Now</h2></button>
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
