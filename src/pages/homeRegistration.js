import React from 'react';
import styles from '../styles/homeRegistration.module.css';

const HomeRegistration = () => {
    return (
        <section className={styles.form_container}>
            <h2>Register a Children's/ Adults' home</h2>


            <form>
                <div className={styles.radioGroup}>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className={styles.form_check_label} htmlFor="inlineRadio1">Children's Home</label>
                    </div>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className={styles.form_check_label} htmlFor="inlineRadio2">Adult's Home</label>
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="project-name">Home Name:</label>
                    <input type="text" id="project-name" name="project-name" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="description">Telephone</label>
                    <input type="text" class="form-control" id="inputEmail3" />
                </div>
                <div>
                    <div className={styles.form_group}>
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="inputState" class="form-label">District</label>
                        <select id="inputState" class="form-select">
                            <option selected disabled>Choose...</option>
                            <option>Colombo</option>
                            <option>Galle</option>
                            <option>Kalutara</option>
                            <option>Gampaha</option>
                            <option>Hambanthota</option>
                            <option>Matara</option>
                            <option>Badulla</option>
                            <option>Monaragala</option>
                            <option>Ratnapura</option>
                            <option>Kagalle</option>
                            <option>Madakalapuwa</option>
                            <option>Ampara</option>
                            <option>Trincomalee</option>
                            <option>Anuradhapura</option>
                            <option>Polonnaruwa</option>
                            <option>Matale</option>
                            <option>Kandy</option>
                            <option>Nuwaraeliya</option>
                            <option>Puttalam</option>
                            <option>Kurunegala</option>
                            <option>Jaffna</option>
                            <option>Mannar</option>
                            <option>Vavuniya</option>
                            <option>Kilinochchi</option>
                            <option>Mullaitivu</option>
                        </select>
                    </div>

                    <div className={styles.form_group}>
                        <label for="exampleFormControlInput1" class="form-label">If you have a website, link for the
                            website</label>
                        <input type="email" clasName={styles.form_control} id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>

                    <div className={styles.form_group}>
                        <label for="social-media">Social Media Profiles:</label>
                        <input className={styles.url_text} type="url" id="facebook" name="facebook" placeholder="Facebook" />
                        <input className={styles.url_text} type="url" id="instagram" name="instagram" placeholder="Instagram" />
                        <input className={styles.url_text} type="url" id="other-social-media" name="other-social-media" placeholder="Others" />
                    </div>

                    <div className={styles.form_group}>
                        <label for="inputAddress" class="form-label">Images</label>
                        <div>
                            <input type="file" class="form-control" id="inputGroupFile02" />
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