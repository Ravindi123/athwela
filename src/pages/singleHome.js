// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from '../styles/singleHome.module.css';
// import 'boxicons';

// const SingleHome = () => {

//     const changeImage = (e) => {
//         var mainImage = document.getElementById("main-image");
//         mainImage.src = e.src;
//     };
      
//     return (
//         <>
//             <section className={styles.home_project_banner}>

//                 <h1>Sri Lankadhara Society</h1>
//                 <img className={styles.main_image} id="main-image" src="home1.pics/smile-7347220.jpg" alt="home-project Image" />
//                 <div className={styles.thumbnail_row}>
//                     <img className={styles.thumbnail} src="home1.pics/pic1.jpg" alt="Thumbnail 1" onClick={changeImage(this)} />
//                     <img className={styles.thumbnail} src="home1.pics/pic2.jpg" alt="Thumbnail 1" onClick={changeImage(this)} />
//                     <img className={styles.thumbnail} src="home1.pics/pic3.jpg" alt="Thumbnail 2" onClick={changeImage(this)} />
//                     <img className={styles.thumbnail} src="home1.pics/pic4.jpg" alt="Thumbnail 3" onClick={changeImage(this)} />
//                     <img className={styles.thumbnail} src="home1.pics/pic5.jpeg" alt="Thumbnail 4" onClick={changeImage(this)} />
//                     <img className={styles.thumbnail} src="home1.pics/pic6.jpg" alt="Thumbnail 4" onClick={changeImage(this)} />
//                 </div>
//             </section><section className={styles.home_project_details}>

//                 <div className={styles.main_content}>
//                     <div className={styles.home_project_article}>
//                         <h2>DESCRIPTION</h2>
//                         <p>
//                             The Sri Lankadhara Society Senior Citizens Home, established in 1967, provides a safe and caring environment for 30 elderly women. Many residents come from disadvantaged backgrounds, with no family support. The Home offers nutritious meals, comfortable accommodation, and recreational activities such as indoor games, reading, and gardening, promoting both physical and mental well-being.

//                             Residents benefit from regular medical checkups, including cataract surgeries, hearing aids, and other essential healthcare services. The Home also ensures spiritual fulfillment, encouraging participation in religious observances and organizing annual pilgrimages to places of religious significance.

//                             In addition to physical and spiritual care, the Home fosters a strong sense of community. Special events such as birthday celebrations, cultural programs, and festivals are regularly organized, bringing joy and a sense of belonging to the residents.

//                             For those from disadvantaged backgrounds, eight rooms are available at a nominal fee, ensuring that no deserving elder is left without care. Furthermore, when a resident passes away, the Home manages all funeral arrangements, offering a dignified farewell.

//                             Thanks to donor contributions, the Home is also able to provide extra amenities such as dental care, physiotherapy, and occasional outings to public parks and scenic spots. The dedicated staff ensure a nurturing environment where each resident is treated with respect and kindness, fostering a warm and familial atmosphere.
//                         </p>
//                         <a href="#" class="donate-btn">Donate Now</a>
//                     </div>
//                 </div>

//                 <div class="sidebar-content">
//                     <div class="home-project-info">
//                         <h2>CONTACT DETAILS</h2>
//                         <div class="profile_content">
//                             <p class="info_title">Address</p>
//                             <p class="info">95,<br />W.A. de Silva Mawatha,<br />Colombo 6,<br />Sri Lanka</p>
//                         </div>
//                         <hr class="styled-line" />
//                         <div class="profile_content">
//                             <p class="info_title">Telephone Number</p>
//                             <p class="info">+94112588838</p>
//                         </div>
//                         <hr class="styled-line" />
//                         <div class="profile_content">
//                             <p class="info_title">Email Address</p>
//                             <p class="info">info@srilankadhara.org</p>
//                         </div>

//                         <a href="#" class="fa fa-facebook"></a>
//                         <a href="#" class="fa fa-instagram"></a>
//                         <a href="#" class="fa fa-youtube"></a>
//                     </div>

//                     <div class="home-project-map">
//                         <h2>LOCATION</h2>
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4172.487099108955!2d79.86168834863625!3d6.876479177673419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb7e932656f%3A0x34ddf5ab16535086!2sSri%20Lanka%20Dara%20Orphanage!5e0!3m2!1sen!2slk!4v1726181608124!5m2!1sen!2slk"
//                             style="width: 100%; height: 200px; border: 0; border-radius: 8px;"
//                             allowfullscreen="" loading="lazy"></iframe>
//                     </div>
//                 </div>
//             </section><section class="comments-section">
//                 <h2>Comments</h2>
//                 <div class="comment-form">
//                     <textarea placeholder="Leave a message..." id="commentInput"></textarea>
//                     <button onclick="addComment()">Post Comment</button>
//                 </div>
//                 <div class="comments-list" id="commentsList"></div>
//             </section>
//         </>
//     );
// };

// export default SingleHome;