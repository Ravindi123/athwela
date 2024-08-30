import React from 'react';

const Footer = () => {
    return (
        <>
        <section class="footer">
                <div class="footer-box">
                    <img src="logo.jpg" alt="" />
                    <p>
                        Supporting Our Community <br />
                        Every Donation Makes a Difference in Sri Lanka.
                        Join us in our mission to uplift lives and create lasting change.
                        Together, we can build a brighter future for all
                    </p>

                </div>

                <div class="footer-box">
                    <h3>Follow us</h3>
                    {/* <div class="social">
                        <li><a href="#"><i class='bx bxl-facebook-circle'></i>Facebook</a></li>
                        <li><a href="#"><i class='bx bxl-twitter'></i>Twitter</a></li>
                        <li><a href="#"><i class='bx bxl-instagram' ></i>Instagram</a></li>
                        <li><a href="#"><i class='bx bxl-blogger'></i>Blog</a></li>
                    </div> */}
                </div>

                <div class="footer-box">
                    <h3>View guide</h3>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="payment.html">Donate</a></li>
                    {/* <li><a href="#">Fundraise</a></li>
                    <li><a href="#">Review</a></li> */}
                </div>

                <div class="footer-box">
                    <h3>Contact</h3>
                    <div class="contact">
                        <span><i class='bx bx-map'></i>335, Ruwan Maga, Dodangoda</span>
                        <span><i class='bx bxs-phone' ></i>+94 70 781 4534</span>
                        <span><i class='bx bx-envelope' ></i>athwela@gmail.com</span>
                    </div>
                </div>

            </section>
            <section class="copyright">
                <h3>................................................................................................................</h3>
                <h3>Copyright <i class='bx bxs-copyright'></i> Athwela 2024</h3>
            </section>
           
            </>
    );
};

export default Footer;