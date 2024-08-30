import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/select.css';

const Select = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <section class="select_container">
        <div class="form_box_select">
            <div class="form_value">
                <form>
                    <h2>Are you an;</h2>
                    
                    <div class="buttons">
                        <button class="submit" type="button" onClick={() => handleNavigate('signupOrganization')}>Organization</button>
                        <button class="submit" type="button" onClick={() => handleNavigate('signup')}>Individual</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Select;